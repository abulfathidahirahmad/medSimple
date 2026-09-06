/**
 * MCQ Practice Web Application - Core Engine
 * Pure Vanilla JavaScript (ES6+)
 *
 * This single file drives BOTH pages:
 *   - index.html  (Paediatrics & Medical MTF practice bank)  -> body[data-page="paediatrics"]
 *   - OandG.html  (Obstetrics & Gynaecology single-best-answer bank) -> body[data-page="oandg"]
 *
 * The correct engine is selected at load time based on the page's data-page
 * attribute, so each page only ever queries the DOM elements it actually has.
 */

(() => {
  'use strict';

  const PAGE = document.body.getAttribute('data-page');

  document.addEventListener('DOMContentLoaded', () => {
    if (PAGE === 'oandg') {
      runOandGApp();
    } else if (PAGE === 'paediatrics') {
      runPaediatricsApp();
    }
  });

  /* ======================================================================
   * PAEDIATRICS & MEDICAL MTF PRACTICE ENGINE
   * (Practice Mode only — Study Mode has been removed. The former
   * "Study Mode" button now navigates to the O&G bank instead.)
   * ==================================================================== */
  function runPaediatricsApp() {
    const state = {
      questions: [],
      filteredQuestions: [],
      currentIndex: 0,
      filter: 'all',  // 'all' | 'unanswered' | 'correct' | 'incorrect' | 'partial' | 'bookmarked'
      searchQuery: '',

      // User data persisted in LocalStorage
      userAnswers: {},     // { qId: { 'A': 'T'|'F', ... } }
      submittedState: {},  // { qId: true|false }
      bookmarks: new Set(),
      notes: {},           // { qId: 'text' }
      visited: new Set()
    };

    const dom = {
      loadingScreen: document.getElementById('loading-screen'),
      loadingBar: document.getElementById('loading-bar'),
      app: document.getElementById('app'),

      // Header
      btnToggleDrawer: document.getElementById('btn-toggle-drawer'),
      btnGotoOandG: document.getElementById('mode-study'),
      modePractice: document.getElementById('mode-practice'),
      searchInput: document.getElementById('search-input'),
      btnStats: document.getElementById('btn-stats'),

      // Sidebar Drawer
      paletteDrawer: document.getElementById('palette-drawer'),
      drawerBackdrop: document.getElementById('drawer-backdrop'),
      btnCloseDrawer: document.getElementById('btn-close-drawer'),
      jumpInput: document.getElementById('jump-input'),
      jumpBtn: document.getElementById('jump-btn'),
      filterChips: document.querySelectorAll('.chip'),
      questionGrid: document.getElementById('question-grid'),
      countAll: document.getElementById('count-all'),
      countUnanswered: document.getElementById('count-unanswered'),
      countCorrect: document.getElementById('count-correct'),
      countIncorrect: document.getElementById('count-incorrect'),
      countBookmarked: document.getElementById('count-bookmarked'),

      // Hero Landing
      landingBanner: document.getElementById('landing-banner'),
      btnHeroStart: document.getElementById('btn-hero-start'),
      btnHeroContinue: document.getElementById('btn-hero-continue'),

      // Question View
      questionView: document.getElementById('question-view'),
      questionIndexBadge: document.getElementById('question-index-badge'),
      questionTypeBadge: document.getElementById('question-type-badge'),
      questionStatusBadge: document.getElementById('question-status-badge'),
      btnBookmark: document.getElementById('btn-bookmark'),
      bookmarkIcon: document.getElementById('bookmark-icon'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),

      // Action Bar
      btnSubmit: document.getElementById('btn-submit'),
      btnResetCurrent: document.getElementById('btn-reset-current'),
      btnPrev: document.getElementById('btn-prev'),
      btnNext: document.getElementById('btn-next'),

      // Notes
      notesDetails: document.getElementById('notes-details'),
      notesInput: document.getElementById('notes-input'),

      // Stats Modal
      statsModal: document.getElementById('stats-modal'),
      btnCloseStats: document.getElementById('btn-close-stats'),
      statAccuracy: document.getElementById('stat-accuracy'),
      gaugeProgress: document.getElementById('gauge-progress'),
      statTotal: document.getElementById('stat-total'),
      statAttempted: document.getElementById('stat-attempted'),
      statCorrect: document.getElementById('stat-correct'),
      statIncorrect: document.getElementById('stat-incorrect'),
      statRemaining: document.getElementById('stat-remaining'),
      statBookmarked: document.getElementById('stat-bookmarked'),
      btnCopyStats: document.getElementById('btn-copy-stats'),
      btnResetProgress: document.getElementById('btn-reset-progress')
    };

    async function init() {
      loadLocalState();
      setupEventListeners();
      await fetchQuestionBank();
    }

    function loadLocalState() {
      try {
        const savedAnswers = localStorage.getItem('mcq_user_answers');
        if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

        const savedSubmitted = localStorage.getItem('mcq_submitted');
        if (savedSubmitted) state.submittedState = JSON.parse(savedSubmitted);

        const savedBookmarks = localStorage.getItem('mcq_bookmarks');
        if (savedBookmarks) state.bookmarks = new Set(JSON.parse(savedBookmarks));

        const savedNotes = localStorage.getItem('mcq_notes');
        if (savedNotes) state.notes = JSON.parse(savedNotes);

        const savedVisited = localStorage.getItem('mcq_visited');
        if (savedVisited) state.visited = new Set(JSON.parse(savedVisited));

        const savedIdx = localStorage.getItem('mcq_current_index');
        if (savedIdx !== null) state.currentIndex = parseInt(savedIdx, 10) || 0;
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
    }

    function saveLocalState() {
      try {
        localStorage.setItem('mcq_user_answers', JSON.stringify(state.userAnswers));
        localStorage.setItem('mcq_submitted', JSON.stringify(state.submittedState));
        localStorage.setItem('mcq_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
        localStorage.setItem('mcq_notes', JSON.stringify(state.notes));
        localStorage.setItem('mcq_visited', JSON.stringify(Array.from(state.visited)));
        localStorage.setItem('mcq_current_index', state.currentIndex);
      } catch (e) {
        console.warn('Failed to save to LocalStorage:', e);
      }
    }

    async function fetchQuestionBank() {
      try {
        setLoadingProgress(40);

        let data;
        if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
          data = window.QUESTIONS_DATA;
        } else {
          const response = await fetch('questions.json');
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          data = await response.json();
        }

        setLoadingProgress(80);
        state.questions = data;
        if (dom.jumpInput) dom.jumpInput.max = data.length;
        setLoadingProgress(100);

        setTimeout(() => {
          dom.loadingScreen.style.opacity = '0';
          setTimeout(() => {
            dom.loadingScreen.classList.add('hidden');
            dom.app.classList.remove('hidden');

            applyFiltersAndSearch();

            if (state.visited.size > 0) {
              dom.btnHeroContinue.classList.remove('hidden');
            }

            renderCurrentQuestion();
            renderQuestionGrid();
            updateCounts();
          }, 400);
        }, 300);

      } catch (error) {
        console.error('Failed to load question bank:', error);
        dom.loadingScreen.querySelector('.loading-sub').textContent = 'Error loading question bank. Please refresh.';
        dom.loadingBar.style.backgroundColor = 'var(--color-danger)';
      }
    }

    function setLoadingProgress(percent) {
      if (dom.loadingBar) {
        dom.loadingBar.style.width = `${percent}%`;
      }
    }

    function applyFiltersAndSearch() {
      const query = state.searchQuery.toLowerCase().trim();

      state.filteredQuestions = state.questions.filter((q) => {
        const qStatus = getQuestionStatus(q.id);
        let matchesFilter = true;
        if (state.filter === 'unanswered') matchesFilter = !state.submittedState[q.id];
        else if (state.filter === 'correct') matchesFilter = qStatus === 'correct';
        else if (state.filter === 'incorrect') matchesFilter = qStatus === 'incorrect';
        else if (state.filter === 'partial') matchesFilter = qStatus === 'partial';
        else if (state.filter === 'bookmarked') matchesFilter = state.bookmarks.has(q.id);

        if (!matchesFilter) return false;

        if (!query) return true;

        const inQuestion = q.question.toLowerCase().includes(query);
        const inOptions = q.options.some(opt =>
          opt.text.toLowerCase().includes(query) ||
          (opt.explanation || '').toLowerCase().includes(query)
        );

        return inQuestion || inOptions;
      });

      if (state.currentIndex >= state.filteredQuestions.length) {
        state.currentIndex = Math.max(0, state.filteredQuestions.length - 1);
      }
    }

    function getQuestionStatus(qId) {
      const choices = state.userAnswers[qId] || {};
      const hasChoices = Object.keys(choices).length > 0;
      const isSubmitted = !!state.submittedState[qId];

      if (!isSubmitted && !hasChoices) {
        return state.visited.has(qId) ? 'visited' : 'unvisited';
      }

      const q = state.questions.find(item => item.id === qId);
      if (!q) return 'visited';

      let correctCount = 0;
      const totalOptions = q.options.length;

      for (const opt of q.options) {
        const userChoice = choices[opt.id];
        if (userChoice !== undefined && userChoice === opt.answer) {
          correctCount++;
        }
      }

      if (correctCount === totalOptions) {
        return 'correct';
      } else if (correctCount >= Math.ceil(totalOptions / 2)) {
        return 'partial';
      } else {
        return 'incorrect';
      }
    }

    function renderCurrentQuestion() {
      if (state.filteredQuestions.length === 0) {
        renderEmptyState();
        return;
      }

      dom.landingBanner.classList.add('hidden');
      dom.questionView.classList.remove('hidden');

      const q = state.filteredQuestions[state.currentIndex];
      state.visited.add(q.id);
      saveLocalState();

      const overallIndex = state.questions.findIndex(item => item.id === q.id) + 1;
      dom.questionIndexBadge.textContent = `Question ${overallIndex} of ${state.questions.length}`;

      const qStatus = getQuestionStatus(q.id);
      dom.questionStatusBadge.textContent = qStatus.toUpperCase();
      dom.questionStatusBadge.className = `badge badge-outline status-${qStatus}`;

      if (state.bookmarks.has(q.id)) {
        dom.bookmarkIcon.setAttribute('fill', 'var(--color-warning)');
        dom.bookmarkIcon.setAttribute('stroke', 'var(--color-warning)');
      } else {
        dom.bookmarkIcon.setAttribute('fill', 'none');
        dom.bookmarkIcon.setAttribute('stroke', 'currentColor');
      }

      dom.questionText.textContent = q.question;

      renderOptions(q);

      dom.notesInput.value = state.notes[q.id] || '';
      dom.notesDetails.open = !!state.notes[q.id];

      const isSubmitted = !!state.submittedState[q.id];
      if (!isSubmitted) {
        dom.btnSubmit.classList.remove('hidden');
      } else {
        dom.btnSubmit.classList.add('hidden');
      }

      dom.btnPrev.disabled = state.currentIndex === 0;
      dom.btnNext.disabled = state.currentIndex === state.filteredQuestions.length - 1;

      renderQuestionGrid();
      updateCounts();
    }

    function renderOptions(q) {
      dom.optionsContainer.innerHTML = '';
      const qId = q.id;
      const choices = state.userAnswers[qId] || {};
      const isSubmitted = !!state.submittedState[qId];

      q.options.forEach((opt) => {
        const row = document.createElement('div');
        row.className = 'option-row';

        const userChoice = choices[opt.id]; // 'T' | 'F' | undefined
        const targetAnswer = opt.answer === 'T' ? 'True' : 'False';

        let feedbackBadgeHtml = '';

        if (isSubmitted) {
          if (userChoice === undefined) {
            feedbackBadgeHtml = `
              <div class="option-feedback-badge badge-missed-feedback">
                ! Unanswered — Answer: <strong>${targetAnswer}</strong>
              </div>
            `;
          } else if (userChoice === opt.answer) {
            row.classList.add('correct-choice');
            feedbackBadgeHtml = `
              <div class="option-feedback-badge badge-correct-feedback">
                ✓ Correct Choice (${targetAnswer})
              </div>
            `;
          } else {
            row.classList.add('incorrect-choice');
            feedbackBadgeHtml = `
              <div class="option-feedback-badge badge-incorrect-feedback">
                ✗ Incorrect (${userChoice === 'T' ? 'True' : 'False'}) — Answer: <strong>${targetAnswer}</strong>
              </div>
            `;
          }
        }

        const showExplanation = isSubmitted;

        row.innerHTML = `
          <div class="option-main">
            <div class="option-letter-badge">${opt.id}</div>
            <div class="option-statement">
              <div class="opt-text-content">${opt.text}</div>
              ${feedbackBadgeHtml}
            </div>

            <!-- T/F Control Buttons -->
            <div class="tf-control">
              <button class="tf-btn tf-btn-t ${userChoice === 'T' ? 'selected' : ''}" data-letter="${opt.id}" data-val="T" ${isSubmitted ? 'disabled' : ''}>T</button>
              <button class="tf-btn tf-btn-f ${userChoice === 'F' ? 'selected' : ''}" data-letter="${opt.id}" data-val="F" ${isSubmitted ? 'disabled' : ''}>F</button>
            </div>
          </div>

          ${(showExplanation && opt.explanation) ? `
            <div class="option-explanation">
              <div class="explanation-header">Explanation (${opt.id})</div>
              ${opt.explanation}
            </div>
          ` : ''}
        `;

        const tfButtons = row.querySelectorAll('.tf-btn');
        tfButtons.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const letter = btn.getAttribute('data-letter');
            const val = btn.getAttribute('data-val');
            toggleOptionChoice(qId, letter, val);
          });
        });

        dom.optionsContainer.appendChild(row);
      });
    }

    function toggleOptionChoice(qId, letter, val) {
      if (state.submittedState[qId]) return;

      if (!state.userAnswers[qId]) {
        state.userAnswers[qId] = {};
      }

      if (state.userAnswers[qId][letter] === val) {
        delete state.userAnswers[qId][letter];
      } else {
        state.userAnswers[qId][letter] = val;
      }

      saveLocalState();
      renderCurrentQuestion();
    }

    function submitCurrentQuestion() {
      const q = state.filteredQuestions[state.currentIndex];
      if (!q) return;

      state.submittedState[q.id] = true;
      saveLocalState();
      renderCurrentQuestion();
    }

    function clearCurrentQuestionChoices() {
      const q = state.filteredQuestions[state.currentIndex];
      if (!q) return;

      delete state.userAnswers[q.id];
      delete state.submittedState[q.id];
      saveLocalState();
      renderCurrentQuestion();
    }

    function renderEmptyState() {
      dom.questionView.classList.add('hidden');
      dom.landingBanner.classList.remove('hidden');
      dom.landingBanner.querySelector('.hero-title').textContent = 'No Questions Found';
      dom.landingBanner.querySelector('.hero-desc').textContent = 'Try adjusting your search query or filter selection.';
      dom.btnHeroStart.classList.add('hidden');
      dom.btnHeroContinue.classList.add('hidden');
    }

    function renderQuestionGrid() {
      dom.questionGrid.innerHTML = '';

      state.filteredQuestions.forEach((q, idx) => {
        const gridBtn = document.createElement('button');
        gridBtn.className = 'grid-item';

        const overallIndex = state.questions.findIndex(item => item.id === q.id) + 1;
        gridBtn.textContent = overallIndex;

        const qStatus = getQuestionStatus(q.id);
        gridBtn.classList.add(qStatus);

        if (idx === state.currentIndex) {
          gridBtn.classList.add('current');
        }

        if (state.bookmarks.has(q.id)) {
          gridBtn.classList.add('bookmarked');
        }

        gridBtn.addEventListener('click', () => {
          state.currentIndex = idx;
          saveLocalState();
          renderCurrentQuestion();
          if (window.innerWidth <= 768) {
            closeDrawer();
          }
        });

        dom.questionGrid.appendChild(gridBtn);
      });
    }

    function updateCounts() {
      let unanswered = 0;
      let correct = 0;
      let incorrect = 0;
      let partial = 0;
      state.questions.forEach(q => {
        const st = getQuestionStatus(q.id);
        const hasAnswered = state.submittedState[q.id] || (state.userAnswers[q.id] && Object.keys(state.userAnswers[q.id]).length > 0);
        if (!hasAnswered) unanswered++;
        if (st === 'correct') correct++;
        if (st === 'partial') partial++;
        if (st === 'incorrect') incorrect++;
      });

      dom.countAll.textContent = state.questions.length;
      dom.countUnanswered.textContent = unanswered;
      dom.countCorrect.textContent = correct;
      dom.countIncorrect.textContent = incorrect;
      const countPartialElem = document.getElementById('count-partial');
      if (countPartialElem) countPartialElem.textContent = partial;
      dom.countBookmarked.textContent = state.bookmarks.size;
    }

    function updateStatsModal() {
      const total = state.questions.length;
      let attempted = 0;
      let correctOptions = 0;
      let totalOptionsSubmitted = 0;

      state.questions.forEach(q => {
        if (state.submittedState[q.id]) {
          attempted++;
        }
        const choices = state.userAnswers[q.id] || {};
        q.options.forEach(opt => {
          if (choices[opt.id] !== undefined) {
            totalOptionsSubmitted++;
            if (choices[opt.id] === opt.answer) {
              correctOptions++;
            }
          }
        });
      });

      const incorrectOptions = totalOptionsSubmitted - correctOptions;
      const accuracy = totalOptionsSubmitted > 0 ? Math.round((correctOptions / totalOptionsSubmitted) * 100) : 0;
      const remaining = total - attempted;

      dom.statTotal.textContent = total;
      dom.statAttempted.textContent = attempted;
      dom.statCorrect.textContent = correctOptions;
      dom.statIncorrect.textContent = incorrectOptions;
      dom.statRemaining.textContent = remaining;
      dom.statBookmarked.textContent = state.bookmarks.size;
      dom.statAccuracy.textContent = `${accuracy}%`;

      const circumference = 314;
      const offset = circumference - (accuracy / 100) * circumference;
      dom.gaugeProgress.style.strokeDashoffset = offset;
    }

    function toggleDrawer() {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        dom.paletteDrawer.classList.toggle('open');
        dom.drawerBackdrop.classList.toggle('open');
      } else {
        dom.paletteDrawer.classList.toggle('collapsed');
      }
    }

    function closeDrawer() {
      dom.paletteDrawer.classList.remove('open');
      dom.drawerBackdrop.classList.remove('open');
    }

    function openStats() {
      updateStatsModal();
      dom.statsModal.classList.remove('hidden');
    }

    function closeStats() {
      dom.statsModal.classList.add('hidden');
    }

    function setupEventListeners() {
      // "Study Mode" button now navigates to the O&G bank instead of switching modes
      if (dom.btnGotoOandG) {
        dom.btnGotoOandG.addEventListener('click', () => {
          window.location.href = 'OandG.html';
        });
      }
      // Practice Mode is the only mode now — button stays visually active, no-op on click
      if (dom.modePractice) {
        dom.modePractice.addEventListener('click', () => {
          renderCurrentQuestion();
        });
      }

      dom.btnPrev.addEventListener('click', () => {
        if (state.currentIndex > 0) {
          state.currentIndex--;
          saveLocalState();
          renderCurrentQuestion();
        }
      });

      dom.btnNext.addEventListener('click', () => {
        if (state.currentIndex < state.filteredQuestions.length - 1) {
          state.currentIndex++;
          saveLocalState();
          renderCurrentQuestion();
        }
      });

      dom.btnSubmit.addEventListener('click', submitCurrentQuestion);
      dom.btnResetCurrent.addEventListener('click', clearCurrentQuestionChoices);

      dom.btnBookmark.addEventListener('click', () => {
        const q = state.filteredQuestions[state.currentIndex];
        if (!q) return;

        if (state.bookmarks.has(q.id)) {
          state.bookmarks.delete(q.id);
        } else {
          state.bookmarks.add(q.id);
        }
        saveLocalState();
        renderCurrentQuestion();
      });

      dom.notesInput.addEventListener('input', (e) => {
        const q = state.filteredQuestions[state.currentIndex];
        if (!q) return;

        state.notes[q.id] = e.target.value;
        saveLocalState();
      });

      dom.btnToggleDrawer.addEventListener('click', toggleDrawer);
      dom.btnCloseDrawer.addEventListener('click', closeDrawer);
      dom.drawerBackdrop.addEventListener('click', closeDrawer);

      const handleJump = () => {
        const val = parseInt(dom.jumpInput.value, 10);
        if (val >= 1 && val <= state.questions.length) {
          const targetIdx = state.filteredQuestions.findIndex(q => q.id === val);
          if (targetIdx !== -1) {
            state.currentIndex = targetIdx;
            saveLocalState();
            renderCurrentQuestion();
            dom.jumpInput.value = '';
            if (window.innerWidth <= 768) closeDrawer();
          } else {
            alert(`Question #${val} is not in the current filtered view.`);
          }
        }
      };
      dom.jumpBtn.addEventListener('click', handleJump);
      dom.jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleJump();
      });

      dom.filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          dom.filterChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          state.filter = chip.getAttribute('data-filter');
          applyFiltersAndSearch();
          renderCurrentQuestion();
        });
      });

      dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        applyFiltersAndSearch();
        renderCurrentQuestion();
      });

      dom.btnHeroStart.addEventListener('click', () => {
        dom.landingBanner.classList.add('hidden');
        dom.questionView.classList.remove('hidden');
        state.currentIndex = 0;
        renderCurrentQuestion();
      });
      dom.btnHeroContinue.addEventListener('click', () => {
        dom.landingBanner.classList.add('hidden');
        dom.questionView.classList.remove('hidden');
        renderCurrentQuestion();
      });

      dom.btnStats.addEventListener('click', openStats);
      dom.btnCloseStats.addEventListener('click', closeStats);
      dom.statsModal.addEventListener('click', (e) => {
        if (e.target === dom.statsModal) closeStats();
      });

      if (dom.btnCopyStats) {
        dom.btnCopyStats.addEventListener('click', () => {
          const text = `📊 MCQ Study Bank Progress:
• Total Questions: ${dom.statTotal.textContent}
• Attempted: ${dom.statAttempted.textContent}
• Remaining: ${dom.statRemaining.textContent}
• Accuracy: ${dom.statAccuracy.textContent}
• Correct Options: ${dom.statCorrect.textContent}
• Incorrect Options: ${dom.statIncorrect.textContent}
• Bookmarked: ${dom.statBookmarked.textContent}`;

          navigator.clipboard.writeText(text).then(() => {
            const orig = dom.btnCopyStats.textContent;
            dom.btnCopyStats.textContent = '✓ Copied to Clipboard!';
            setTimeout(() => {
              dom.btnCopyStats.textContent = orig;
            }, 2000);
          }).catch(() => {
            alert(text);
          });
        });
      }

      dom.btnResetProgress.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress, bookmarks, and notes?')) {
          localStorage.removeItem('mcq_user_answers');
          localStorage.removeItem('mcq_submitted');
          localStorage.removeItem('mcq_bookmarks');
          localStorage.removeItem('mcq_notes');
          localStorage.removeItem('mcq_visited');
          localStorage.removeItem('mcq_current_index');
          state.userAnswers = {};
          state.submittedState = {};
          state.bookmarks = new Set();
          state.notes = {};
          state.visited = new Set();
          state.currentIndex = 0;

          closeStats();
          applyFiltersAndSearch();
          renderCurrentQuestion();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          return;
        }

        if (e.key === 'ArrowLeft' || e.key === 'a') {
          dom.btnPrev.click();
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
          dom.btnNext.click();
        } else if (e.key.toLowerCase() === 'b') {
          dom.btnBookmark.click();
        } else if (e.key === '/') {
          e.preventDefault();
          dom.searchInput.focus();
        } else if (e.key === 'Enter') {
          if (!dom.btnSubmit.classList.contains('hidden')) {
            dom.btnSubmit.click();
          }
        }
      });
    }

    init();
  }

  /* ======================================================================
   * OBSTETRICS & GYNAECOLOGY — SINGLE BEST ANSWER PRACTICE ENGINE
   * One correct option per question, one unified explanation shown after
   * the answer is submitted.
   * ==================================================================== */
  function runOandGApp() {
    const state = {
      questions: [],
      filteredQuestions: [],
      currentIndex: 0,
      filter: 'all', // 'all' | 'unanswered' | 'correct' | 'incorrect' | 'bookmarked'
      searchQuery: '',

      userAnswers: {},    // { qId: 'A' }
      submittedState: {}, // { qId: true }
      bookmarks: new Set(),
      notes: {},
      visited: new Set()
    };

    const dom = {
      loadingScreen: document.getElementById('loading-screen'),
      loadingBar: document.getElementById('loading-bar'),
      app: document.getElementById('app'),

      btnToggleDrawer: document.getElementById('btn-toggle-drawer'),
      btnGotoPaed: document.getElementById('btn-goto-paed'),
      searchInput: document.getElementById('search-input'),
      btnStats: document.getElementById('btn-stats'),

      paletteDrawer: document.getElementById('palette-drawer'),
      drawerBackdrop: document.getElementById('drawer-backdrop'),
      btnCloseDrawer: document.getElementById('btn-close-drawer'),
      jumpInput: document.getElementById('jump-input'),
      jumpBtn: document.getElementById('jump-btn'),
      filterChips: document.querySelectorAll('.chip'),
      questionGrid: document.getElementById('question-grid'),
      countAll: document.getElementById('count-all'),
      countUnanswered: document.getElementById('count-unanswered'),
      countCorrect: document.getElementById('count-correct'),
      countIncorrect: document.getElementById('count-incorrect'),
      countBookmarked: document.getElementById('count-bookmarked'),

      landingBanner: document.getElementById('landing-banner'),
      btnHeroStart: document.getElementById('btn-hero-start'),
      btnHeroContinue: document.getElementById('btn-hero-continue'),

      questionView: document.getElementById('question-view'),
      questionIndexBadge: document.getElementById('question-index-badge'),
      questionTypeBadge: document.getElementById('question-type-badge'),
      questionStatusBadge: document.getElementById('question-status-badge'),
      btnBookmark: document.getElementById('btn-bookmark'),
      bookmarkIcon: document.getElementById('bookmark-icon'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),
      explanationPanel: document.getElementById('sba-explanation'),
      explanationBody: document.getElementById('sba-explanation-body'),

      btnSubmit: document.getElementById('btn-submit'),
      btnResetCurrent: document.getElementById('btn-reset-current'),
      btnPrev: document.getElementById('btn-prev'),
      btnNext: document.getElementById('btn-next'),

      notesDetails: document.getElementById('notes-details'),
      notesInput: document.getElementById('notes-input'),

      statsModal: document.getElementById('stats-modal'),
      btnCloseStats: document.getElementById('btn-close-stats'),
      statAccuracy: document.getElementById('stat-accuracy'),
      gaugeProgress: document.getElementById('gauge-progress'),
      statTotal: document.getElementById('stat-total'),
      statAttempted: document.getElementById('stat-attempted'),
      statCorrect: document.getElementById('stat-correct'),
      statIncorrect: document.getElementById('stat-incorrect'),
      statRemaining: document.getElementById('stat-remaining'),
      statBookmarked: document.getElementById('stat-bookmarked'),
      btnCopyStats: document.getElementById('btn-copy-stats'),
      btnResetProgress: document.getElementById('btn-reset-progress')
    };

    async function init() {
      loadLocalState();
      setupEventListeners();
      await fetchQuestionBank();
    }

    function loadLocalState() {
      try {
        const savedAnswers = localStorage.getItem('og_user_answers');
        if (savedAnswers) state.userAnswers = JSON.parse(savedAnswers);

        const savedSubmitted = localStorage.getItem('og_submitted');
        if (savedSubmitted) state.submittedState = JSON.parse(savedSubmitted);

        const savedBookmarks = localStorage.getItem('og_bookmarks');
        if (savedBookmarks) state.bookmarks = new Set(JSON.parse(savedBookmarks));

        const savedNotes = localStorage.getItem('og_notes');
        if (savedNotes) state.notes = JSON.parse(savedNotes);

        const savedVisited = localStorage.getItem('og_visited');
        if (savedVisited) state.visited = new Set(JSON.parse(savedVisited));

        const savedIdx = localStorage.getItem('og_current_index');
        if (savedIdx !== null) state.currentIndex = parseInt(savedIdx, 10) || 0;
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
    }

    function saveLocalState() {
      try {
        localStorage.setItem('og_user_answers', JSON.stringify(state.userAnswers));
        localStorage.setItem('og_submitted', JSON.stringify(state.submittedState));
        localStorage.setItem('og_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
        localStorage.setItem('og_notes', JSON.stringify(state.notes));
        localStorage.setItem('og_visited', JSON.stringify(Array.from(state.visited)));
        localStorage.setItem('og_current_index', state.currentIndex);
      } catch (e) {
        console.warn('Failed to save to LocalStorage:', e);
      }
    }

    async function fetchQuestionBank() {
      try {
        setLoadingProgress(40);

        let data;
        if (window.OANDG_QUESTIONS_DATA && Array.isArray(window.OANDG_QUESTIONS_DATA)) {
          data = window.OANDG_QUESTIONS_DATA;
        } else {
          const response = await fetch('OandG-questions.json');
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          data = await response.json();
        }

        setLoadingProgress(80);
        state.questions = data;
        if (dom.jumpInput) dom.jumpInput.max = data.length;
        setLoadingProgress(100);

        setTimeout(() => {
          dom.loadingScreen.style.opacity = '0';
          setTimeout(() => {
            dom.loadingScreen.classList.add('hidden');
            dom.app.classList.remove('hidden');

            applyFiltersAndSearch();

            if (state.visited.size > 0) {
              dom.btnHeroContinue.classList.remove('hidden');
            }

            renderCurrentQuestion();
            renderQuestionGrid();
            updateCounts();
          }, 400);
        }, 300);

      } catch (error) {
        console.error('Failed to load O&G question bank:', error);
        dom.loadingScreen.querySelector('.loading-sub').textContent = 'Error loading question bank. Please refresh.';
        dom.loadingBar.style.backgroundColor = 'var(--color-danger)';
      }
    }

    function setLoadingProgress(percent) {
      if (dom.loadingBar) {
        dom.loadingBar.style.width = `${percent}%`;
      }
    }

    function applyFiltersAndSearch() {
      const query = state.searchQuery.toLowerCase().trim();

      state.filteredQuestions = state.questions.filter((q) => {
        const qStatus = getQuestionStatus(q.id);
        let matchesFilter = true;
        if (state.filter === 'unanswered') matchesFilter = !state.submittedState[q.id];
        else if (state.filter === 'correct') matchesFilter = qStatus === 'correct';
        else if (state.filter === 'incorrect') matchesFilter = qStatus === 'incorrect';
        else if (state.filter === 'bookmarked') matchesFilter = state.bookmarks.has(q.id);

        if (!matchesFilter) return false;

        if (!query) return true;

        const inQuestion = q.question.toLowerCase().includes(query);
        const inTopic = (q.topic || '').toLowerCase().includes(query);
        const inOptions = q.options.some(opt => opt.text.toLowerCase().includes(query));
        const inExplanation = (q.explanation || '').toLowerCase().includes(query);

        return inQuestion || inTopic || inOptions || inExplanation;
      });

      if (state.currentIndex >= state.filteredQuestions.length) {
        state.currentIndex = Math.max(0, state.filteredQuestions.length - 1);
      }
    }

    function getQuestionStatus(qId) {
      const isSubmitted = !!state.submittedState[qId];
      const userChoice = state.userAnswers[qId];

      if (!isSubmitted && !userChoice) {
        return state.visited.has(qId) ? 'visited' : 'unvisited';
      }
      if (!isSubmitted) {
        return state.visited.has(qId) ? 'visited' : 'unvisited';
      }

      const q = state.questions.find(item => item.id === qId);
      if (!q) return 'visited';

      return userChoice === q.correctAnswer ? 'correct' : 'incorrect';
    }

    function renderCurrentQuestion() {
      if (state.filteredQuestions.length === 0) {
        renderEmptyState();
        return;
      }

      dom.landingBanner.classList.add('hidden');
      dom.questionView.classList.remove('hidden');

      const q = state.filteredQuestions[state.currentIndex];
      state.visited.add(q.id);
      saveLocalState();

      const overallIndex = state.questions.findIndex(item => item.id === q.id) + 1;
      dom.questionIndexBadge.textContent = `Question ${overallIndex} of ${state.questions.length}`;
      dom.questionTypeBadge.textContent = q.type === 'EMQ' ? 'EMQ — Best Fit' : 'Single Best Answer';

      const qStatus = getQuestionStatus(q.id);
      dom.questionStatusBadge.textContent = qStatus.toUpperCase();
      dom.questionStatusBadge.className = `badge badge-outline status-${qStatus}`;

      if (state.bookmarks.has(q.id)) {
        dom.bookmarkIcon.setAttribute('fill', 'var(--color-warning)');
        dom.bookmarkIcon.setAttribute('stroke', 'var(--color-warning)');
      } else {
        dom.bookmarkIcon.setAttribute('fill', 'none');
        dom.bookmarkIcon.setAttribute('stroke', 'currentColor');
      }

      dom.questionText.textContent = q.question;

      renderOptions(q);

      dom.notesInput.value = state.notes[q.id] || '';
      dom.notesDetails.open = !!state.notes[q.id];

      const isSubmitted = !!state.submittedState[q.id];
      if (!isSubmitted) {
        dom.btnSubmit.classList.remove('hidden');
      } else {
        dom.btnSubmit.classList.add('hidden');
      }

      if (isSubmitted) {
        dom.explanationBody.textContent = q.explanation;
        dom.explanationPanel.classList.remove('hidden');
      } else {
        dom.explanationPanel.classList.add('hidden');
      }

      dom.btnPrev.disabled = state.currentIndex === 0;
      dom.btnNext.disabled = state.currentIndex === state.filteredQuestions.length - 1;

      renderQuestionGrid();
      updateCounts();
    }

    function renderOptions(q) {
      dom.optionsContainer.innerHTML = '';
      const qId = q.id;
      const userChoice = state.userAnswers[qId];
      const isSubmitted = !!state.submittedState[qId];

      q.options.forEach((opt) => {
        const row = document.createElement('div');
        row.className = 'option-row sba-option';
        if (isSubmitted) row.classList.add('locked');

        const isSelected = userChoice === opt.id;
        if (isSelected && !isSubmitted) row.classList.add('selected');

        let feedbackBadgeHtml = '';

        if (isSubmitted) {
          if (opt.id === q.correctAnswer) {
            row.classList.add('correct-choice', 'selected');
            feedbackBadgeHtml = `
              <div class="option-feedback-badge badge-correct-feedback">
                ✓ Correct Answer
              </div>
            `;
          } else if (opt.id === userChoice) {
            row.classList.add('incorrect-choice', 'selected');
            feedbackBadgeHtml = `
              <div class="option-feedback-badge badge-incorrect-feedback">
                ✗ Your Answer
              </div>
            `;
          }
        }

        row.innerHTML = `
          <div class="option-main">
            <div class="option-radio-indicator"></div>
            <div class="option-letter-badge">${opt.id}</div>
            <div class="option-statement">
              <div class="opt-text-content">${opt.text}</div>
              ${feedbackBadgeHtml}
            </div>
          </div>
        `;

        if (!isSubmitted) {
          row.addEventListener('click', () => {
            selectOption(qId, opt.id);
          });
        }

        dom.optionsContainer.appendChild(row);
      });
    }

    function selectOption(qId, letter) {
      if (state.submittedState[qId]) return;
      state.userAnswers[qId] = letter;
      state.submittedState[qId] = true;
      saveLocalState();
      renderCurrentQuestion();
    }

    function submitCurrentQuestion() {
      const q = state.filteredQuestions[state.currentIndex];
      if (!q) return;

      state.submittedState[q.id] = true;
      saveLocalState();
      renderCurrentQuestion();
    }

    function clearCurrentQuestionChoice() {
      const q = state.filteredQuestions[state.currentIndex];
      if (!q) return;

      delete state.userAnswers[q.id];
      delete state.submittedState[q.id];
      saveLocalState();
      renderCurrentQuestion();
    }

    function renderEmptyState() {
      dom.questionView.classList.add('hidden');
      dom.landingBanner.classList.remove('hidden');
      dom.landingBanner.querySelector('.hero-title').textContent = 'No Questions Found';
      dom.landingBanner.querySelector('.hero-desc').textContent = 'Try adjusting your search query or filter selection.';
      dom.btnHeroStart.classList.add('hidden');
      dom.btnHeroContinue.classList.add('hidden');
    }

    function renderQuestionGrid() {
      dom.questionGrid.innerHTML = '';

      state.filteredQuestions.forEach((q, idx) => {
        const gridBtn = document.createElement('button');
        gridBtn.className = 'grid-item';

        const overallIndex = state.questions.findIndex(item => item.id === q.id) + 1;
        gridBtn.textContent = overallIndex;

        const qStatus = getQuestionStatus(q.id);
        gridBtn.classList.add(qStatus);

        if (idx === state.currentIndex) {
          gridBtn.classList.add('current');
        }

        if (state.bookmarks.has(q.id)) {
          gridBtn.classList.add('bookmarked');
        }

        gridBtn.addEventListener('click', () => {
          state.currentIndex = idx;
          saveLocalState();
          renderCurrentQuestion();
          if (window.innerWidth <= 768) {
            closeDrawer();
          }
        });

        dom.questionGrid.appendChild(gridBtn);
      });
    }

    function updateCounts() {
      let unanswered = 0;
      let correct = 0;
      let incorrect = 0;
      state.questions.forEach(q => {
        const st = getQuestionStatus(q.id);
        const hasAnswered = state.submittedState[q.id];
        if (!hasAnswered) unanswered++;
        if (st === 'correct') correct++;
        if (st === 'incorrect') incorrect++;
      });

      dom.countAll.textContent = state.questions.length;
      dom.countUnanswered.textContent = unanswered;
      dom.countCorrect.textContent = correct;
      dom.countIncorrect.textContent = incorrect;
      dom.countBookmarked.textContent = state.bookmarks.size;
    }

    function updateStatsModal() {
      const total = state.questions.length;
      let attempted = 0;
      let correct = 0;

      state.questions.forEach(q => {
        if (state.submittedState[q.id]) {
          attempted++;
          if (state.userAnswers[q.id] === q.correctAnswer) correct++;
        }
      });

      const incorrect = attempted - correct;
      const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
      const remaining = total - attempted;

      dom.statTotal.textContent = total;
      dom.statAttempted.textContent = attempted;
      dom.statCorrect.textContent = correct;
      dom.statIncorrect.textContent = incorrect;
      dom.statRemaining.textContent = remaining;
      dom.statBookmarked.textContent = state.bookmarks.size;
      dom.statAccuracy.textContent = `${accuracy}%`;

      const circumference = 314;
      const offset = circumference - (accuracy / 100) * circumference;
      dom.gaugeProgress.style.strokeDashoffset = offset;
    }

    function toggleDrawer() {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        dom.paletteDrawer.classList.toggle('open');
        dom.drawerBackdrop.classList.toggle('open');
      } else {
        dom.paletteDrawer.classList.toggle('collapsed');
      }
    }

    function closeDrawer() {
      dom.paletteDrawer.classList.remove('open');
      dom.drawerBackdrop.classList.remove('open');
    }

    function openStats() {
      updateStatsModal();
      dom.statsModal.classList.remove('hidden');
    }

    function closeStats() {
      dom.statsModal.classList.add('hidden');
    }

    function setupEventListeners() {
      if (dom.btnGotoPaed) {
        dom.btnGotoPaed.addEventListener('click', () => {
          window.location.href = 'index.html';
        });
      }

      dom.btnPrev.addEventListener('click', () => {
        if (state.currentIndex > 0) {
          state.currentIndex--;
          saveLocalState();
          renderCurrentQuestion();
        }
      });

      dom.btnNext.addEventListener('click', () => {
        if (state.currentIndex < state.filteredQuestions.length - 1) {
          state.currentIndex++;
          saveLocalState();
          renderCurrentQuestion();
        }
      });

      dom.btnSubmit.addEventListener('click', submitCurrentQuestion);
      dom.btnResetCurrent.addEventListener('click', clearCurrentQuestionChoice);

      dom.btnBookmark.addEventListener('click', () => {
        const q = state.filteredQuestions[state.currentIndex];
        if (!q) return;

        if (state.bookmarks.has(q.id)) {
          state.bookmarks.delete(q.id);
        } else {
          state.bookmarks.add(q.id);
        }
        saveLocalState();
        renderCurrentQuestion();
      });

      dom.notesInput.addEventListener('input', (e) => {
        const q = state.filteredQuestions[state.currentIndex];
        if (!q) return;

        state.notes[q.id] = e.target.value;
        saveLocalState();
      });

      dom.btnToggleDrawer.addEventListener('click', toggleDrawer);
      dom.btnCloseDrawer.addEventListener('click', closeDrawer);
      dom.drawerBackdrop.addEventListener('click', closeDrawer);

      const handleJump = () => {
        const val = parseInt(dom.jumpInput.value, 10);
        if (val >= 1 && val <= state.questions.length) {
          const targetIdx = state.filteredQuestions.findIndex(q => q.id === val);
          if (targetIdx !== -1) {
            state.currentIndex = targetIdx;
            saveLocalState();
            renderCurrentQuestion();
            dom.jumpInput.value = '';
            if (window.innerWidth <= 768) closeDrawer();
          } else {
            alert(`Question #${val} is not in the current filtered view.`);
          }
        }
      };
      dom.jumpBtn.addEventListener('click', handleJump);
      dom.jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleJump();
      });

      dom.filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          dom.filterChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          state.filter = chip.getAttribute('data-filter');
          applyFiltersAndSearch();
          renderCurrentQuestion();
        });
      });

      dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        applyFiltersAndSearch();
        renderCurrentQuestion();
      });

      dom.btnHeroStart.addEventListener('click', () => {
        dom.landingBanner.classList.add('hidden');
        dom.questionView.classList.remove('hidden');
        state.currentIndex = 0;
        renderCurrentQuestion();
      });
      dom.btnHeroContinue.addEventListener('click', () => {
        dom.landingBanner.classList.add('hidden');
        dom.questionView.classList.remove('hidden');
        renderCurrentQuestion();
      });

      dom.btnStats.addEventListener('click', openStats);
      dom.btnCloseStats.addEventListener('click', closeStats);
      dom.statsModal.addEventListener('click', (e) => {
        if (e.target === dom.statsModal) closeStats();
      });

      if (dom.btnCopyStats) {
        dom.btnCopyStats.addEventListener('click', () => {
          const text = `📊 O&G MCQ Progress:
• Total Questions: ${dom.statTotal.textContent}
• Attempted: ${dom.statAttempted.textContent}
• Remaining: ${dom.statRemaining.textContent}
• Accuracy: ${dom.statAccuracy.textContent}
• Correct Answers: ${dom.statCorrect.textContent}
• Incorrect Answers: ${dom.statIncorrect.textContent}
• Bookmarked: ${dom.statBookmarked.textContent}`;

          navigator.clipboard.writeText(text).then(() => {
            const orig = dom.btnCopyStats.textContent;
            dom.btnCopyStats.textContent = '✓ Copied to Clipboard!';
            setTimeout(() => {
              dom.btnCopyStats.textContent = orig;
            }, 2000);
          }).catch(() => {
            alert(text);
          });
        });
      }

      dom.btnResetProgress.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress, bookmarks, and notes?')) {
          localStorage.removeItem('og_user_answers');
          localStorage.removeItem('og_submitted');
          localStorage.removeItem('og_bookmarks');
          localStorage.removeItem('og_notes');
          localStorage.removeItem('og_visited');
          localStorage.removeItem('og_current_index');
          state.userAnswers = {};
          state.submittedState = {};
          state.bookmarks = new Set();
          state.notes = {};
          state.visited = new Set();
          state.currentIndex = 0;

          closeStats();
          applyFiltersAndSearch();
          renderCurrentQuestion();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          return;
        }

        if (e.key === 'ArrowLeft' || e.key === 'a') {
          dom.btnPrev.click();
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
          dom.btnNext.click();
        } else if (e.key.toLowerCase() === 'b') {
          dom.btnBookmark.click();
        } else if (e.key === '/') {
          e.preventDefault();
          dom.searchInput.focus();
        } else if (e.key === 'Enter') {
          if (!dom.btnSubmit.classList.contains('hidden')) {
            dom.btnSubmit.click();
          }
        }
      });
    }

    init();
  }

})();
