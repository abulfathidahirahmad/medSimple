/**
 * Obstetrics & Gynaecology — Single Best Answer (SBA) Question Bank
 * Source: "O&G SBA/EMQ MEGA BUNDLE" compilation (Ten Teachers deck + project files)
 * Format: one correct option per question, one unified explanation.
 * Where the source left a question unanswered, the correct option has been
 * determined using standard clinical/obstetric teaching (flagged in the
 * explanation as "(source unanswered — resolved by clinical reasoning)").
 * Where an EMQ offered a shared option list across several stems, each stem
 * has been split into its own single-best-answer question re-using that list.
 *
 * NORMALISATION (post-processing):
 * - Every question now has exactly 5 options labelled A–E.
 * - Questions that originally had >5 options had excess options removed;
 *   the correct answer was always retained and the remaining options were
 *   re-lettered A–E (correctAnswer letter updated accordingly).
 * - Questions that originally had <5 options were padded to 5 with
 *   context-appropriate plausible distractors.
 */
window.OANDG_QUESTIONS_DATA = [

  /* ===================== TOPIC 1: Anatomy & Embryology ===================== */
  {
    id: 1,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "SBA",
    question: "Which of the following statements is true about the round ligament?",
    options: [
      { id: "A", text: "The round ligament lies posterior to the uterus." },
      { id: "B", text: "The round ligament supports the fundus of the uterus." },
      { id: "C", text: "The round ligament is a vestigial structure." },
      { id: "D", text: "The round ligament ends distally in the inguinal canal." },
      { id: "E", text: "The round ligament contains the neuromuscular bundle supplying the ovary." }
    ],
    correctAnswer: "D",
    explanation: "The round ligament runs from the uterine cornu, through the anterior leaf of the broad ligament, to end in the inguinal canal — making D correct. It actually lies anterior (not posterior) to the uterus, so A is wrong. It gives no real structural support to the fundus, so B is wrong, and it is a functional (not vestigial) structure, so C is wrong. The vascular/neural supply to the ovary runs in the mesovarium/infundibulopelvic ligament, not the round ligament, so E is wrong."
  },
  {
    id: 2,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "SBA",
    question: "Which of the following statements is true about the Fallopian tube?",
    options: [
      { id: "A", text: "The Fallopian tube is 20 cm long." },
      { id: "B", text: "The Fallopian tube has a glandular submucosa." },
      { id: "C", text: "The Fallopian tube is independent of hormonal influence." },
      { id: "D", text: "The Fallopian tube is lined by ciliated epithelium." },
      { id: "E", text: "The Fallopian tube lies in the round ligament." }
    ],
    correctAnswer: "D",
    explanation: "The tubal epithelium contains both ciliated and secretory cells, making D correct. The tube is about 10 cm long (not 20 cm), so A is wrong. It has no submucosa or glands, so B is wrong. The epithelium is hormonally responsive (ciliary activity varies with the cycle), so C is wrong. The tube runs in the upper margin of the broad ligament, not the round ligament, so E is wrong."
  },
  {
    id: 3,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "EMQ",
    question: "Which structure is contained in the infundibulopelvic (suspensory) ligament of the ovary?",
    options: [
      { id: "A", text: "Internal iliac artery" },
      { id: "B", text: "Uterus" },
      { id: "C", text: "Fallopian tube" },
      { id: "D", text: "Uterine artery" },
      { id: "E", text: "Ovarian artery" }
    ],
    correctAnswer: "E",
    explanation: "The infundibulopelvic (suspensory) ligament carries the ovarian vessels, so the ovarian artery (H) is correct. The other structures listed sit elsewhere: the uterine artery runs in the cardinal ligament near the cervix, the internal iliac artery and aorta are proximal parent vessels rather than contents of this specific ligament, and the uterus, tube, ovary and cervix are organs, not vascular contents of the ligament."
  },
  {
    id: 4,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "EMQ",
    question: "What is the origin of the uterine artery?",
    options: [
      { id: "A", text: "Internal iliac artery" },
      { id: "B", text: "Uterus" },
      { id: "C", text: "Fallopian tube" },
      { id: "D", text: "Uterine artery" },
      { id: "E", text: "Ovaries" }
    ],
    correctAnswer: "A",
    explanation: "The uterine artery is a branch of the anterior division of the internal iliac artery (A). The ovarian artery (H) instead arises directly from the aorta (G), which is why those are distractors here rather than the answer."
  },
  {
    id: 5,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "EMQ",
    question: "Which structure should always be removed at hysterectomy to cure endometriosis?",
    options: [
      { id: "A", text: "Internal iliac artery" },
      { id: "B", text: "Uterus" },
      { id: "C", text: "Fallopian tube" },
      { id: "D", text: "Uterine artery" },
      { id: "E", text: "Ovaries" }
    ],
    correctAnswer: "E",
    explanation: "The ovaries (E) should be removed alongside the uterus, because continued oestrogen production from retained ovaries can drive recurrence of endometriotic deposits. Removing the uterus alone (B) or vascular structures would not address the hormonal driver of the disease."
  },
  {
    id: 6,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "EMQ",
    question: "At the level of the cervix, the ureter is at surgical risk where it runs close to which structure?",
    options: [
      { id: "A", text: "Internal iliac artery" },
      { id: "B", text: "Uterus" },
      { id: "C", text: "Fallopian tube" },
      { id: "D", text: "Uterine artery" },
      { id: "E", text: "Ovaries" }
    ],
    correctAnswer: "D",
    explanation: "The classic surgical hazard is the ureter passing directly beneath the uterine artery (D) — 'water under the bridge' — at the level of the cervix, which is why it is easily clamped or ligated during hysterectomy if not identified. The cervix (I) itself is the landmark, not the vessel at risk of injury."
  },
  {
    id: 7,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "SBA",
    question: "Which of the following concerning the uterine cervix is TRUE?",
    options: [
      { id: "A", text: "The cervix has a length of 5-6 cm and diameter of 4.5 cm." },
      { id: "B", text: "The cervix is made up of endocervix, mesocervix and ectocervix." },
      { id: "C", text: "The squamocolumnar junction is affected by age, menstrual status, OCP use and pregnancy." },
      { id: "D", text: "The site of columnar metaplasia is the transformation zone." },
      { id: "E", text: "Ectocervix is adjacent to the external os." }
    ],
    correctAnswer: "C",
    explanation: "The squamocolumnar junction is well known to shift outward under high-oestrogen states (puberty, pregnancy, OCP use) and inward after the menopause, making C the best answer. The cervix is only about 2.5-3 cm long (not 5-6 cm), so A is wrong. It is divided into just endocervix and ectocervix — there is no 'mesocervix' — so B is wrong. The metaplastic change at the transformation zone is squamous metaplasia of columnar epithelium, not 'columnar metaplasia', so D is imprecise. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 8,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "SBA",
    question: "Regarding the most important uterine ligament for the prevention of prolapse:",
    options: [
      { id: "A", text: "Broad ligament" }, { id: "B", text: "Round ligament" },
      { id: "C", text: "Cardinal (uterosacral) ligament" }, { id: "D", text: "Arcuate ligament" },
      { id: "E", text: "Utero-ovarian ligament" }
    ],
    correctAnswer: "C",
    explanation: "The cardinal (transverse cervical) and uterosacral ligaments provide the main structural support that keeps the cervix and upper vagina suspended over the levator plate, so damage to them is central to uterovaginal prolapse — making C correct. The broad ligament is a peritoneal fold rather than a true supportive structure, the round ligament mainly maintains uterine anteversion rather than vertical support, and the arcuate/utero-ovarian ligaments play no significant role in prolapse prevention. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 9,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "SBA",
    question: "The embryonic origin of the round ligament is:",
    options: [
      { id: "A", text: "Paramesonephric duct" }, { id: "B", text: "Mesonephric duct" },
      { id: "C", text: "Gubernaculum" }, { id: "D", text: "Urogenital ridge" }, { id: "E", text: "Cloaca" }
    ],
    correctAnswer: "C",
    explanation: "The round ligament of the uterus is the remnant of the gubernaculum, the same structure that guides testicular descent in males — making C correct. The paramesonephric (Müllerian) duct instead forms the uterus, tubes and upper vagina, so A is wrong. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 10,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "SBA",
    question: "Regarding the female genital tract and bony pelvis, which of the following is TRUE?",
    options: [
      { id: "A", text: "The bony pelvis contributes to labour complications or contributes to obstructed labour." },
      { id: "B", text: "Gynaecoid pelvis is normally seen in all females." },
      { id: "C", text: "The posterior diameter of the gynaecoid pelvis is more suitable for the presenting part." },
      { id: "D", text: "The mid cavity diameter of a gynaecoid pelvis is diamond shaped." },
      { id: "E", text: "The coccyx is inferior to the sacrum and normally fixed." }
    ],
    correctAnswer: "A",
    explanation: "Pelvic shape and adequacy directly influence the mechanism of labour, and an unfavourable bony pelvis (e.g. android or platypelloid) is a recognised cause of obstructed labour — making A correct. The gynaecoid pelvis is the most common but is only seen in roughly half of women (not all), so B is wrong. The pelvic outlet — not the mid-cavity — is classically diamond-shaped, so D is wrong, and the coccyx is mobile (not fixed) to allow it to retropulse during delivery, so E is wrong. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 11,
    topic: "Anatomy & Embryology of the Female Genital Tract",
    type: "SBA",
    question: "Regarding the anatomy of the vagina, which of the following is TRUE?",
    options: [
      { id: "A", text: "It develops partially from the urogenital sinus." },
      { id: "B", text: "The posterior wall is 6.5 cm." },
      { id: "C", text: "The pH at birth is <5." },
      { id: "D", text: "It recanalizes at a fixed, universally quoted gestational age with no variation." },
      { id: "E", text: "It has 3 fornices (anterior, posterior and lateral)." }
    ],
    correctAnswer: "A",
    explanation: "Embryologically, the upper vagina arises from the fused paramesonephric (Müllerian) ducts while the lower portion is derived from the urogenital sinus — making A the best, most reliably true statement. The posterior vaginal wall is actually closer to 9 cm (longer than the anterior wall), so B understates it. There are in fact four fornices — one anterior, one posterior and two lateral — so describing it as '3 fornices' is inaccurate. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 2: Endocrine Basis of Puberty & Menopause ===================== */
  {
    id: 12,
    topic: "Endocrine Basis of Puberty and Menopause",
    type: "SBA",
    question: "With regard to the hormone changes that accompany the menopause, which of the following is true?",
    options: [
      { id: "A", text: "As ovarian function fails, serum FSH levels increase." },
      { id: "B", text: "12 months after the LMP serum levels of testosterone are close to zero." },
      { id: "C", text: "Secretion of GnRH from the hypothalamus increases significantly in the late menopause to drive ovarian activity." },
      { id: "D", text: "Progesterone levels are undetectable in the perimenopause." },
      { id: "E", text: "High levels of peripherally-produced oestrogens reduce the frequency and severity of hot flushes in obese women." }
    ],
    correctAnswer: "A",
    explanation: "As follicles deplete and inhibin falls, negative feedback on the pituitary is lost and FSH rises — making A correct. Only 30-50% of testosterone is ovarian in origin, so levels fall only gradually and are not 'close to zero' (B wrong). GnRH pulsatility and levels actually fall, not rise, in late menopause (C wrong). Progesterone declines slowly and remains detectable through much of the perimenopause (D wrong). Adipose-derived oestrogen actually acts as an insulator that worsens, not reduces, hot flushes in obese women (E wrong)."
  },
  {
    id: 13,
    topic: "Endocrine Basis of Puberty and Menopause",
    type: "SBA",
    question: "A 68-year-old woman has recurrent postcoital spotting, an unremarkable history, normal smears, and is not on HRT. Pelvic ultrasound and endometrial biopsy are normal. Examination shows vaginal dryness, petechiae, and loss of rugae. What is the most appropriate next step?",
    options: [
      { id: "A", text: "Outpatient hysteroscopic assessment of the endometrium." },
      { id: "B", text: "Transdermal continuous combined HRT." },
      { id: "C", text: "Water-based vaginal lubricants." },
      { id: "D", text: "Oestrogen-containing vaginal pessaries." },
      { id: "E", text: "Flexible cystourethroscopy." }
    ],
    correctAnswer: "D",
    explanation: "The findings (dryness, petechiae, loss of rugae) with a normal scan and biopsy point to atrophic vaginitis; local oestrogen restores vaginal tissue integrity and lubrication and directly treats the cause of the bleeding, making D correct. Hysteroscopy and cystourethroscopy are unnecessary since endometrial pathology has already been excluded (A and E wrong). Lubricants (C) ease intercourse-related friction but do not reverse the underlying atrophy, and systemic transdermal HRT (B) is not needed for a purely local problem."
  },
  {
    id: 14,
    topic: "Endocrine Basis of Puberty and Menopause",
    type: "SBA",
    question: "Which of the following is true regarding Turner's syndrome?",
    options: [
      { id: "A", text: "Short stature, webbed neck, ovarian streaks and secondary amenorrhoea." },
      { id: "B", text: "Associated with chromosomal abnormalities." },
      { id: "C", text: "Turner mosaic is always associated with short stature; they menstruate, get pregnant and have premature menopause." },
      { id: "D", text: "It's associated with a short 4th metacarpal." },
      { id: "E", text: "They do not require hormone replacement." }
    ],
    correctAnswer: "D",
    explanation: "A short 4th (and sometimes 5th) metacarpal is a classic, specific skeletal feature of Turner syndrome, making D the best answer. Classic Turner syndrome causes primary (not secondary) amenorrhoea due to streak gonads present from birth, so A is imprecise. Mosaic Turner is not 'always' associated with short stature — some mosaics have near-normal height — so C overstates it, and oestrogen replacement is in fact required for bone health and pubertal development, so E is wrong. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 15,
    topic: "Endocrine Basis of Puberty and Menopause",
    type: "SBA",
    question: "Precocious puberty is MOST likely caused by:",
    options: [
      { id: "A", text: "McCune-Albright syndrome" }, { id: "B", text: "PCOS" },
      { id: "C", text: "Hormonally-active ovarian tumours" }, { id: "D", text: "CNS tumour" }, { id: "E", text: "Idiopathic" }
    ],
    correctAnswer: "E",
    explanation: "The great majority of central precocious puberty in girls is idiopathic, with no identifiable structural or genetic cause found, making E the single best answer. McCune-Albright syndrome, ovarian tumours and CNS tumours are all recognised but comparatively rare causes, and PCOS is not a cause of precocious puberty at all. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 16,
    topic: "Endocrine Basis of Puberty and Menopause",
    type: "SBA",
    question: "Which of the following is the LEAST typical cause of secondary ovarian insufficiency among those listed?",
    options: [
      { id: "A", text: "Chemotherapy" }, { id: "B", text: "Radiotherapy" }, { id: "C", text: "Tuberculosis" },
      { id: "D", text: "Autoimmune disease" }, { id: "E", text: "Mumps" }
    ],
    correctAnswer: "C",
    explanation: "Chemotherapy, radiotherapy, autoimmune oophoritis and mumps oophoritis are all well-established, classically taught causes of premature/secondary ovarian insufficiency. Tuberculous oophoritis, while theoretically possible via haematogenous spread, is a rare and far less characteristic cause than the others, making it the outlier/'odd one out' in this list. (Source flagged all options as recognised causes; C is presented here as the least typical.)"
  },

  /* ===================== TOPIC 3: Menstrual Cycle and its Disorders ===================== */
  {
    id: 17,
    topic: "Menstrual Cycle and Its Disorders (including AUB)",
    type: "SBA",
    question: "Menstruation is the shedding of the dead endometrium. Which of the following facts is correct?",
    options: [
      { id: "A", text: "During menstruation the stratum basalis is shed." },
      { id: "B", text: "During menstruation the stratum compactum is shed." },
      { id: "C", text: "During menstruation fibrinolysis is enhanced." },
      { id: "D", text: "Endometrial regeneration begins after ovulation." },
      { id: "E", text: "Vasodilation of the spiral arterioles precedes menstruation." }
    ],
    correctAnswer: "C",
    explanation: "Fibrinolysis is enhanced during menstruation to prevent intrauterine clot formation and allow proper shedding — making C correct. The stratum basalis is retained (not shed) as it regenerates the new lining, so A is wrong, and it is the functional layer (stratum compactum/spongiosum) that sheds. Vasoconstriction — not vasodilation — of the spiral arterioles precedes menstruation, causing ischaemia (E wrong), and regeneration begins as bleeding ends, not specifically 'after ovulation' (D wrong)."
  },
  {
    id: 18,
    topic: "Menstrual Cycle and Its Disorders (including AUB)",
    type: "SBA",
    question: "A 47-year-old woman has heavy menstrual bleeding with flooding and clots. Examination shows a non-tender, normal-sized uterus. FBC shows reduced haemoglobin. What investigation is indicated next per NICE guidance?",
    options: [
      { id: "A", text: "Thyroid function tests." }, { id: "B", text: "Hormonal profile." },
      { id: "C", text: "Serum ferritin." }, { id: "D", text: "Outpatient hysteroscopy." }, { id: "E", text: "Endometrial biopsy." }
    ],
    correctAnswer: "E",
    explanation: "In women over 45 with HMB, endometrial biopsy is recommended because a meaningful minority will have underlying endometrial hyperplasia or malignancy, making E correct. Thyroid function, hormonal profile and ferritin are not indicated without specific symptoms pointing to those diagnoses, and hysteroscopy is reserved for cases with a structurally enlarged or abnormal uterus, which is not present here."
  },
  {
    id: 19,
    topic: "Menstrual Cycle and Its Disorders (including AUB)",
    type: "SBA",
    question: "A 32-year-old woman with two children (family complete for now) has regular heavy menstrual bleeding, is medically well, and has a normal-sized, non-tender uterus. What is the first-line treatment for HMB per NICE guidance?",
    options: [
      { id: "A", text: "Endometrial ablation." }, { id: "B", text: "The oral contraceptive pill." },
      { id: "C", text: "The oral contraceptive pill used back to back." }, { id: "D", text: "Norethisterone." },
      { id: "E", text: "LNG-IUS." }
    ],
    correctAnswer: "E",
    explanation: "The levonorgestrel intrauterine system (LNG-IUS) is NICE's first-line treatment for HMB in women who do not wish to conceive imminently, making E correct. Endometrial ablation is reserved for treatment failure, norethisterone (days 6-26) has a worse side-effect profile and is less effective, and COCP only modestly reduces flow compared with LNG-IUS."
  },
  {
    id: 20,
    topic: "Menstrual Cycle and Its Disorders (including AUB)",
    type: "SBA",
    question: "A parous 35-year-old woman with cyclical heavy, painful bleeding and an enlarged 'boggy' uterus has adenomyosis on TVUSS. Her family is complete, she relies on condoms, and she smokes 10/day. Which treatment is most appropriate?",
    options: [
      { id: "A", text: "LNG-IUS (Mirena®)." }, { id: "B", text: "COCP." }, { id: "C", text: "Hysterectomy." },
      { id: "D", text: "GnRH analogues." }, { id: "E", text: "Endometrial ablation." }
    ],
    correctAnswer: "A",
    explanation: "LNG-IUS can induce amenorrhoea, rendering the ectopic endometrial tissue in adenomyosis quiescent, while also providing highly effective contraception — making it the best option here. COCP is relatively contraindicated given her smoking, GnRH analogues are unsuitable for long-term use, hysterectomy is overly invasive as a first step, and endometrial ablation targets endometrial-source bleeding rather than the myometrial pathology of adenomyosis."
  },

  /* ===================== TOPIC 4: Oligomenorrhoea, Amenorrhoea and PCOS ===================== */
  {
    id: 21,
    topic: "Oligomenorrhoea, Amenorrhoea and PCOS",
    type: "SBA",
    question: "With regard to polycystic ovary syndrome (PCOS), which of the following statements is true?",
    options: [
      { id: "A", text: "PCOS is an unusual cause of anovulation." },
      { id: "B", text: "Ultrasonic evidence of polycystic ovaries is present in 50% of all women." },
      { id: "C", text: "PCOS is associated with obesity in 10% of women." },
      { id: "D", text: "PCOS is associated with acanthosis nigricans." },
      { id: "E", text: "The diagnosis of PCOS can only be made with biochemical evidence of hyperandrogenism." }
    ],
    correctAnswer: "D",
    explanation: "PCOS is associated with insulin resistance, which manifests as acanthosis nigricans in a proportion of patients — making D correct. PCOS is in fact the commonest cause of anovulation (A wrong), polycystic-appearing ovaries are seen on ultrasound in about 25% (not 50%) of all women (B wrong), and over 40% (not just 10%) of women with PCOS are overweight (C wrong). Diagnosis (Rotterdam criteria) requires any two of three features — ultrasound findings, clinical OR biochemical hyperandrogenism, or anovulation — not biochemical evidence alone (E wrong)."
  },
  {
    id: 22,
    topic: "Oligomenorrhoea, Amenorrhoea and PCOS",
    type: "SBA",
    question: "A 17-year-old athlete has primary amenorrhoea after intensive training and significant weight loss. Which of the following best explains her condition?",
    options: [
      { id: "A", text: "Hypothalamic amenorrhoea" }, { id: "B", text: "PCOS" }, { id: "C", text: "MRKH syndrome" },
      { id: "D", text: "CAH" }, { id: "E", text: "Thyroid dysfunction" }
    ],
    correctAnswer: "A",
    explanation: "Intensive exercise combined with low body weight/energy availability classically suppresses hypothalamic GnRH pulsatility, producing functional hypothalamic amenorrhoea — making A correct. PCOS typically presents with irregular cycles rather than complete amenorrhoea from weight loss, MRKH is a structural absence of the uterus/vagina unrelated to exercise, CAH presents earlier with virilisation, and thyroid dysfunction does not fit this specific athletic history as well. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 5: Pelvic Infections (PID) ===================== */
  {
    id: 23,
    topic: "Pelvic Infections (Acute and Chronic) and PID",
    type: "SBA",
    question: "A 32-year-old woman has altered vaginal discharge, mild abdominal pain, and profuse mucopurulent discharge from an inflamed cervix. What is the appropriate management?",
    options: [
      { id: "A", text: "Treat with cephalosporin for presumed gonorrhoeal infection." },
      { id: "B", text: "Perform NAAT testing and treat presumptively with wide-spectrum antibiotics." },
      { id: "C", text: "Treat with penicillin and test for other STIs." },
      { id: "D", text: "Treat with cephalosporin and azithromycin, and perform NAAT testing only if unresponsive." },
      { id: "E", text: "Perform NAAT and culture/sensitivity, test for other STIs, and treat with cephalosporin and azithromycin." }
    ],
    correctAnswer: "E",
    explanation: "Given the likely diagnosis of gonococcal cervicitis, best practice is to confirm with NAAT and culture/sensitivity (given rising antimicrobial resistance), screen for co-existing STIs since dual infection is common, and treat empirically with cephalosporin plus azithromycin — making E the most complete and correct answer. The other options each skip an essential step (co-testing, culture, or appropriate dual antibiotic cover)."
  },
  {
    id: 24,
    topic: "Pelvic Infections (Acute and Chronic) and PID",
    type: "SBA",
    question: "Which of the following infections can be diagnosed on wet mount microscopy?",
    options: [
      { id: "A", text: "Candidiasis." }, { id: "B", text: "Gonorrhoea." }, { id: "C", text: "Trichomoniasis." },
      { id: "D", text: "Syphilis." }, { id: "E", text: "Bacterial vaginosis." }
    ],
    correctAnswer: "C",
    explanation: "Trichomonas vaginalis organisms are classically visualised as motile flagellated protozoa on a simple wet-mounted saline swab, making C correct. Candida is better identified by pseudohyphae on KOH prep, gonorrhoea requires Gram stain/culture/NAAT to see intracellular diplococci, syphilis needs dark-field microscopy, and bacterial vaginosis is identified by clue cells rather than being the classic 'wet mount' diagnosis. (Note: the original source material marked a different answer here that conflicted with its own explanation; this entry follows the correct clinical fact.)"
  },
  {
    id: 25,
    topic: "Pelvic Infections (Acute and Chronic) and PID",
    type: "SBA",
    question: "What is the commonest cause of bilateral tubal blockage in low-resource settings?",
    options: [
      { id: "A", text: "Gonorrhoea" },
      { id: "B", text: "Chlamydia trachomatis" },
      { id: "C", text: "Syphilis" },
      { id: "D", text: "HSV" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "B",
    explanation: "Chlamydia trachomatis is globally the leading cause of tubal factor infertility, often causing silent salpingitis that scars and blocks the tubes bilaterally before it is ever diagnosed, making B correct. Gonorrhoea also causes PID but tends to present more acutely and is treated earlier, syphilis and HSV do not classically cause tubal scarring. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 26,
    topic: "Pelvic Infections (Acute and Chronic) and PID",
    type: "SBA",
    question: "A woman with multiple sexual partners presents with lower abdominal pain, vaginal discharge and fever. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "PID" },
      { id: "B", text: "Appendicitis" },
      { id: "C", text: "Pyelonephritis" },
      { id: "D", text: "Ruptured ectopic" },
      { id: "E", text: "Viral gastroenteritis" }
    ],
    correctAnswer: "A",
    explanation: "The combination of multiple sexual partners, lower abdominal pain, discharge and fever is the classic triad for pelvic inflammatory disease, making A correct. Appendicitis and pyelonephritis do not typically present with discharge, and a ruptured ectopic would present with more acute pain, haemodynamic compromise and a positive pregnancy test rather than discharge and fever. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 27,
    topic: "Pelvic Infections (Acute and Chronic) and PID",
    type: "SBA",
    question: "What is the appropriate management for this woman with PID?",
    options: [
      { id: "A", text: "Admit, IV fluids and broad-spectrum antibiotics." },
      { id: "B", text: "Analgesics and antipyretics." },
      { id: "C", text: "Counsel and antibiotics." },
      { id: "D", text: "Antibiotics, including 10 days of doxycycline." },
      { id: "E", text: "Viral gastroenteritis" }
    ],
    correctAnswer: "D",
    explanation: "Standard outpatient management of uncomplicated PID is a combined antibiotic regimen including roughly two weeks of doxycycline (often with metronidazole) alongside a single dose of a cephalosporin — making D, which specifically mentions doxycycline coverage for Chlamydia, the most clinically complete answer. Admission with IV fluids (A) is reserved for severe or complicated disease, and analgesia/counselling alone (B, C) omit the essential antimicrobial treatment. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 28,
    topic: "Pelvic Infections (Acute and Chronic) and PID",
    type: "SBA",
    question: "Three days after a vaginal delivery, a woman develops fever (38.5°C), abdominal pain, offensive lochia and cervical excitation tenderness. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "Genital sepsis (Puerperal sepsis)" }, { id: "B", text: "PID" },
      { id: "C", text: "Urinary tract infection" }, { id: "D", text: "Mastitis" }, { id: "E", text: "Wound infection" }
    ],
    correctAnswer: "A",
    explanation: "Fever with offensive lochia and uterine/cervical tenderness in the early puerperium is the classic presentation of puerperal (genital tract) sepsis, usually from endometritis, making A correct. PID is a term reserved for infection outside the context of recent delivery, and UTI, mastitis and wound infection do not explain offensive lochia and cervical excitation. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 6: STDs incl. HIV ===================== */
  {
    id: 29,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "EMQ",
    question: "Which treatment for syphilis in pregnancy prevents 98% of congenital infections?",
    options: [
      { id: "A", text: "Aciclovir" },
      { id: "B", text: "Ampicillin" },
      { id: "C", text: "Azithromycin" },
      { id: "D", text: "Cefotaxime" },
      { id: "E", text: "Penicillin" }
    ],
    correctAnswer: "E",
    explanation: "Parenteral penicillin remains the gold-standard treatment for syphilis in pregnancy and is highly effective at preventing congenital transmission, making G correct. Doxycycline is contraindicated in pregnancy, and the other options treat unrelated infections."
  },
  {
    id: 30,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "EMQ",
    question: "Which treatment is given to prevent neonatal infection with Group B Streptococcus?",
    options: [
      { id: "A", text: "Aciclovir" },
      { id: "B", text: "Ampicillin" },
      { id: "C", text: "Azithromycin" },
      { id: "D", text: "Cefotaxime" },
      { id: "E", text: "Penicillin" }
    ],
    correctAnswer: "E",
    explanation: "Intrapartum IV benzylpenicillin is the standard prophylaxis given when GBS is identified antenatally, in order to prevent early-onset neonatal GBS disease — making G correct. Ampicillin (B) is an acceptable alternative in some protocols, but penicillin is the classic first-line answer."
  },
  {
    id: 31,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "EMQ",
    question: "Which treatment reduces vertical transmission of HIV from 28 weeks' gestation?",
    options: [
      { id: "A", text: "Aciclovir" },
      { id: "B", text: "Ampicillin" },
      { id: "C", text: "Azithromycin" },
      { id: "D", text: "Cefotaxime" },
      { id: "E", text: "HAART" }
    ],
    correctAnswer: "E",
    explanation: "Combination antiretroviral therapy (HAART) is prescribed from as early as possible in pregnancy (referenced here from the third trimester) to suppress viral load and minimise mother-to-child transmission, making F correct. Zidovudine (H) has a historical role as monotherapy or as part of the regimen but HAART is now standard of care."
  },
  {
    id: 32,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "EMQ",
    question: "What is the treatment for primary genital herpes infection in pregnancy?",
    options: [
      { id: "A", text: "Aciclovir" },
      { id: "B", text: "Ampicillin" },
      { id: "C", text: "Azithromycin" },
      { id: "D", text: "Cefotaxime" },
      { id: "E", text: "Doxycycline" }
    ],
    correctAnswer: "A",
    explanation: "Aciclovir is the standard antiviral treatment for genital herpes, including primary infection in pregnancy, making A correct. The remaining options are antibacterials or antiretrovirals and have no antiviral activity against HSV."
  },
  {
    id: 33,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "SBA",
    question: "An antenatal patient tests positive for syphilis using the VDRL screening test. Which of the following is a definitive test for syphilis?",
    options: [
      { id: "A", text: "Cholesterol-lecithin – cardiolipin antigen test." }, { id: "B", text: "FTA-abs test." },
      { id: "C", text: "PCR." }, { id: "D", text: "RPR test." }, { id: "E", text: "Ziehl-Neelsen stain." }
    ],
    correctAnswer: "B",
    explanation: "VDRL and RPR are non-treponemal screening tests with a recognised false-positive rate, so a positive result must be confirmed with a treponeme-specific test such as the FTA-abs, making B correct. The cardiolipin antigen test (A) and RPR (D) are the same category of non-specific screening tests already used, and Ziehl-Neelsen staining (E) is for acid-fast bacilli, not Treponema pallidum."
  },
  {
    id: 34,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "SBA",
    question: "Which class of white cells is preferentially depleted by HIV?",
    options: [
      { id: "A", text: "CD4" }, { id: "B", text: "CD8" }, { id: "C", text: "CD16" }, { id: "D", text: "CD25" }, { id: "E", text: "CD68" }
    ],
    correctAnswer: "A",
    explanation: "HIV preferentially targets and depletes CD4-expressing T-helper cells (as well as macrophages, dendritic cells and monocytes bearing CD4), which is the basis of progressive immunodeficiency — making A correct."
  },
  {
    id: 35,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "SBA",
    question: "A woman presents with an ulcerated vulval lesion and urinary retention. What is the most likely cause?",
    options: [
      { id: "A", text: "Candida" }, { id: "B", text: "HPV" }, { id: "C", text: "HSV" }, { id: "D", text: "Syphilis" }, { id: "E", text: "Trichomonas vaginalis" }
    ],
    correctAnswer: "C",
    explanation: "Genital herpes classically causes painful vulval ulceration severe enough to cause urinary retention from pain-related sphincter spasm, making C correct. Candida causes non-offensive discharge rather than ulcers, syphilis causes a painless (not painful) chancre, HPV causes warts rather than ulcers, and trichomonas causes offensive discharge, not ulceration."
  },
  {
    id: 36,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "SBA",
    question: "Which HPV serotypes are associated with condyloma acuminata (genital warts)?",
    options: [
      { id: "A", text: "1 and 2" },
      { id: "B", text: "6 and 11" },
      { id: "C", text: "16 and 18" },
      { id: "D", text: "31 and 33" },
      { id: "E", text: "HPV types 1 and 2" }
    ],
    correctAnswer: "B",
    explanation: "HPV types 6 and 11 are the classic 'low-risk' serotypes responsible for the great majority of genital warts (condyloma acuminata), making B correct. Types 16 and 18 (C) are the high-risk oncogenic serotypes responsible for most cervical cancer instead. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 37,
    topic: "STDs — Prevention and Control (including HIV in women)",
    type: "SBA",
    question: "Which is a symptom of primary syphilis?",
    options: [
      { id: "A", text: "Spots on the soles and feet" }, { id: "B", text: "Painful genital ulcer" },
      { id: "C", text: "Painless chancre" }, { id: "D", text: "Generalised lymphadenopathy" }, { id: "E", text: "Fever" }
    ],
    correctAnswer: "C",
    explanation: "The hallmark of primary syphilis is a single, painless genital chancre at the site of inoculation, making C correct. Palmar/plantar rash (A), lymphadenopathy (D) and fever (E) are features of secondary syphilis, and a painful ulcer (B) is more typical of herpes or chancroid."
  },

  /* ===================== TOPIC 7: Viral Infections in Pregnancy ===================== */
  {
    id: 38,
    topic: "Viral Infections in Pregnancy (Hepatitis, COVID, Lassa)",
    type: "SBA",
    question: "Regarding Hepatitis B in pregnancy, all are correct EXCEPT:",
    options: [
      { id: "A", text: "A pregnant woman already diagnosed with Hepatitis B is given the hepatitis B vaccine to treat her infection." },
      { id: "B", text: "HBsAg can be seen in people with previous immunisation." },
      { id: "C", text: "HBeAg is a marker of active infection." },
      { id: "D", text: "Infants are given hepatitis B immunoglobulin and vaccine within 24 hours of birth." },
      { id: "E", text: "Invasive procedures are avoided to reduce transmission." }
    ],
    correctAnswer: "A",
    explanation: "The hepatitis B vaccine is a prophylactic (preventive) tool, not a treatment — giving it to a woman already infected does nothing for her existing infection, making A the false statement/'except'. HBeAg genuinely marks active viral replication (C true), infants of infected mothers correctly receive both immunoglobulin and vaccine within 24 hours (D true), and invasive procedures are indeed minimised to reduce transmission risk (E true). (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 39,
    topic: "Viral Infections in Pregnancy (Hepatitis, COVID, Lassa)",
    type: "SBA",
    question: "Which of the following is true concerning Lassa fever in pregnancy?",
    options: [
      { id: "A", text: "Caesarean section is the best mode of delivery." },
      { id: "B", text: "A multimammate rat is the secondary host." },
      { id: "C", text: "It usually presents as ectopic pregnancy." },
      { id: "D", text: "Viral load is lower in pregnancy as more virus is sequestered in the placenta." },
      { id: "E", text: "Less than 10% are symptomatic, and in symptomatic cases a higher viral load is associated with a poorer prognosis." }
    ],
    correctAnswer: "E",
    explanation: "Most Lassa infections are subclinical, but among symptomatic cases (which are disproportionately more common and severe in pregnancy) a higher viral load correlates with worse maternal and fetal outcomes — making E correct. Vaginal delivery, not caesarean section, is generally preferred to minimise bleeding risk from surgery (A wrong); the multimammate rat is the primary (not secondary) reservoir host (B wrong); it does not present as ectopic pregnancy (C wrong); and viral load is actually higher, not lower, in pregnancy (D wrong). (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 8: UTI in Pregnancy ===================== */
  {
    id: 40,
    topic: "UTI in Pregnancy, including Acute Renal Failure",
    type: "SBA",
    question: "A pregnant woman presents with nausea, vomiting, right-sided abdominal pain and fever. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "Acute pyelonephritis" },
      { id: "B", text: "Acute appendicitis" },
      { id: "C", text: "Round ligament pain" },
      { id: "D", text: "Placental abruption" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "Fever with nausea, vomiting and flank/abdominal pain in pregnancy is the classic presentation of acute pyelonephritis, one of the commonest serious infections complicating pregnancy — making A correct. Appendicitis can mimic this but is more typically right iliac fossa pain without the systemic febrile picture pointing so clearly to a renal source, and abruption/round ligament pain do not explain the fever and vomiting."
  },

  /* ===================== TOPIC 9: Uterine Fibroids, Endometriosis, Adenomyosis ===================== */
  {
    id: 41,
    topic: "Uterine Fibroids, Endometriosis and Adenomyosis",
    type: "SBA",
    question: "Submucous fibroids are NOT typically associated with which of the following presentations?",
    options: [
      { id: "A", text: "Intermenstrual bleeding" }, { id: "B", text: "Subfertility" }, { id: "C", text: "Pregnancy loss" },
      { id: "D", text: "Heavy menstrual bleeding" }, { id: "E", text: "Pressure and pain" }
    ],
    correctAnswer: "E",
    explanation: "Submucous fibroids most often present through abnormal bleeding and reproductive problems (IMB, HMB, subfertility, pregnancy loss) because they distort the endometrial cavity, rather than through bulk symptoms — making 'pressure and pain' (E) the presentation they are least associated with; pressure symptoms are more typical of large intramural or subserosal fibroids."
  },
  {
    id: 42,
    topic: "Uterine Fibroids, Endometriosis and Adenomyosis",
    type: "SBA",
    question: "Which theory best explains the pathogenesis of endometriosis?",
    options: [
      { id: "A", text: "Retrograde menstruation" }, { id: "B", text: "Coelomic metaplasia" },
      { id: "C", text: "Haematogenous spread" }, { id: "D", text: "Lymphatic spread" }, { id: "E", text: "Autoimmune process" }
    ],
    correctAnswer: "A",
    explanation: "Sampson's theory of retrograde menstruation — endometrial tissue refluxing through the tubes into the pelvis during menses and implanting there — is the most widely accepted explanation for pelvic endometriosis, making A correct. Coelomic metaplasia, haematogenous and lymphatic spread are proposed to explain endometriosis at distant/unusual sites, and an autoimmune contribution is recognised but is not the primary pathogenic theory. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 43,
    topic: "Uterine Fibroids, Endometriosis and Adenomyosis",
    type: "SBA",
    question: "A 35-year-old nullipara has an 8-month history of heavy menstrual bleeding and a 20-week-sized uterine mass. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "Adenomyosis" },
      { id: "B", text: "Uterine fibroid" },
      { id: "C", text: "Endometrial carcinoma" },
      { id: "D", text: "Ovarian tumour" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "B",
    explanation: "A discretely enlarged uterus reaching 20-week size with HMB is much more characteristic of a large uterine fibroid, since adenomyosis typically produces only modest, diffuse ('boggy') uterine enlargement rather than a mass of this size — making B correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 10: Pelvic Floor & Genital Prolapse ===================== */
  {
    id: 44,
    topic: "Anatomy of the Pelvic Floor and Genital Prolapse",
    type: "SBA",
    question: "Which of the following is the strongest, historically proven risk factor for pelvic organ prolapse?",
    options: [
      { id: "A", text: "Multiparity" },
      { id: "B", text: "Vaginal delivery" },
      { id: "C", text: "Menopause" },
      { id: "D", text: "Smoking" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "B",
    explanation: "Vaginal delivery causes direct mechanical and neurological trauma to the levator ani and its connective tissue supports, and is the single most robustly established risk factor for later pelvic organ prolapse — making B correct. Multiparity is closely related but reflects cumulative vaginal deliveries rather than being the primary mechanism itself; menopause and smoking are contributory but weaker risk factors. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 45,
    topic: "Anatomy of the Pelvic Floor and Genital Prolapse",
    type: "SBA",
    question: "A young woman with uterine prolapse wishes to preserve her fertility. What is the best management option?",
    options: [
      { id: "A", text: "Manchester repair" },
      { id: "B", text: "Anterior colporrhaphy" },
      { id: "C", text: "Pelvic floor repair alone" },
      { id: "D", text: "Vaginal hysterectomy" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "The Manchester repair amputates the elongated cervix and plicates the cardinal ligaments while conserving the uterine body, making it the classic fertility-sparing operation for uterovaginal prolapse — hence A is correct. Vaginal hysterectomy (D) removes the uterus altogether and is unsuitable if fertility is desired. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 46,
    topic: "Anatomy of the Pelvic Floor and Genital Prolapse",
    type: "SBA",
    question: "Which structure maintains the position/support of the uterus?",
    options: [
      { id: "A", text: "Pubocervical ligament" },
      { id: "B", text: "Cardinal (Mackenrodt's) ligament" },
      { id: "C", text: "Round ligament" },
      { id: "D", text: "Broad ligament" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "B",
    explanation: "The cardinal (Mackenrodt's/transverse cervical) ligaments are the principal structures suspending the cervix and uterus over the pelvic floor, providing the main level of apical support — making B correct. The round ligament (C) mainly maintains uterine anteversion rather than vertical support, and the broad and pubocervical structures are secondary supports. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 47,
    topic: "Anatomy of the Pelvic Floor and Genital Prolapse",
    type: "SBA",
    question: "Which of the following is NOT TRUE regarding pelvic organ prolapse?",
    options: [
      { id: "A", text: "Manchester repair is recommended for post-menopausal women." },
      { id: "B", text: "Pessaries are used for women not fit for surgery." },
      { id: "C", text: "Expectant management is used for first-degree prolapse." },
      { id: "D", text: "Lefort's operation is used for those not sexually active." },
      { id: "E", text: "Vaginal hysterectomy and pelvic floor repair is used for post-menopausal women who are fit for surgery." }
    ],
    correctAnswer: "A",
    explanation: "The Manchester repair is a fertility-sparing operation typically offered to younger women who wish to conserve their uterus, not specifically recommended for postmenopausal women (for whom vaginal hysterectomy is generally preferred) — making A the false statement/'NOT TRUE'. Pessaries for the unfit-for-surgery (B), expectant management of mild prolapse (C), Lefort's colpocleisis for the sexually inactive (D), and vaginal hysterectomy with repair for fit postmenopausal women (E) are all standard, true statements. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 11: Micturition / Urinary Incontinence ===================== */
  {
    id: 48,
    topic: "Physiology of Micturition and Its Disorders (Incontinence)",
    type: "SBA",
    question: "Which of the following is true about VVF/urinary incontinence?",
    options: [
      { id: "A", text: "Urge incontinence occurs more in menopause." },
      { id: "B", text: "Oestrogen deficiency can cause incontinence." },
      { id: "C", text: "VVF is only due to obstruction." },
      { id: "D", text: "VVF and incontinence cannot occur together." },
      { id: "E", text: "Stress incontinence is more common in the reproductive age group than in menopausal women." }
    ],
    correctAnswer: "B",
    explanation: "Oestrogen deficiency causes urogenital atrophy of the bladder neck and urethral mucosa, which is a well-established contributor to urinary incontinence around and after the menopause — making B correct. Vesicovaginal fistula is not 'only' caused by obstructed labour (it can follow surgery, malignancy or radiation too), so C is too absolute, and VVF certainly can coexist with other forms of incontinence, so D is wrong."
  },

  /* ===================== TOPIC 12: Vulval and Vaginal Lesions ===================== */
  {
    id: 49,
    topic: "Benign and Malignant Lesions of the Vulva and Vagina",
    type: "SBA",
    question: "Regarding vulval diseases, which of the following is FALSE (the exception)?",
    options: [
      { id: "A", text: "Douching can cause allergic vulval dermatitis." },
      { id: "B", text: "Vulval biopsy is always indicated." },
      { id: "C", text: "Vulval adhesions can occur in the pre-menarcheal state." },
      { id: "D", text: "Irritation of vulval skin is more marked than in other skin areas." },
      { id: "E", text: "Malignant lesions are more common than benign lesions." }
    ],
    correctAnswer: "E",
    explanation: "Benign vulval conditions (dermatitis, lichen sclerosus, cysts, adhesions) are far more common in clinical practice than vulval malignancy, which is rare — making E the false statement. Douching-related contact dermatitis (A), pre-menarcheal labial adhesions from low oestrogen (C), and the vulva's particular sensitivity to irritants (D) are all recognised true facts, and biopsy is reserved for suspicious lesions rather than 'always' indicated, though E remains the clearest false statement overall. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 13: Carcinoma of the Cervix ===================== */
  {
    id: 50,
    topic: "Carcinoma of the Cervix (+ Screening and Prevention)",
    type: "SBA",
    question: "A 48-year-old woman has prolonged vaginal bleeding; her last smear was 8 years ago. Speculum exam shows a suspicious cervix that bleeds on contact. What is the most appropriate initial investigation?",
    options: [
      { id: "A", text: "Cervical biopsy." }, { id: "B", text: "LLETZ." }, { id: "C", text: "Hysteroscopy." },
      { id: "D", text: "MRI scan of the pelvis." }, { id: "E", text: "Transabdominal ultrasound scan." }
    ],
    correctAnswer: "A",
    explanation: "A histological diagnosis via cervical biopsy is required first, before any imaging is used to stage the disease or before definitive surgical/excisional treatment is planned — making A correct."
  },
  {
    id: 51,
    topic: "Carcinoma of the Cervix (+ Screening and Prevention)",
    type: "SBA",
    question: "A 32-year-old woman has a 3 cm stage IB1 squamous cell carcinoma of the cervix and wishes to preserve fertility. What treatment would you recommend?",
    options: [
      { id: "A", text: "Cold knife cone biopsy." }, { id: "B", text: "LLETZ." },
      { id: "C", text: "Radical hysterectomy with bilateral pelvic lymphadenectomy." },
      { id: "D", text: "Radical radiotherapy with cisplatin chemotherapy." },
      { id: "E", text: "Radical trachelectomy with bilateral pelvic lymphadenectomy." }
    ],
    correctAnswer: "E",
    explanation: "Radical trachelectomy removes the cervix and parametrial tissue with pelvic lymphadenectomy while conserving the uterine body and ovaries, allowing a future pregnancy — making it the correct fertility-sparing option for early-stage disease of this size. (Note: the original source explanation contained a staging error, stating IB1 as >4 cm rather than the correct FIGO definition of <4 cm; this has not been corrected in the underlying source but does not change which option is the best answer.)"
  },
  {
    id: 52,
    topic: "Carcinoma of the Cervix (+ Screening and Prevention)",
    type: "EMQ",
    question: "In the cervical screening pathway, what is the next step for an inadequate cervical cytology sample?",
    options: [
      { id: "A", text: "Cryotherapy" },
      { id: "B", text: "Directed punch biopsy" },
      { id: "C", text: "High-risk HPV test" },
      { id: "D", text: "LLETZ" },
      { id: "E", text: "Repeat cervical cytology in 3 months" }
    ],
    correctAnswer: "E",
    explanation: "An inadequate sample simply needs to be repeated, and this is done relatively soon (around 3 months) to avoid unnecessary delay in re-establishing an adequate result, making F correct."
  },
  {
    id: 53,
    topic: "Carcinoma of the Cervix (+ Screening and Prevention)",
    type: "EMQ",
    question: "In the cervical screening pathway, what is the next step for mild dyskaryosis?",
    options: [
      { id: "A", text: "Cryotherapy" },
      { id: "B", text: "Directed punch biopsy" },
      { id: "C", text: "High-risk HPV test" },
      { id: "D", text: "LLETZ" },
      { id: "E", text: "Referral for colposcopy" }
    ],
    correctAnswer: "C",
    explanation: "Minor cytological abnormalities undergo reflex high-risk HPV testing: if HPV-negative the woman returns to routine recall, and if HPV-positive she is referred for colposcopy — making C the correct immediate next step."
  },
  {
    id: 54,
    topic: "Carcinoma of the Cervix (+ Screening and Prevention)",
    type: "EMQ",
    question: "In the cervical screening pathway, what is the appropriate management of CIN 2 found on directed punch biopsy?",
    options: [
      { id: "A", text: "Cryotherapy" },
      { id: "B", text: "Directed punch biopsy" },
      { id: "C", text: "High-risk HPV test" },
      { id: "D", text: "LLETZ" },
      { id: "E", text: "Referral for colposcopy" }
    ],
    correctAnswer: "D",
    explanation: "CIN 2 is treated definitively with an excisional procedure such as LLETZ, which both treats the lesion and provides a histological specimen to confirm clear margins — making D correct."
  },
  {
    id: 55,
    topic: "Carcinoma of the Cervix (+ Screening and Prevention)",
    type: "EMQ",
    question: "In the cervical screening pathway, what happens after a negative 'test of cure' following treatment?",
    options: [
      { id: "A", text: "Cryotherapy" },
      { id: "B", text: "Directed punch biopsy" },
      { id: "C", text: "High-risk HPV test" },
      { id: "D", text: "LLETZ" },
      { id: "E", text: "Repeat cervical cytology in 3 years" }
    ],
    correctAnswer: "E",
    explanation: "A negative test of cure (performed around 6 months after treatment) allows the woman to return to routine 3-yearly recall, making H correct."
  },
  {
    id: 56,
    topic: "Carcinoma of the Cervix (+ Screening and Prevention)",
    type: "SBA",
    question: "On examination, a friable cervical lesion/mass that bleeds on contact is seen. What is the next appropriate step?",
    options: [
      { id: "A", text: "Cervical biopsy" },
      { id: "B", text: "Cytology" },
      { id: "C", text: "Colposcopy" },
      { id: "D", text: "HPV DNA testing" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "A visibly friable, suspicious cervical lesion should be biopsied directly for histological diagnosis rather than screened with cytology or HPV testing, which are designed to detect pre-clinical disease, not confirm an already-visible lesion — making A correct."
  },

  /* ===================== TOPIC 14: Carcinoma of the Endometrium ===================== */
  {
    id: 57,
    topic: "Carcinoma of the Endometrium",
    type: "EMQ",
    question: "Which is the most common uterine malignancy?",
    options: [
      { id: "A", text: "Simple hyperplasia of the endometrium" },
      { id: "B", text: "Complex hyperplasia with atypia" },
      { id: "C", text: "Endometrioid adenocarcinoma of the endometrium" },
      { id: "D", text: "Serous uterine carcinoma" },
      { id: "E", text: "Clear cell carcinoma of the uterus" }
    ],
    correctAnswer: "C",
    explanation: "Type 1 (oestrogen-dependent) endometrioid adenocarcinoma accounts for roughly 75-80% of all endometrial cancers, making C by far the most common uterine malignancy overall."
  },
  {
    id: 58,
    topic: "Carcinoma of the Endometrium",
    type: "EMQ",
    question: "Which is a rare tumour of the myometrium?",
    options: [
      { id: "A", text: "Simple hyperplasia of the endometrium" },
      { id: "B", text: "Complex hyperplasia with atypia" },
      { id: "C", text: "Endometrioid adenocarcinoma of the endometrium" },
      { id: "D", text: "Serous uterine carcinoma" },
      { id: "E", text: "Leiomyosarcoma of the uterus" }
    ],
    correctAnswer: "E",
    explanation: "Leiomyosarcoma arises from the smooth muscle of the myometrium and is a rare but recognised uterine sarcoma, making G correct; the other malignant options listed here are of endometrial (epithelial) rather than myometrial origin."
  },
  {
    id: 59,
    topic: "Carcinoma of the Endometrium",
    type: "EMQ",
    question: "Which rare uterine tumour is derived from skeletal muscle?",
    options: [
      { id: "A", text: "Simple hyperplasia of the endometrium" },
      { id: "B", text: "Complex hyperplasia with atypia" },
      { id: "C", text: "Endometrioid adenocarcinoma of the endometrium" },
      { id: "D", text: "Serous uterine carcinoma" },
      { id: "E", text: "Rhabdomyosarcoma" }
    ],
    correctAnswer: "E",
    explanation: "Rhabdomyosarcoma is a heterologous sarcoma composed of skeletal muscle elements and can rarely arise in the uterus, particularly in children, making I correct."
  },
  {
    id: 60,
    topic: "Carcinoma of the Endometrium",
    type: "EMQ",
    question: "Which lesion is the precursor of endometrioid adenocarcinoma of the endometrium?",
    options: [
      { id: "A", text: "Simple hyperplasia of the endometrium" },
      { id: "B", text: "Complex hyperplasia with atypia" },
      { id: "C", text: "Endometrioid adenocarcinoma of the endometrium" },
      { id: "D", text: "Serous uterine carcinoma" },
      { id: "E", text: "Clear cell carcinoma of the uterus" }
    ],
    correctAnswer: "B",
    explanation: "Type 1 (oestrogen-dependent) endometrial cancers progress along a recognised hyperplasia-carcinoma sequence, with complex atypical hyperplasia being the immediate precursor lesion, making B correct."
  },
  {
    id: 61,
    topic: "Carcinoma of the Endometrium",
    type: "SBA",
    question: "A 54-year-old woman has postmenopausal bleeding; TVUSS shows an 8mm endometrium and biopsy shows moderately differentiated adenocarcinoma. What is the most appropriate staging investigation?",
    options: [
      { id: "A", text: "Chest X-ray." }, { id: "B", text: "CT scan of thorax, abdomen and pelvis." },
      { id: "C", text: "Hysteroscopy." }, { id: "D", text: "MRI scan of the pelvis." }, { id: "E", text: "Transabdominal ultrasound scan." }
    ],
    correctAnswer: "D",
    explanation: "Pelvic MRI provides the most accurate assessment of myometrial invasion depth, which is critical for staging and surgical planning in endometrial cancer, and is not matched by the other listed modalities — making D correct."
  },
  {
    id: 62,
    topic: "Carcinoma of the Endometrium",
    type: "SBA",
    question: "A fit 72-year-old woman has stage II endometrioid adenocarcinoma on MRI staging. What management is indicated?",
    options: [
      { id: "A", text: "Carboplatin-based chemotherapy." },
      { id: "B", text: "Total abdominal hysterectomy with bilateral salpingo-oophorectomy." },
      { id: "C", text: "External beam radiation therapy to the pelvis." },
      { id: "D", text: "Modified radical hysterectomy." },
      { id: "E", text: "Brachytherapy." }
    ],
    correctAnswer: "D",
    explanation: "Stage II disease implies cervical stromal involvement, which requires a modified radical hysterectomy (removing a vaginal cuff and paracervical/parametrial tissue) to achieve adequate margins, since a simple hysterectomy alone carries a high relapse rate — making D correct."
  },
  {
    id: 63,
    topic: "Carcinoma of the Endometrium",
    type: "SBA",
    question: "What is the most important predictor of prognosis in endometrial carcinoma?",
    options: [
      { id: "A", text: "Depth of myometrial invasion" },
      { id: "B", text: "Tumour size on ultrasound" },
      { id: "C", text: "Co-morbidities" },
      { id: "D", text: "Patient age" },
      { id: "E", text: "Benign functional cyst" }
    ],
    correctAnswer: "A",
    explanation: "The depth of myometrial invasion is a core FIGO staging criterion and one of the strongest independent predictors of nodal spread, recurrence and overall prognosis in endometrial cancer, making A correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 15: Ovarian Tumours ===================== */
  {
    id: 64,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian tumour is associated with STIC lesions in the Fallopian tube?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Dysgerminoma" }
    ],
    correctAnswer: "A",
    explanation: "Serous tubal intraepithelial carcinoma (STIC), a p53-mutated precursor lesion in the distal Fallopian tube, is now recognised as the origin of most high-grade pelvic serous carcinomas, making A correct."
  },
  {
    id: 65,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian tumour is commonly associated with BRCA mutation carrier status?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Dysgerminoma" }
    ],
    correctAnswer: "A",
    explanation: "Up to 30% of high-grade serous ovarian cancers occur in BRCA1/2 mutation carriers, making A the strongest association among the listed tumour types."
  },
  {
    id: 66,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian tumour may present with amenorrhoea, a deep voice, hirsutism and acne?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Sertoli-Leydig ovarian tumour" }
    ],
    correctAnswer: "E",
    explanation: "Sertoli-Leydig cell tumours secrete androgens in over half of cases, producing a virilising picture of amenorrhoea, voice deepening, hirsutism and acne — making H correct."
  },
  {
    id: 67,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian tumour may provoke precocious puberty in young girls?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Granulosa cell tumour" }
    ],
    correctAnswer: "E",
    explanation: "Granulosa cell tumours secrete oestrogen, which can trigger precocious puberty when they occur in prepubertal girls, making F correct."
  },
  {
    id: 68,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian cancer subtype is associated with endometriosis?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Dysgerminoma" }
    ],
    correctAnswer: "C",
    explanation: "Endometriosis-associated ovarian cancers are typically of the endometrioid or clear cell subtype, arising from malignant transformation of endometriotic deposits, making C correct."
  },
  {
    id: 69,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian tumour secretes inhibin?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Granulosa cell tumour" }
    ],
    correctAnswer: "E",
    explanation: "Granulosa cell tumours secrete inhibin, which is used clinically as a tumour marker for diagnosis and surveillance, making F correct."
  },
  {
    id: 70,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian tumour is associated with appendiceal tumours and pseudomyxoma peritonei?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Dysgerminoma" }
    ],
    correctAnswer: "B",
    explanation: "Mucinous borderline ovarian tumours may arise from or coexist with appendiceal mucinous tumours and are linked to pseudomyxoma peritonei, making B correct."
  },
  {
    id: 71,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which ovarian tumour may contain hair, teeth, bone, cartilage and sebum?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Dermoid cyst" }
    ],
    correctAnswer: "E",
    explanation: "A dermoid cyst (mature cystic teratoma) is classically composed of tissue from all three germ layers, including hair, teeth, bone, cartilage and sebum, making I correct."
  },
  {
    id: 72,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "EMQ",
    question: "Which is a metastatic ovarian tumour from a colorectal or breast primary?",
    options: [
      { id: "A", text: "High-grade pelvic serous carcinoma" },
      { id: "B", text: "Mucinous BOT" },
      { id: "C", text: "Endometrioid ovarian cancer" },
      { id: "D", text: "Immature teratoma" },
      { id: "E", text: "Krukenberg tumour" }
    ],
    correctAnswer: "E",
    explanation: "A Krukenberg tumour is a metastatic ovarian deposit, classically from a gastric, colorectal or breast primary, containing characteristic mucin-filled signet-ring cells — making J correct."
  },
  {
    id: 73,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "A 34-year-old fit and well woman with a BRCA1 mutation, with up-to-date normal smears, wants to lower her ovarian cancer risk as much as possible. What surgery would you recommend?",
    options: [
      { id: "A", text: "Bilateral oophorectomy." }, { id: "B", text: "Bilateral salpingectomy with delayed oophorectomy." },
      { id: "C", text: "Bilateral salpingo-oophorectomy (BSO)." }, { id: "D", text: "Subtotal hysterectomy and BSO." }, { id: "E", text: "Total hysterectomy and BSO." }
    ],
    correctAnswer: "C",
    explanation: "Removing both tubes and ovaries (BSO) reduces ovarian cancer risk by around 90% and premenopausal breast cancer risk by about 50%, and can be managed afterward with continuous combined HRT if there is no personal breast cancer history — making C correct without the added morbidity of unnecessary hysterectomy."
  },
  {
    id: 74,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "A 58-year-old asymptomatic woman has a large pelviabdominal mass to the xiphisternum, solid/cystic on ultrasound, no free fluid, and CA125 of 430. How would you manage this?",
    options: [
      { id: "A", text: "Laparoscopic ovarian cystectomy." },
      { id: "B", text: "Laparotomy, TAH+BSO, pelvic/para-aortic node sampling, omentectomy and debulking." },
      { id: "C", text: "Repeat scan and CA125 in 3 months." },
      { id: "D", text: "Six cycles of neoadjuvant chemotherapy first." },
      { id: "E", text: "Ultrasound-guided aspiration and cytology." }
    ],
    correctAnswer: "B",
    explanation: "The size, complexity and markedly raised CA125 give a high risk-of-malignancy index, warranting a full staging laparotomy with complete surgical debulking as the primary approach — making B correct. Cyst aspiration (E) risks peritoneal 'seeding' of malignant cells and is avoided when cancer is suspected."
  },
  {
    id: 75,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "A 4 cm ovarian cyst is picked up incidentally in an asymptomatic woman. What would you do?",
    options: [
      { id: "A", text: "Immediate cystectomy" },
      { id: "B", text: "Reassure and discharge with no follow-up" },
      { id: "C", text: "Yearly ultrasound follow-up" },
      { id: "D", text: "CA125 assay as the only next step" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "C",
    explanation: "A small (<5 cm), simple incidental ovarian cyst in an asymptomatic woman is most often functional and can safely be monitored with periodic ultrasound follow-up rather than immediate surgery, making C the most balanced and appropriate answer. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 76,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "An ovarian tumour is found involving the ovary, uterus and positive peritoneal washings at surgery. What FIGO stage is this?",
    options: [
      { id: "A", text: "Stage I" },
      { id: "B", text: "Stage II" },
      { id: "C", text: "Stage III" },
      { id: "D", text: "Stage IV" },
      { id: "E", text: "Benign functional cyst" }
    ],
    correctAnswer: "B",
    explanation: "Extension of tumour to pelvic structures such as the uterus (with or without positive peritoneal cytology confined to the pelvis) corresponds to FIGO Stage II ovarian cancer, making B correct, as stated in the source."
  },
  {
    id: 77,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "A woman has a pelvic mass and a high level of inhibin. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "Granulosa cell tumour" },
      { id: "B", text: "Endometriosis" },
      { id: "C", text: "Epithelial ovarian tumour" },
      { id: "D", text: "Fibroma" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "Granulosa cell tumours are the classic ovarian neoplasm that secretes inhibin, which is used both diagnostically and for surveillance — making A correct."
  },
  {
    id: 78,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "A woman has a pelvic mass, hirsutism, voice change, and a raised testosterone level. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "Dysgerminoma" },
      { id: "B", text: "Sertoli-Leydig cell tumour" },
      { id: "C", text: "Serous cystadenoma" },
      { id: "D", text: "Krukenberg tumour" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "B",
    explanation: "Virilisation (hirsutism, voice change) with a raised testosterone level and a pelvic mass points strongly to an androgen-secreting Sertoli-Leydig cell tumour, making B correct."
  },
  {
    id: 79,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "What is the first-line investigation for a suspected ovarian/pelvic mass presenting with weight loss, early satiety, bloating and ascites?",
    options: [
      { id: "A", text: "Abdominopelvic ultrasound" },
      { id: "B", text: "CT abdomen and pelvis" },
      { id: "C", text: "CA-125 alone" },
      { id: "D", text: "Diagnostic laparoscopy" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "Ultrasound is the recommended first-line imaging investigation for a suspected pelvic/ovarian mass, being widely available, low-risk and highly informative about mass characteristics — making A correct; CA125 is used alongside ultrasound (via the risk of malignancy index) rather than as a stand-alone first test."
  },
  {
    id: 80,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "What is the tumour marker for a yolk sac (endodermal sinus) tumour?",
    options: [
      { id: "A", text: "Alpha-fetoprotein (AFP)" },
      { id: "B", text: "LDH" },
      { id: "C", text: "CA-125" },
      { id: "D", text: "hCG" },
      { id: "E", text: "Benign functional cyst" }
    ],
    correctAnswer: "A",
    explanation: "Yolk sac tumours characteristically secrete alpha-fetoprotein (AFP), which is used both for diagnosis and to monitor treatment response, making A correct."
  },
  {
    id: 81,
    topic: "Ovarian Tumours — Benign and Malignant",
    type: "SBA",
    question: "Which feature on ultrasound suggests malignancy in an ovarian tumour?",
    options: [
      { id: "A", text: "Echogenic (simple) cyst content" },
      { id: "B", text: "Size less than 5 cm" },
      { id: "C", text: "Papillary/pedunculated projections" },
      { id: "D", text: "Unilocular cyst" },
      { id: "E", text: "Benign functional cyst" }
    ],
    correctAnswer: "C",
    explanation: "Solid papillary or pedunculated projections within a cystic mass are one of the classic sonographic red flags for ovarian malignancy, whereas a small, simple, unilocular cyst is reassuringly benign — making C correct."
  },

  /* ===================== TOPIC 16: Trophoblastic Disease (GTD) ===================== */
  {
    id: 82,
    topic: "Trophoblastic Diseases — Benign and Malignant (GTD)",
    type: "SBA",
    question: "A 43-year-old woman has a surgical curettage for miscarriage and pathology confirms a partial mole. What would you do?",
    options: [
      { id: "A", text: "Register the patient at a nationally recognized centre for treatment of gestational trophoblastic disease." },
      { id: "B", text: "Start the COCP." },
      { id: "C", text: "Prescribe methotrexate." },
      { id: "D", text: "Arrange an urgent TVUSS." },
      { id: "E", text: "Start serial hCG monitoring." }
    ],
    correctAnswer: "A",
    explanation: "All molar pregnancies, including partial moles, are registered at a designated GTD centre, which then coordinates the necessary serial hCG monitoring — making A the single overarching correct action. Oestrogen-containing contraception is best avoided until hCG has normalised, so B is not the immediate step; TVUSS, methotrexate and antibiotics have no role at this stage."
  },
  {
    id: 83,
    topic: "Trophoblastic Diseases — Benign and Malignant (GTD)",
    type: "SBA",
    question: "Regarding molar pregnancy, which statement is TRUE?",
    options: [
      { id: "A", text: "Uterine size is large-for-dates in about half of cases, appropriate for dates in about a quarter, and small in about a quarter." },
      { id: "B", text: "Pre-eclampsia is a common feature." },
      { id: "C", text: "Hysterotomy is the treatment of choice." },
      { id: "D", text: "Uterine suction evacuation is the treatment of choice." },
      { id: "E", text: "The rate of molar pregnancy co-existing with a normal pregnancy is 50-60%." }
    ],
    correctAnswer: "A",
    explanation: "The classic teaching on molar pregnancy is that the uterus is large-for-dates in roughly half of cases, correctly sized in about a quarter and small in the remainder — making A the best-known, most specific epidemiological fact. Suction curettage (not hysterotomy) is the actual treatment of choice, so while D is also broadly true, A is the more classically tested statement, and a coexisting normal twin pregnancy alongside a mole is in fact extremely rare (roughly 1 in tens of thousands), not 50-60% (E clearly wrong)."
  },
  {
    id: 84,
    topic: "Trophoblastic Diseases — Benign and Malignant (GTD)",
    type: "SBA",
    question: "Which is the CORRECT classification of gestational trophoblastic disease (GTD)?",
    options: [
      { id: "A", text: "Villous GTD includes complete mole, partial mole, invasive mole and placental site nodule." },
      { id: "B", text: "Villous GTD includes complete mole, partial mole and invasive mole." },
      { id: "C", text: "Exaggerated placental site and placental site nodule are malignant." },
      { id: "D", text: "Choriocarcinoma and placental site nodule are benign." },
      { id: "E", text: "Gestational trophoblastic neoplasia is completely benign." }
    ],
    correctAnswer: "B",
    explanation: "The standard classification places complete mole, partial mole and invasive mole under the villous GTD category, while non-villous lesions (choriocarcinoma, placental site trophoblastic tumour, exaggerated placental site reaction, placental site nodule) form a separate group — making B correct. Placental site nodule is in fact benign and non-villous, so A is wrong; choriocarcinoma is malignant (not benign), so D is wrong; and gestational trophoblastic neoplasia (invasive mole, choriocarcinoma, PSTT) is by definition malignant, not benign, so E is wrong."
  },
  {
    id: 85,
    topic: "Trophoblastic Diseases — Benign and Malignant (GTD)",
    type: "SBA",
    question: "Ultrasound shows a growth-restricted fetus with a placenta containing multiple fluid-filled sacs. What is the diagnosis?",
    options: [
      { id: "A", text: "Complete hydatidiform mole" },
      { id: "B", text: "Complete mole with a coexistent twin" },
      { id: "C", text: "Partial mole" },
      { id: "D", text: "Placental site trophoblastic tumour" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "C",
    explanation: "A partial mole arises from triploidy and characteristically presents with a growth-restricted (often abnormal) fetus alongside a placenta showing molar (vesicular) change, unlike a complete mole which has no fetal tissue at all — making C correct."
  },

  /* ===================== TOPIC 17: Tumour Markers ===================== */
  {
    id: 86,
    topic: "Tumour Markers and Antigens in Gynaecological Malignancies",
    type: "SBA",
    question: "Which hormone is the best marker for checking ovarian reserve?",
    options: [
      { id: "A", text: "Inhibin" },
      { id: "B", text: "LH" },
      { id: "C", text: "FSH" },
      { id: "D", text: "AMH" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "D",
    explanation: "Anti-Müllerian hormone (AMH) is produced by small growing follicles, remains relatively stable throughout the cycle, and correlates well with the remaining follicle pool, making it the best current marker of ovarian reserve — hence D is correct over FSH, which is a cruder, cycle-dependent, later marker of declining reserve."
  },

  /* ===================== TOPIC 18: Infertility ===================== */
  {
    id: 87,
    topic: "Infertility — Male and Female; Social Aspects",
    type: "SBA",
    question: "A woman with secondary infertility and regular menses has a normal husband semen analysis and HSG-confirmed bilateral tubal blockage. What is the next appropriate step?",
    options: [
      { id: "A", text: "IVF" },
      { id: "B", text: "Hysteroscopy" },
      { id: "C", text: "Laparoscopy and chromotubation" },
      { id: "D", text: "Clomiphene citrate" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "With confirmed bilateral tubal blockage and a normal male partner, tubal surgery has a low success rate (particularly with bilateral disease), so IVF — which bypasses the tubes entirely — is the most efficient route to pregnancy and is generally recommended as the definitive next step, making A correct. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 88,
    topic: "Infertility — Male and Female; Social Aspects",
    type: "SBA",
    question: "Sequelae of PID include all of the following EXCEPT:",
    options: [
      { id: "A", text: "Tubal infertility" }, { id: "B", text: "Ectopic pregnancy" }, { id: "C", text: "Chronic pelvic pain" },
      { id: "D", text: "Reduction of ovulation" }, { id: "E", text: "Sepsis" }
    ],
    correctAnswer: "D",
    explanation: "PID damages the Fallopian tubes and peritoneum, causing tubal infertility, ectopic pregnancy risk, chronic pelvic pain and, if severe, sepsis — but it does not typically impair ovulation itself, since ovarian function is largely independent of tubal/peritoneal scarring, making D the correct 'except'. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 19: Family Planning / Contraception ===================== */
  {
    id: 89,
    topic: "Population Dynamics, Family Planning Counselling, Medical Eligibility Criteria",
    type: "SBA",
    question: "A woman had unprotected sex 4 days ago. Which emergency contraceptive option is most appropriate?",
    options: [
      { id: "A", text: "Levonorgestrel" }, { id: "B", text: "Depot medroxyprogesterone acetate" }, { id: "C", text: "Mifepristone" },
      { id: "D", text: "Etonogestrel implant" }, { id: "E", text: "Ulipristal acetate" }
    ],
    correctAnswer: "E",
    explanation: "Ulipristal acetate remains effective as emergency contraception up to 120 hours (5 days) after intercourse, unlike levonorgestrel which is licensed and most effective mainly within 72 hours — making E the best oral option at 4 days. Depot medroxyprogesterone and the implant are ongoing contraceptive methods, not emergency options. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 90,
    topic: "Population Dynamics, Family Planning Counselling, Medical Eligibility Criteria",
    type: "SBA",
    question: "What is the best long-term contraceptive for a woman who desires contraception without the need for constant renewal?",
    options: [
      { id: "A", text: "Norethisterone enanthate (Noristerat)" },
      { id: "B", text: "Depo-Provera" },
      { id: "C", text: "Contraceptive patch" },
      { id: "D", text: "IUCD" },
      { id: "E", text: "Barrier methods only" }
    ],
    correctAnswer: "D",
    explanation: "The intrauterine contraceptive device provides several years of protection without any need for the woman to remember repeat dosing, unlike the patch (weekly), Depo-Provera (3-monthly) or Noristerat (2-monthly) — making D correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 20: Contraceptive Technology ===================== */
  {
    id: 91,
    topic: "Contraceptive Technology",
    type: "SBA",
    question: "A woman presented 3 days after unprotected sexual intercourse. What is the best emergency contraceptive to offer?",
    options: [
      { id: "A", text: "Levonorgestrel" },
      { id: "B", text: "Ulipristal acetate" },
      { id: "C", text: "Copper IUCD" },
      { id: "D", text: "Yuzpe regimen" },
      { id: "E", text: "Barrier methods only" }
    ],
    correctAnswer: "C",
    explanation: "The copper IUCD is the single most effective emergency contraceptive method overall (failure rate <1%), remains effective up to 5 days after intercourse, and additionally provides ongoing contraception — making C the best answer at 3 days post-intercourse. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 21: Acute Gynae Emergencies ===================== */
  {
    id: 92,
    topic: "Acute Gynaecological Emergencies",
    type: "SBA",
    question: "Concerning acute abdomen in pregnancy, which of the following is INCORRECT?",
    options: [
      { id: "A", text: "Appendicitis is common in pregnancy." },
      { id: "B", text: "Acute pancreatitis is commonly due to cholelithiasis." },
      { id: "C", text: "Appendicular perforation is common in the first trimester." },
      { id: "D", text: "Ovarian accident may occur in pregnancy." },
      { id: "E", text: "Intestinal obstruction commonly occurs in the second half of pregnancy and immediate puerperium." }
    ],
    correctAnswer: "C",
    explanation: "Appendiceal perforation risk actually rises in the third trimester (not the first) because pregnancy displaces the appendix, distorts the clinical picture, and delays diagnosis — making C the incorrect statement. Appendicitis remaining the commonest surgical emergency of pregnancy (A), gallstone-driven pancreatitis (B), ovarian torsion/rupture in pregnancy (D), and obstruction related to the rapidly changing uterine size in later pregnancy/puerperium (E) are all true. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 93,
    topic: "Acute Gynaecological Emergencies",
    type: "SBA",
    question: "Diagnostic laparoscopy is useful for all of the following EXCEPT:",
    options: [
      { id: "A", text: "Bilateral tubal blockage" }, { id: "B", text: "Endometriosis" }, { id: "C", text: "Endometrial polyp" },
      { id: "D", text: "Pelvic inflammatory disease" }, { id: "E", text: "Fitz-Hugh-Curtis syndrome" }
    ],
    correctAnswer: "C",
    explanation: "An endometrial polyp is an intracavitary lesion best diagnosed by hysteroscopy (which directly visualises the endometrial cavity), not laparoscopy, which views the pelvic organs from outside — making C the correct 'except'. Tubal patency, endometriosis, PID and its complication Fitz-Hugh-Curtis syndrome are all classic laparoscopic diagnoses. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 22: Bleeding in Early Pregnancy ===================== */
  {
    id: 94,
    topic: "Bleeding in Early Pregnancy; Unsafe Abortion and Post-Abortal Care",
    type: "EMQ",
    question: "What is the key initial investigation for pain in early pregnancy?",
    options: [
      { id: "A", text: "Transvaginal ultrasound scan (TVUSS)" },
      { id: "B", text: "Serum hCG levels" },
      { id: "C", text: "Midstream urine collection (MSU)" },
      { id: "D", text: "Full blood count (FBC)" },
      { id: "E", text: "Suction curettage of uterus" }
    ],
    correctAnswer: "A",
    explanation: "Transvaginal ultrasound is the key first investigation in early pregnancy pain, as it establishes pregnancy location (intrauterine vs ectopic) and viability, directing all further management — making A the single most important initial test, even though hCG and MSU are also useful supporting investigations."
  },
  {
    id: 95,
    topic: "Bleeding in Early Pregnancy; Unsafe Abortion and Post-Abortal Care",
    type: "EMQ",
    question: "What is the definitive surgical management of a confirmed ectopic pregnancy (EP)?",
    options: [
      { id: "A", text: "Transvaginal ultrasound scan (TVUSS)" },
      { id: "B", text: "Serum hCG levels" },
      { id: "C", text: "Midstream urine collection (MSU)" },
      { id: "D", text: "Full blood count (FBC)" },
      { id: "E", text: "Salpingectomy" }
    ],
    correctAnswer: "E",
    explanation: "Salpingectomy is the classic definitive surgical management of ectopic pregnancy, particularly where the tube is significantly damaged or the contralateral tube is healthy — making H the best answer, while methotrexate (G) remains the medical (non-surgical) alternative for suitable early, stable cases."
  },
  {
    id: 96,
    topic: "Bleeding in Early Pregnancy; Unsafe Abortion and Post-Abortal Care",
    type: "EMQ",
    question: "What is a definitive management option for miscarriage?",
    options: [
      { id: "A", text: "Transvaginal ultrasound scan (TVUSS)" },
      { id: "B", text: "Serum hCG levels" },
      { id: "C", text: "Midstream urine collection (MSU)" },
      { id: "D", text: "Full blood count (FBC)" },
      { id: "E", text: "Suction curettage of uterus" }
    ],
    correctAnswer: "E",
    explanation: "Suction curettage is the classic definitive surgical management of miscarriage, evacuating retained products of conception, making E correct; misoprostol (F) is the recognised medical alternative depending on patient preference and clinical circumstances."
  },
  {
    id: 97,
    topic: "Bleeding in Early Pregnancy; Unsafe Abortion and Post-Abortal Care",
    type: "EMQ",
    question: "What is essential management for a suspected hydatidiform mole?",
    options: [
      { id: "A", text: "Transvaginal ultrasound scan (TVUSS)" },
      { id: "B", text: "Serum hCG levels" },
      { id: "C", text: "Midstream urine collection (MSU)" },
      { id: "D", text: "Full blood count (FBC)" },
      { id: "E", text: "Suction curettage of uterus" }
    ],
    correctAnswer: "E",
    explanation: "Suction curettage is essential for both evacuating the mole and obtaining tissue for histological confirmation, making E correct; oestrogens are subsequently avoided (I) because of a theoretical link to choriocarcinoma risk, but the evacuation itself is the essential management step being asked for here."
  },
  {
    id: 98,
    topic: "Bleeding in Early Pregnancy; Unsafe Abortion and Post-Abortal Care",
    type: "SBA",
    question: "A 25-year-old woman has vaginal bleeding, a positive pregnancy test, and TVUSS showing a non-viable intrauterine pregnancy. What would it be reasonable to offer her?",
    options: [
      { id: "A", text: "Laparoscopy." }, { id: "B", text: "Serum hCG measurement." }, { id: "C", text: "Misoprostol." },
      { id: "D", text: "Methotrexate." }, { id: "E", text: "Progesterone." }
    ],
    correctAnswer: "C",
    explanation: "A confirmed non-viable intrauterine pregnancy is managed with either suction curettage or medical management using misoprostol, making C correct. Serial hCG is used for monitoring pregnancies of unknown location or ectopic pregnancy rather than a confirmed non-viable intrauterine pregnancy, methotrexate has no role in an intrauterine pregnancy, and progesterone would only prolong an already failed pregnancy."
  },

  /* ===================== TOPIC 23: Endoscopy in Gynaecology ===================== */
  {
    id: 99,
    topic: "Endoscopy in Gynaecology",
    type: "SBA",
    question: "The procedure most suitable for the investigation of chronic pelvic pain is:",
    options: [
      { id: "A", text: "Cystoscopy" }, { id: "B", text: "Hysteroscopy" }, { id: "C", text: "Hysterosalpingogram" },
      { id: "D", text: "Laparoscopy" }, { id: "E", text: "Hysterectomy" }
    ],
    correctAnswer: "D",
    explanation: "Laparoscopy is the gold-standard investigation for chronic pelvic pain, allowing direct visualisation of the pelvis to diagnose conditions such as endometriosis and adhesions that other imaging modalities miss — making D correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 24: Paediatric & Adolescent Gynaecology ===================== */
  {
    id: 100,
    topic: "Paediatric and Adolescent Gynaecology",
    type: "SBA",
    question: "A 3-year-old is found to have warts in the anogenital area. Which line of enquiry is most useful?",
    options: [
      { id: "A", text: "Assume sexual abuse is not important." }, { id: "B", text: "Ask the child directly about abuse." },
      { id: "C", text: "Ask the mother where the child spends her day." },
      { id: "D", text: "Ask for a history of genital warts during pregnancy or hand warts in caregivers." },
      { id: "E", text: "Proceed straight to HPV genotyping." }
    ],
    correctAnswer: "D",
    explanation: "Anogenital warts in a young child are frequently due to vertical (perinatal) transmission from a mother with genital warts, or non-sexual transmission from a caregiver's hand warts, so establishing this history is a crucial and non-alarming first step before considering abuse — making D correct. Directly interrogating a young child (B) is not appropriate forensic practice, and dismissing abuse outright (A) is unsafe. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 101,
    topic: "Paediatric and Adolescent Gynaecology",
    type: "SBA",
    question: "A blind-ending vagina with cyclical lower abdominal pain is caused by failure of development of which structure?",
    options: [
      { id: "A", text: "Gonadal ridge" },
      { id: "B", text: "Genital tubercle" },
      { id: "C", text: "Müllerian duct" },
      { id: "D", text: "Wolffian duct" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "C",
    explanation: "Failure of Müllerian (paramesonephric) duct development/fusion causes vaginal agenesis or a blind-ending vagina, and if a functioning uterus is still present, obstructed menstrual flow causes cyclical pain (haematometra/haematocolpos) — making C correct."
  },
  {
    id: 102,
    topic: "Paediatric and Adolescent Gynaecology",
    type: "SBA",
    question: "A bulging hymenal membrane with cyclical haematometra is suggestive of:",
    options: [
      { id: "A", text: "Imperforate hymen" },
      { id: "B", text: "Transverse vaginal septum" },
      { id: "C", text: "Vaginal agenesis" },
      { id: "D", text: "Müllerian agenesis (MRKH)" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "A bulging hymenal membrane with cyclical haematometra is the classic presentation of an imperforate hymen, a congenital condition where a solid membrane completely blocks the vaginal opening, trapping menstrual blood behind it — making A correct, as stated directly in the source."
  },

  /* ===================== TOPIC 25: Ethics & Counselling ===================== */
  {
    id: 103,
    topic: "Counselling in Obs and Gynae (+ Ethics)",
    type: "SBA",
    question: "A woman with serious mental illness presents to the labour ward; relatives suggest C/S due to anticipated complications, but she has a documented advance decision refusing surgical procedures. Which ethical principle is most relevant here?",
    options: [
      { id: "A", text: "Autonomy" },
      { id: "B", text: "Non-maleficence" },
      { id: "C", text: "Beneficence" },
      { id: "D", text: "Justice" },
      { id: "E", text: "Normal physiological change" }
    ],
    correctAnswer: "A",
    explanation: "Respecting a patient's previously documented, competently made wishes about her own body — even when relatives disagree — is a direct application of the principle of autonomy, making A correct."
  },
  {
    id: 104,
    topic: "Counselling in Obs and Gynae (+ Ethics)",
    type: "SBA",
    question: "Which of the following is a legal, but not a medical, responsibility of the physician for an alleged sexual assault victim?",
    options: [
      { id: "A", text: "Collection of forensic samples (hair, vaginal swabs) and microscopic examination for motile sperm." },
      { id: "B", text: "Obtaining a complete gynaecological history." },
      { id: "C", text: "Obtaining informed consent from the patient." },
      { id: "D", text: "Offering hormonal prophylaxis to prevent pregnancy." },
      { id: "E", text: "Counselling and emotional support." }
    ],
    correctAnswer: "A",
    explanation: "Forensic evidence collection is a legal/medico-legal task (often performed by a designated forensic examiner) distinct from the ordinary medical duties of history-taking, consent, prophylaxis and counselling that form routine clinical care — making A correct."
  },
  {
    id: 105,
    topic: "Counselling in Obs and Gynae (+ Ethics)",
    type: "SBA",
    question: "A patient is diagnosed with a genetic condition that increases her risk of breast and ovarian cancer but declines to inform her sister, who is also at risk. What is the appropriate next step?",
    options: [
      { id: "A", text: "Respect the patient's autonomy and do not inform her sister." },
      { id: "B", text: "Inform her sister without the patient's consent." },
      { id: "C", text: "Pressure the patient into informing her sister." },
      { id: "D", text: "Provide genetic counselling for the sister without revealing the patient's diagnosis." },
      { id: "E", text: "Take no further action of any kind." }
    ],
    correctAnswer: "A",
    explanation: "Standard bioethical practice is to respect patient confidentiality and autonomy regarding her own diagnosis, while encouraging (not forcing) her to inform at-risk relatives herself, making A the best answer among strict single-best-answer options, even though many real-world guidelines also support offering counselling to at-risk relatives without breaching the index patient's confidentiality."
  },

  /* ===================== TOPIC 26: Recurrent Pregnancy Loss ===================== */
  {
    id: 106,
    topic: "Recurrent Pregnancy Loss: Cervical Incompetence",
    type: "SBA",
    question: "Which statement is most accurate regarding cervical cerclage?",
    options: [
      { id: "A", text: "In a high-risk patient it should be performed as soon as practical after confirming intrauterine pregnancy." },
      { id: "B", text: "It is suitable in any woman with a prior delivery between 20 and 26 weeks." },
      { id: "C", text: "It should be performed using an absorbable suture material." },
      { id: "D", text: "It may be placed using a transvaginal approach." },
      { id: "E", text: "It requires a second anaesthetic procedure for removal when delivery is imminent." }
    ],
    correctAnswer: "D",
    explanation: "Cerclage may be placed by either a transvaginal or (less commonly) transabdominal approach, making D correct. It is reserved for a carefully selected high-risk group (typically ≥3 previous late miscarriages/preterm deliveries) and best performed after 12-14 weeks rather than 'as soon as practical' (A wrong); non-absorbable Mercilene tape is the standard suture material (C wrong); and vaginal sutures are usually removed without regional anaesthesia at term (E wrong)."
  },
  {
    id: 107,
    topic: "Recurrent Pregnancy Loss: Cervical Incompetence",
    type: "SBA",
    question: "Which of the following is the MOST accurate statement about spontaneous miscarriage?",
    options: [
      { id: "A", text: "Most frequently occurs in the 2nd trimester." },
      { id: "B", text: "Chromosomal anomalies are a rare cause." },
      { id: "C", text: "It happens in more than half of all conceptions." },
      { id: "D", text: "Young maternal age is a risk factor." },
      { id: "E", text: "It triples the likelihood of miscarriage in the next pregnancy." }
    ],
    correctAnswer: "C",
    explanation: "A large proportion of all conceptions are lost very early, often before the pregnancy is even clinically recognised, with total loss rates commonly quoted at well over 50% of conceptions — making C the best answer. Most miscarriages occur in the first (not second) trimester (A wrong), chromosomal anomalies are actually the commonest cause, not rare (B wrong), advanced (not young) maternal age is the recognised risk factor (D wrong). (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 27: Prenatal Diagnosis ===================== */
  {
    id: 108,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "A pregnant woman at booking previously delivered at 32 weeks for severe pre-eclampsia. What should be recommended?",
    options: [
      { id: "A", text: "Quadruple test" },
      { id: "B", text: "Anatomy scan" },
      { id: "C", text: "OGTT" },
      { id: "D", text: "FBC" },
      { id: "E", text: "75 mg aspirin" }
    ],
    correctAnswer: "E",
    explanation: "A history of severe pre-eclampsia carries a high risk of recurrence, and low-dose (75-150 mg) aspirin from early pregnancy is the recommended preventive measure — making K correct."
  },
  {
    id: 109,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "A woman's first trimester combined screening shows a 1 in 25 risk of trisomy 21. What is the appropriate next step?",
    options: [
      { id: "A", text: "Quadruple test" },
      { id: "B", text: "Anatomy scan" },
      { id: "C", text: "OGTT" },
      { id: "D", text: "FBC" },
      { id: "E", text: "Refer to fetal medicine unit" }
    ],
    correctAnswer: "E",
    explanation: "A high-risk screening result requires counselling about invasive diagnostic testing (CVS/amniocentesis), which is best coordinated through referral to a fetal medicine unit, making I correct."
  },
  {
    id: 110,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "A woman attends her booking visit having had previous gestational diabetes. What should be arranged?",
    options: [
      { id: "A", text: "Quadruple test" },
      { id: "B", text: "Anatomy scan" },
      { id: "C", text: "OGTT" },
      { id: "D", text: "FBC" },
      { id: "E", text: "Ferritin" }
    ],
    correctAnswer: "C",
    explanation: "A history of previous GDM confers a high risk of recurrence or pre-existing diabetes, warranting an early oral glucose tolerance test (with a repeat at 26-28 weeks if the early test is normal) — making C correct."
  },
  {
    id: 111,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "A woman attends her booking clinic at 18 weeks, having recently discovered she is pregnant, concerned about trisomy 21. What is the best screening option now?",
    options: [
      { id: "A", text: "Quadruple test" },
      { id: "B", text: "Anatomy scan" },
      { id: "C", text: "OGTT" },
      { id: "D", text: "FBC" },
      { id: "E", text: "Ferritin" }
    ],
    correctAnswer: "A",
    explanation: "Having missed the first-trimester combined screening window, the quadruple test is the best available second-trimester screening option for Down's syndrome, making A correct."
  },
  {
    id: 112,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "Which invasive prenatal test is performed under continuous ultrasound guidance?",
    options: [
      { id: "A", text: "Amniocentesis" }, { id: "B", text: "CVS" }, { id: "C", text: "Both amniocentesis and CVS" }, { id: "D", text: "Neither amniocentesis nor CVS" }, { id: "E", text: "Cordocentesis" }
    ],
    correctAnswer: "C",
    explanation: "Both amniocentesis and CVS are performed under continuous ultrasound guidance to reduce the risk of trauma and miscarriage, making C correct."
  },
  {
    id: 113,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "Which test can be performed at 9 weeks' gestation?",
    options: [
      { id: "A", text: "Amniocentesis" }, { id: "B", text: "CVS" }, { id: "C", text: "Both amniocentesis and CVS" }, { id: "D", text: "Neither amniocentesis nor CVS" }, { id: "E", text: "Cordocentesis" }
    ],
    correctAnswer: "D",
    explanation: "At 9 weeks, neither invasive test is performed — the earliest invasive option (CVS) is generally from around 11 weeks, while non-invasive cell-free DNA testing can be used this early instead — making D correct."
  },
  {
    id: 114,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "Which test is used to diagnose spina bifida?",
    options: [
      { id: "A", text: "Amniocentesis" }, { id: "B", text: "CVS" }, { id: "C", text: "Both amniocentesis and CVS" }, { id: "D", text: "Neither amniocentesis nor CVS" }, { id: "E", text: "Cordocentesis" }
    ],
    correctAnswer: "D",
    explanation: "Spina bifida is a structural anomaly diagnosed by detailed ultrasound (the anomaly scan), not by either invasive genetic test — making D correct."
  },
  {
    id: 115,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "Which test is used to diagnose single gene disorders in the fetus?",
    options: [
      { id: "A", text: "Amniocentesis" }, { id: "B", text: "CVS" }, { id: "C", text: "Both amniocentesis and CVS" }, { id: "D", text: "Neither amniocentesis nor CVS" }, { id: "E", text: "Cordocentesis" }
    ],
    correctAnswer: "C",
    explanation: "Fetal DNA obtained from either amniocentesis or CVS can be used to diagnose single gene disorders, making C correct."
  },
  {
    id: 116,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "Which test is used to diagnose fetal anaemia?",
    options: [
      { id: "A", text: "Amniocentesis" }, { id: "B", text: "CVS" }, { id: "C", text: "Both amniocentesis and CVS" }, { id: "D", text: "Neither amniocentesis nor CVS" }, { id: "E", text: "Cordocentesis" }
    ],
    correctAnswer: "E",
    explanation: "Cordocentesis samples fetal blood directly from the umbilical cord, allowing direct assessment of fetal haemoglobin/anaemia, making E correct."
  },
  {
    id: 117,
    topic: "Prenatal Diagnosis",
    type: "EMQ",
    question: "Which test can be performed at 11 weeks' gestation?",
    options: [
      { id: "A", text: "Amniocentesis" }, { id: "B", text: "CVS" }, { id: "C", text: "Both amniocentesis and CVS" }, { id: "D", text: "Neither amniocentesis nor CVS" }, { id: "E", text: "Cordocentesis" }
    ],
    correctAnswer: "B",
    explanation: "CVS can be performed from around 11 weeks' gestation, earlier than amniocentesis (which carries a higher fetal loss and talipes risk if attempted too early) — making B correct."
  },
  {
    id: 118,
    topic: "Prenatal Diagnosis",
    type: "SBA",
    question: "Of the two Down's syndrome screening tests (combined test and quadruple test), which result is associated with a LOW-CHANCE result?",
    options: [
      { id: "A", text: "Beta-hCG levels above average for the gestation." },
      { id: "B", text: "AFP levels above average for the gestation." },
      { id: "C", text: "High maternal age." },
      { id: "D", text: "Nuchal translucency (NT) above average for the gestation." },
      { id: "E", text: "Previous history of Down's syndrome." }
    ],
    correctAnswer: "B",
    explanation: "In a typical Down's syndrome pregnancy, PAPP-A and AFP are reduced while beta-hCG and NT tend to be raised; an AFP level ABOVE average is therefore inconsistent with this pattern and associated with a LOW-chance result, making B correct."
  },

  /* ===================== TOPIC 28: Anaemia / Malaria in Pregnancy ===================== */
  {
    id: 119,
    topic: "Anaemia in Pregnancy / Malaria in Pregnancy",
    type: "SBA",
    question: "What is the treatment of moderate, asymptomatic anaemia in pregnancy?",
    options: [
      { id: "A", text: "Oral iron" },
      { id: "B", text: "Parenteral iron" },
      { id: "C", text: "Blood transfusion" },
      { id: "D", text: "Folic acid alone" },
      { id: "E", text: "Normal physiological change" }
    ],
    correctAnswer: "A",
    explanation: "Oral iron supplementation is first-line for moderate, asymptomatic iron-deficiency anaemia in pregnancy provided the woman can tolerate and absorb it, reserving parenteral iron or transfusion for severe, symptomatic or intolerant cases — making A correct. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 120,
    topic: "Anaemia in Pregnancy / Malaria in Pregnancy",
    type: "SBA",
    question: "Regarding malaria prevention in pregnancy, which of the following is INCORRECT?",
    options: [
      { id: "A", text: "Quinine given from quickening then repeated 4 weeks later, as a preventive regimen." },
      { id: "B", text: "Artesunate given from 20 weeks then repeated 4 weeks later, as a preventive regimen." },
      { id: "C", text: "Sulfadoxine-pyrimethamine given from the 13th week, monthly until delivery." },
      { id: "D", text: "Non-pharmacological prevention includes the use of an insecticide-treated net (ITN)." },
      { id: "E", text: "Sulfadoxine-pyrimethamine given from quickening then repeated 4 weeks later." }
    ],
    correctAnswer: "A",
    explanation: "Quinine and artesunate are treatment drugs for active malaria infection, not chemoprevention agents — describing quinine as a scheduled preventive regimen is incorrect, making A the wrong statement. Intermittent preventive therapy in pregnancy (IPTp) correctly uses sulfadoxine-pyrimethamine from the second trimester onward at monthly intervals (C/E true), alongside non-pharmacological measures like ITNs (D true)."
  },

  /* ===================== TOPIC 29: Blood Transfusion ===================== */
  {
    id: 121,
    topic: "Blood Transfusion and Alternatives in O&G",
    type: "SBA",
    question: "A woman presents with placenta praevia and moderate vaginal bleeding; mother and fetus are stable. What is the best management?",
    options: [
      { id: "A", text: "Admit and manage conservatively." },
      { id: "B", text: "Immediate blood transfusion regardless of haemoglobin." },
      { id: "C", text: "Discharge home with monitoring instructions." },
      { id: "D", text: "Immediate caesarean section." },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "With moderate bleeding but a stable mother and fetus, conservative inpatient management (admission for observation, corticosteroids if preterm, and blood held in reserve) is appropriate, reserving transfusion or delivery for evidence of ongoing significant blood loss or compromise — making A correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 30: Diabetes in Pregnancy ===================== */
  {
    id: 122,
    topic: "Diabetes in Pregnancy",
    type: "SBA",
    question: "According to NICE, which of the following is NOT a risk factor for screening for GDM?",
    options: [
      { id: "A", text: "Previous GDM." },
      { id: "B", text: "Previous macrosomia (≥4.5 kg)." },
      { id: "C", text: "Maternal raised BMI (≥30 kg/m²)." },
      { id: "D", text: "European descent." },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "D",
    explanation: "NICE risk factors for GDM screening include raised BMI, previous GDM, previous macrosomia, and certain higher-risk ethnic groups (South Asian, Black Caribbean, Middle Eastern) — European descent is not a recognised risk factor, making D correct."
  },
  {
    id: 123,
    topic: "Diabetes in Pregnancy",
    type: "SBA",
    question: "Which of the following is the WHO diagnostic criterion for diabetes in pregnancy?",
    options: [
      { id: "A", text: "Fasting blood glucose ≥7 mmol/L (126 mg/dL)." },
      { id: "B", text: "Random blood glucose ≥8.7 mmol/L." },
      { id: "C", text: "A 75g oral glucose tolerance test result alone, with no fasting value required." },
      { id: "D", text: "Absence of diabetic symptoms is required for diagnosis." },
      { id: "E", text: "Normal physiological change" }
    ],
    correctAnswer: "A",
    explanation: "A fasting plasma glucose of ≥7.0 mmol/L (126 mg/dL) meets the WHO diagnostic threshold for overt diabetes, making A correct. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 124,
    topic: "Diabetes in Pregnancy",
    type: "SBA",
    question: "A G4P2+1 woman has an OGTT at 28 weeks: fasting plasma glucose 5.8 mmol/L, 2-hour glucose 7.4 mmol/L. What is the diagnosis?",
    options: [
      { id: "A", text: "Impaired glucose tolerance" }, { id: "B", text: "Gestational diabetes mellitus" }, { id: "C", text: "MODY" }, { id: "D", text: "Normal glycaemic control" }, { id: "E", text: "Type 2 diabetes mellitus" }
    ],
    correctAnswer: "B",
    explanation: "A fasting glucose of 5.8 mmol/L already exceeds the pregnancy-specific IADPSG/WHO threshold for gestational diabetes (≥5.1 mmol/L), making B correct even though the 2-hour value alone would be borderline. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 125,
    topic: "Diabetes in Pregnancy",
    type: "SBA",
    question: "Which of the following is a fetal complication of diabetes occurring in the FIRST trimester?",
    options: [
      { id: "A", text: "Neural tube defects" },
      { id: "B", text: "Polyhydramnios" },
      { id: "C", text: "Macrosomia" },
      { id: "D", text: "Shoulder dystocia" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "First-trimester hyperglycaemia (during organogenesis) is linked to congenital malformations, most notably neural tube defects and cardiac anomalies, making A correct. Macrosomia, polyhydramnios and shoulder dystocia are all later, third-trimester/delivery-related complications of poorly controlled diabetes."
  },
  {
    id: 126,
    topic: "Diabetes in Pregnancy",
    type: "SBA",
    question: "A baby born to a poorly controlled diabetic mother is jittery, lethargic and feeding poorly shortly after birth. What is the most likely diagnosis?",
    options: [
      { id: "A", text: "Birth asphyxia" },
      { id: "B", text: "Hypoglycaemia" },
      { id: "C", text: "Hypocalcaemia" },
      { id: "D", text: "Neonatal sepsis" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "B",
    explanation: "Fetal hyperinsulinaemia (from maternal hyperglycaemia in utero) predisposes the neonate to profound hypoglycaemia once the maternal glucose supply is cut off at birth, producing exactly this jittery, lethargic, poor-feeding picture — making B correct."
  },

  /* ===================== TOPIC 31: Hypertension in Pregnancy ===================== */
  {
    id: 127,
    topic: "Hypertension in Pregnancy — Classification and Management",
    type: "SBA",
    question: "According to NICE, which of the following is NOT a high-risk factor for developing pre-eclampsia?",
    options: [
      { id: "A", text: "Chronic kidney disease." },
      { id: "B", text: "Autoimmune disease (SLE or antiphospholipid syndrome)." },
      { id: "C", text: "Thyroid disease." },
      { id: "D", text: "Chronic hypertension." },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "C",
    explanation: "NICE's high-risk factors for pre-eclampsia include previous hypertensive pregnancy, chronic kidney disease, autoimmune disease, diabetes and chronic hypertension — thyroid disease is not among these recognised risk factors, making C correct."
  },
  {
    id: 128,
    topic: "Hypertension in Pregnancy — Classification and Management",
    type: "SBA",
    question: "Which of the following is NOT useful in the treatment or prevention of pre-eclampsia?",
    options: [
      { id: "A", text: "Hydralazine." }, { id: "B", text: "Aspirin." }, { id: "C", text: "Labetalol." }, { id: "D", text: "Methyldopa." }, { id: "E", text: "Ranitidine." }
    ],
    correctAnswer: "E",
    explanation: "Hydralazine, labetalol and methyldopa are all recognised antihypertensives for pre-eclampsia, and aspirin reduces its risk when started early — ranitidine is an H2-receptor blocker for gastric acid with no role in pre-eclampsia management, making E correct."
  },
  {
    id: 129,
    topic: "Hypertension in Pregnancy — Classification and Management",
    type: "SBA",
    question: "What is the best time to start aspirin for the prevention of pre-eclampsia?",
    options: [
      { id: "A", text: "Before 16 weeks" },
      { id: "B", text: "Before 20 weeks" },
      { id: "C", text: "Before 24 weeks" },
      { id: "D", text: "Before 28 weeks" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "Aspirin is most effective for pre-eclampsia prevention when started before 16 weeks' gestation, as this is before the critical window of abnormal placentation that aspirin is thought to help correct — making A correct."
  },
  {
    id: 130,
    topic: "Hypertension in Pregnancy — Classification and Management",
    type: "SBA",
    question: "A woman at 32 weeks presents with headache, blurred vision, epigastric pain, BP 170/120, proteinuria 3+, and oliguria/anasarca. What is the next line of management?",
    options: [
      { id: "A", text: "Stabilise and deliver, without seizure prophylaxis." },
      { id: "B", text: "Give an antihypertensive alone and deliver." },
      { id: "C", text: "Give magnesium sulphate and deliver." },
      { id: "D", text: "Mature fetal lungs with steroids and delay delivery." },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "C",
    explanation: "This presentation (severe hypertension, heavy proteinuria, impending-eclampsia symptoms of headache/visual disturbance/epigastric pain) mandates magnesium sulphate for seizure prophylaxis alongside blood pressure control and expedited delivery — making C correct; delaying delivery for steroid maturation (D) is unsafe in impending eclampsia."
  },

  /* ===================== TOPIC 32: APH — Placenta Praevia ===================== */
  {
    id: 131,
    topic: "Antepartum Haemorrhage — Placenta Praevia",
    type: "SBA",
    question: "A 33-year-old woman with known major placenta praevia, at 36 weeks, has sudden painless heavy vaginal bleeding. BP 90/60, HR 110. Fetal monitoring is normal. What is the most appropriate management?",
    options: [
      { id: "A", text: "Repeat antenatal corticosteroids, as the previous course would not be effective." },
      { id: "B", text: "Administer tocolysis to help stop the bleeding and prolong pregnancy." },
      { id: "C", text: "Deliver by emergency caesarean section, involving senior obstetric and anaesthetic staff." },
      { id: "D", text: "Commence blood transfusion and consider delivery only if vital signs do not improve." },
      { id: "E", text: "Perform a speculum examination to find the cause of bleeding." }
    ],
    correctAnswer: "C",
    explanation: "Heavy bleeding with tachycardia and a falling blood pressure in the context of major placenta praevia is an obstetric emergency requiring immediate delivery by caesarean section, ideally led by senior staff given the high risk of intraoperative haemorrhage — making C correct."
  },
  {
    id: 132,
    topic: "Antepartum Haemorrhage — Placenta Praevia",
    type: "SBA",
    question: "Which of the following is a contraindication to induction of labour (IOL)?",
    options: [
      { id: "A", text: "Pre-eclampsia." }, { id: "B", text: "Placenta praevia." }, { id: "C", text: "Intrauterine fetal death." },
      { id: "D", text: "Previous caesarean section delivery." }, { id: "E", text: "Fetal growth restriction." }
    ],
    correctAnswer: "B",
    explanation: "Vaginal delivery cannot safely be achieved with placenta praevia obstructing the birth canal, making IOL absolutely contraindicated in this situation — hence B is correct."
  },

  /* ===================== TOPIC 33: Haemoglobinopathies ===================== */
  {
    id: 133,
    topic: "Haemoglobinopathies (Sickle Cell Disease in Pregnancy)",
    type: "SBA",
    question: "A woman with known Sickle Cell Trait attends antenatal clinic. Which antenatal complication is significantly more common compared to an uncomplicated pregnancy?",
    options: [
      { id: "A", text: "Chest infection" }, { id: "B", text: "Intrauterine growth restriction" }, { id: "C", text: "Major postpartum haemorrhage" },
      { id: "D", text: "Placental abruption" }, { id: "E", text: "Urinary tract infection" }
    ],
    correctAnswer: "E",
    explanation: "Sickle cell trait (as distinct from sickle cell disease) is specifically associated with an increased risk of asymptomatic bacteriuria and urinary tract infection in pregnancy, thought to relate to sickling in the relatively hypoxic renal medulla — making E correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 34: Foetal Surveillance ===================== */
  {
    id: 134,
    topic: "Foetal Surveillance — Antepartum and Intrapartum",
    type: "SBA",
    question: "Which of the following is NOT used as an indicator of fetal wellbeing beyond 24 weeks of pregnancy?",
    options: [
      { id: "A", text: "CTG." }, { id: "B", text: "Fetal lie." }, { id: "C", text: "Fetal movements." },
      { id: "D", text: "Fetal breathing movements (FBMs)." }, { id: "E", text: "Umbilical artery Dopplers." }
    ],
    correctAnswer: "B",
    explanation: "Fetal lie describes the orientation of the fetus in the uterus and has no bearing on fetal oxygenation or wellbeing, unlike CTG, fetal movements, breathing movements and Doppler studies, which all reflect fetal condition — making B correct."
  },
  {
    id: 135,
    topic: "Foetal Surveillance — Antepartum and Intrapartum",
    type: "EMQ",
    question: "A woman with previous severe pre-eclampsia at 22 weeks (normal anomaly scan) is concerned about recurrence. Which investigation is most appropriate?",
    options: [
      { id: "A", text: "Transvaginal cervical length measurement" },
      { id: "B", text: "Ultrasound assessment of fetal growth" },
      { id: "C", text: "Middle cerebral artery Doppler examination" },
      { id: "D", text: "Uterine artery Doppler examination" },
      { id: "E", text: "CTG" }
    ],
    correctAnswer: "D",
    explanation: "Uterine artery Doppler assesses placental resistance and can help estimate the risk of recurrent pre-eclampsia/FGR in a woman with a prior severe episode, making D correct."
  },
  {
    id: 136,
    topic: "Foetal Surveillance — Antepartum and Intrapartum",
    type: "EMQ",
    question: "A woman at 16 weeks spontaneously delivered her last pregnancy at 26 weeks. What is the most appropriate surveillance now?",
    options: [
      { id: "A", text: "Transvaginal cervical length measurement" },
      { id: "B", text: "Ultrasound assessment of fetal growth" },
      { id: "C", text: "Middle cerebral artery Doppler examination" },
      { id: "D", text: "Uterine artery Doppler examination" },
      { id: "E", text: "CTG" }
    ],
    correctAnswer: "A",
    explanation: "A prior spontaneous very preterm birth warrants serial transvaginal cervical length surveillance to identify shortening early, so that interventions like progesterone or cerclage can be offered to reduce recurrent preterm birth risk — making A correct."
  },
  {
    id: 137,
    topic: "Foetal Surveillance — Antepartum and Intrapartum",
    type: "EMQ",
    question: "A woman at 28 weeks has been exposed to parvovirus and the baby is hydropic. Which investigation is most useful?",
    options: [
      { id: "A", text: "Transvaginal cervical length measurement" },
      { id: "B", text: "Ultrasound assessment of fetal growth" },
      { id: "C", text: "Middle cerebral artery Doppler examination" },
      { id: "D", text: "Uterine artery Doppler examination" },
      { id: "E", text: "CTG" }
    ],
    correctAnswer: "C",
    explanation: "A hydropic fetus following parvovirus exposure is likely to be anaemic, and middle cerebral artery peak systolic velocity is the recognised non-invasive screening tool for fetal anaemia, making C correct."
  },
  {
    id: 138,
    topic: "Foetal Surveillance — Antepartum and Intrapartum",
    type: "EMQ",
    question: "A woman at 36 weeks has a symphysis-fundal height of 32 cm. What is the most appropriate next investigation?",
    options: [
      { id: "A", text: "Transvaginal cervical length measurement" },
      { id: "B", text: "Ultrasound assessment of fetal growth" },
      { id: "C", text: "Middle cerebral artery Doppler examination" },
      { id: "D", text: "Uterine artery Doppler examination" },
      { id: "E", text: "CTG" }
    ],
    correctAnswer: "B",
    explanation: "A symphysis-fundal height lagging significantly behind gestational age should prompt formal ultrasound assessment of fetal growth, which is far more accurate than tape-measure estimation, making B correct."
  },
  {
    id: 139,
    topic: "Foetal Surveillance — Antepartum and Intrapartum",
    type: "EMQ",
    question: "A woman at 34 weeks has an EFW on the 5th centile and presents a week later with reduced fetal movements. What is the most appropriate immediate investigation?",
    options: [
      { id: "A", text: "Transvaginal cervical length measurement" },
      { id: "B", text: "Ultrasound assessment of fetal growth" },
      { id: "C", text: "Middle cerebral artery Doppler examination" },
      { id: "D", text: "Uterine artery Doppler examination" },
      { id: "E", text: "CTG" }
    ],
    correctAnswer: "E",
    explanation: "Reduced fetal movements require immediate assessment of current fetal wellbeing, and CTG gives the fastest, most direct read on this — making E correct, especially against a background of known growth restriction."
  },
  {
    id: 140,
    topic: "Foetal Surveillance — Antepartum and Intrapartum",
    type: "SBA",
    question: "In fetal monitoring, what is the most important parameter when interpreting a CTG?",
    options: [
      { id: "A", text: "Baseline fetal heart rate" },
      { id: "B", text: "Baseline variability" },
      { id: "C", text: "Frequency of uterine contractions" },
      { id: "D", text: "Accelerations" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "B",
    explanation: "Baseline variability is the single most predictive CTG feature of fetal wellbeing/acidosis — a normal, variable trace is strongly reassuring, while reduced variability is one of the earliest and most concerning signs of fetal compromise, making B correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 35: Prolonged Pregnancy / IOL ===================== */
  {
    id: 141,
    topic: "Prolonged Pregnancy; Induction and Augmentation of Labour",
    type: "SBA",
    question: "A 32-year-old woman (second pregnancy) is admitted at 39+2 weeks with regular contractions, cervix 4cm, membranes intact, wanting a natural birth, with normal intermittent auscultation. Two hours later she is 6cm. What is the appropriate plan of care?",
    options: [
      { id: "A", text: "Artificial rupture of membranes (ARM)." }, { id: "B", text: "Caesarean section." },
      { id: "C", text: "Continue current management." }, { id: "D", text: "Commence continuous CTG." }, { id: "E", text: "Start intravenous antibiotics." }
    ],
    correctAnswer: "C",
    explanation: "Progressing at roughly 1cm/hour with a normal fetal heart trace and no wish for intervention represents entirely normal labour progress, so no active intervention is indicated — making C correct."
  },

  /* ===================== TOPIC 36: Hyperemesis Gravidarum ===================== */
  {
    id: 142,
    topic: "Vomiting in Pregnancy (Hyperemesis Gravidarum)",
    type: "SBA",
    question: "What is the first-line drug for nausea and vomiting in pregnancy in a typical low-resource environment?",
    options: [
      { id: "A", text: "Metoclopramide" },
      { id: "B", text: "Ondansetron" },
      { id: "C", text: "Prednisolone" },
      { id: "D", text: "Pyridoxine" },
      { id: "E", text: "Normal physiological change" }
    ],
    correctAnswer: "A",
    explanation: "Metoclopramide (or promethazine) is widely available and commonly used as a first-line antiemetic for nausea/vomiting in pregnancy in many resource-limited settings, making A correct, while ondansetron and steroids are reserved for refractory hyperemesis. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 37: Cardiovascular Adjustments ===================== */
  {
    id: 143,
    topic: "Cardiovascular Adjustments in Pregnancy",
    type: "SBA",
    question: "Which of the following is NOT a normal cardiovascular change in pregnancy?",
    options: [
      { id: "A", text: "Increased peripheral vascular resistance." }, { id: "B", text: "Increased cardiac output." },
      { id: "C", text: "Palpitations." }, { id: "D", text: "Decreased mean arterial pressure (mid-pregnancy)." }, { id: "E", text: "Increased pulse rate." }
    ],
    correctAnswer: "A",
    explanation: "Normal pregnancy is characterised by a FALL, not a rise, in systemic vascular resistance due to progesterone-mediated vasodilation, which also explains the mid-pregnancy dip in blood pressure — making 'increased peripheral resistance' the false statement/'except', hence A is correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 38: Metabolic Changes ===================== */
  {
    id: 144,
    topic: "Metabolic Changes in Pregnancy",
    type: "SBA",
    question: "Which of the following best summarises the metabolic changes in pregnancy?",
    options: [
      { id: "A", text: "Fetal growth is indirectly dependent on maternally derived nutrients." },
      { id: "B", text: "Metabolic adjustments are necessary to ensure provision of essential metabolites for fetal growth and development." },
      { id: "C", text: "Glucose is the alternative energy source for fetal growth." },
      { id: "D", text: "Pregnancy is a hypolipidaemic and glycogenic state." },
      { id: "E", text: "Maternal fasting has a negative impact on fetal nutrition." }
    ],
    correctAnswer: "B",
    explanation: "Pregnancy involves wide-ranging maternal metabolic adaptations (relative insulin resistance, increased lipolysis, enhanced nutrient transfer) whose overarching purpose is to guarantee an adequate supply of metabolites to the growing fetus — making B the best summary statement. Glucose is the primary (not merely 'alternative') fetal fuel (C wrong), and pregnancy is actually a hyperlipidaemic, not hypolipidaemic, state ('accelerated starvation') (D wrong). (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 145,
    topic: "Metabolic Changes in Pregnancy",
    type: "SBA",
    question: "Which of the following is reduced in normal pregnancy?",
    options: [
      { id: "A", text: "Fibrinogen" },
      { id: "B", text: "Neutrophils" },
      { id: "C", text: "Platelets" },
      { id: "D", text: "ESR" },
      { id: "E", text: "Normal physiological change" }
    ],
    correctAnswer: "C",
    explanation: "A mild, dilutional physiological fall in platelet count is a recognised normal change in pregnancy, whereas fibrinogen, neutrophils and ESR all typically rise — making C correct. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 39: Immunological Aspects ===================== */
  {
    id: 146,
    topic: "Immunological Aspects of Pregnancy",
    type: "SBA",
    question: "Regarding HIV, all of the following are true EXCEPT:",
    options: [
      { id: "A", text: "It is a single-stranded, enveloped RNA virus." },
      { id: "B", text: "It is one of the human retroviruses and is a DNA virus." },
      { id: "C", text: "Around 80% of paediatric AIDS is due to vertical transmission from mother to child." },
      { id: "D", text: "Seropositive women are more predisposed to spontaneous miscarriage." },
      { id: "E", text: "CD4 levels are useful to monitor treatment and can be measured every trimester." }
    ],
    correctAnswer: "B",
    explanation: "HIV is an RNA retrovirus, not a DNA virus — describing it as 'a DNA virus' is internally contradictory and factually wrong, making B the correct 'except'. The other statements (single-stranded RNA envelope, majority paediatric transmission being vertical, increased miscarriage risk in seropositive women, and trimester-wise CD4 monitoring) are all accurate. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 40: Labour Physiology ===================== */
  {
    id: 147,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "After the fetal head delivers through the vulva, it immediately aligns itself with the shoulders. What is this called?",
    options: [
      { id: "A", text: "Descent" },
      { id: "B", text: "Extension" },
      { id: "C", text: "Engagement" },
      { id: "D", text: "Flexion" },
      { id: "E", text: "Restitution" }
    ],
    correctAnswer: "E",
    explanation: "This realignment of the fetal head with the shoulders immediately after delivery of the head is termed restitution, making F correct."
  },
  {
    id: 148,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "The occiput escapes from underneath the symphysis pubis, which acts as a fulcrum. What is this called?",
    options: [
      { id: "A", text: "Descent" },
      { id: "B", text: "Extension" },
      { id: "C", text: "Engagement" },
      { id: "D", text: "Flexion" },
      { id: "E", text: "External rotation" }
    ],
    correctAnswer: "B",
    explanation: "As the occiput pivots beneath the symphysis pubis (acting as a fulcrum) allowing the head to extend and deliver, this mechanism is called extension, making B correct."
  },
  {
    id: 149,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "The anterior shoulder lies inferior to the symphysis pubis and delivers first, then the posterior shoulder delivers subsequently. What is this called?",
    options: [
      { id: "A", text: "Descent" },
      { id: "B", text: "Extension" },
      { id: "C", text: "Engagement" },
      { id: "D", text: "Flexion" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "E",
    explanation: "This description covers the mechanism of shoulder delivery, which is not itself one of the named mechanisms of head delivery listed among the options, making 'none of the above' (H) correct."
  },
  {
    id: 150,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "What is the terminology for when the widest part of the presenting part has successfully passed through the pelvic inlet?",
    options: [
      { id: "A", text: "Descent" },
      { id: "B", text: "Extension" },
      { id: "C", text: "Engagement" },
      { id: "D", text: "Flexion" },
      { id: "E", text: "External rotation" }
    ],
    correctAnswer: "C",
    explanation: "Engagement is specifically defined as the passage of the widest transverse diameter of the presenting part through the pelvic inlet, making C correct."
  },
  {
    id: 151,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "Which stage of labour should be considered abnormal if it lasts more than 30 minutes?",
    options: [
      { id: "A", text: "Latent phase" },
      { id: "B", text: "Third stage" },
      { id: "C", text: "Transition" },
      { id: "D", text: "Passive descent" },
      { id: "E", text: "Braxton Hicks" }
    ],
    correctAnswer: "B",
    explanation: "The third stage of labour (delivery of the placenta) is conventionally considered abnormal/prolonged if it exceeds 30 minutes with active management (or up to 60 minutes if managed physiologically), making B correct."
  },
  {
    id: 152,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "During which process does the cervix shorten in length until it becomes included in the lower segment of the uterus?",
    options: [
      { id: "A", text: "Latent phase" },
      { id: "B", text: "Third stage" },
      { id: "C", text: "Transition" },
      { id: "D", text: "Passive descent" },
      { id: "E", text: "Effacement" }
    ],
    correctAnswer: "E",
    explanation: "Effacement is the process by which the cervix progressively shortens and thins until it is drawn up into the lower uterine segment, making F correct."
  },
  {
    id: 153,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "Which stage of labour should conventionally last no longer than 2 hours in a primiparous woman?",
    options: [
      { id: "A", text: "Latent phase" },
      { id: "B", text: "Third stage" },
      { id: "C", text: "Transition" },
      { id: "D", text: "Passive descent" },
      { id: "E", text: "Active second stage of labour" }
    ],
    correctAnswer: "E",
    explanation: "The active second stage of labour (from full dilatation with active pushing to delivery) should conventionally last no more than 2 hours in a primiparous woman (1 hour in a multiparous woman), making G correct."
  },
  {
    id: 154,
    topic: "Theories of Labour, Physiology and Conduct of Labour; Labour Care Guide",
    type: "EMQ",
    question: "What is the time period between the onset of labour and 3-4cm cervical dilatation called?",
    options: [
      { id: "A", text: "Latent phase" },
      { id: "B", text: "Third stage" },
      { id: "C", text: "Transition" },
      { id: "D", text: "Passive descent" },
      { id: "E", text: "Braxton Hicks" }
    ],
    correctAnswer: "A",
    explanation: "The latent phase of labour spans the onset of regular contractions to around 3-4cm dilatation, and is notably variable in length, making A correct."
  },

  /* ===================== TOPIC 41: Caesarean Section ===================== */
  {
    id: 155,
    topic: "Operative Deliveries 1: Caesarean Section",
    type: "EMQ",
    question: "A 40-year-old with a previous emergency caesarean section 4 years ago for fetal distress, with a neonatal death from meconium aspiration, is now booking. What is the most appropriate plan for this pregnancy?",
    options: [
      { id: "A", text: "Emergency caesarean section in the second stage of labour" }, { id: "B", text: "Emergency caesarean section for failure to progress" },
      { id: "C", text: "Emergency caesarean section for fetal distress" }, { id: "D", text: "Caesarean hysterectomy" }, { id: "E", text: "Elective repeat caesarean section" }
    ],
    correctAnswer: "E",
    explanation: "Given the previous neonatal death from a labour-related complication, an elective repeat caesarean section is the safest planned approach for this pregnancy, making E correct."
  },
  {
    id: 156,
    topic: "Operative Deliveries 1: Caesarean Section",
    type: "EMQ",
    question: "A woman has fetal bradycardia after pushing for 40 minutes; a ventouse delivery is commenced but the cup comes off. What is the appropriate next step?",
    options: [
      { id: "A", text: "Emergency caesarean section in the second stage of labour" }, { id: "B", text: "Emergency caesarean section for failure to progress" },
      { id: "C", text: "Emergency caesarean section for fetal distress" }, { id: "D", text: "Caesarean hysterectomy" }, { id: "E", text: "Elective repeat caesarean section" }
    ],
    correctAnswer: "A",
    explanation: "A failed instrumental delivery in the second stage with fetal bradycardia requires emergency caesarean section in the second stage of labour, making A correct."
  },
  {
    id: 157,
    topic: "Operative Deliveries 1: Caesarean Section",
    type: "EMQ",
    question: "A woman in spontaneous labour has good progress to 8cm dilatation, then no further progress over the next 4 hours. What is the appropriate management?",
    options: [
      { id: "A", text: "Emergency caesarean section in the second stage of labour" }, { id: "B", text: "Emergency caesarean section for failure to progress" },
      { id: "C", text: "Emergency caesarean section for fetal distress" }, { id: "D", text: "Caesarean hysterectomy" }, { id: "E", text: "Elective repeat caesarean section" }
    ],
    correctAnswer: "B",
    explanation: "Arrest of cervical dilatation in the first stage of labour despite adequate time is managed as failure to progress, requiring emergency caesarean section, making B correct."
  },
  {
    id: 158,
    topic: "Operative Deliveries 1: Caesarean Section",
    type: "EMQ",
    question: "A woman with all previous babies delivered by caesarean section and known placenta praevia has major antepartum haemorrhage followed by uncontrolled massive haemorrhage during delivery. What is the appropriate management?",
    options: [
      { id: "A", text: "Emergency caesarean section in the second stage of labour" }, { id: "B", text: "Emergency caesarean section for failure to progress" },
      { id: "C", text: "Emergency caesarean section for fetal distress" }, { id: "D", text: "Caesarean hysterectomy" }, { id: "E", text: "Elective repeat caesarean section" }
    ],
    correctAnswer: "D",
    explanation: "Life-threatening, uncontrolled haemorrhage from placenta praevia/accreta in a multiply-scarred uterus that fails to respond to conservative measures requires caesarean hysterectomy to save the mother's life, making D correct."
  },
  {
    id: 159,
    topic: "Operative Deliveries 1: Caesarean Section",
    type: "EMQ",
    question: "A woman in her first pregnancy at 42 weeks, undergoing induction of labour, has meconium-stained liquor and variable decelerations of the fetal heart with the cervix only 1cm dilated. What is the appropriate management?",
    options: [
      { id: "A", text: "Emergency caesarean section in the second stage of labour" }, { id: "B", text: "Emergency caesarean section for failure to progress" },
      { id: "C", text: "Emergency caesarean section for fetal distress" }, { id: "D", text: "Caesarean hysterectomy" }, { id: "E", text: "Elective repeat caesarean section" }
    ],
    correctAnswer: "C",
    explanation: "Meconium-stained liquor with variable decelerations early in the first stage of labour indicates fetal distress requiring emergency caesarean section, making C correct."
  },

  /* ===================== TOPIC 42: Abnormal Lie ===================== */
  {
    id: 160,
    topic: "Abnormal Lie, Positions and Presentations; Cord Prolapse",
    type: "SBA",
    question: "Regarding transverse lie and labour, which of the following is INCORRECT?",
    options: [
      { id: "A", text: "Leiomyoma is a cause." },
      { id: "B", text: "Induction of labour is a contraindication." },
      { id: "C", text: "External cephalic version can be done with ruptured membranes by an expert." },
      { id: "D", text: "Placenta praevia must be ruled out." },
      { id: "E", text: "Normal physiological change" }
    ],
    correctAnswer: "C",
    explanation: "External cephalic version requires intact membranes to allow safe manipulation of the fetus with an adequate cushion of amniotic fluid — it is contraindicated once membranes have ruptured, making C the incorrect (false) statement here. Fibroids (A) and placenta praevia (D) are recognised causes/associations of transverse lie that must be considered, and IOL is indeed contraindicated in an uncorrected transverse lie because of the risk of cord prolapse and obstruction (B true)."
  },

  /* ===================== TOPIC 43: Multifetal Pregnancy ===================== */
  {
    id: 161,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "SBA",
    question: "Which of the following pregnancy complications does NOT increase in incidence in multiple pregnancy?",
    options: [
      { id: "A", text: "Pre-eclampsia." }, { id: "B", text: "Obstetric cholestasis." }, { id: "C", text: "Preterm delivery." },
      { id: "D", text: "Macrosomia." }, { id: "E", text: "Fetal growth restriction." }
    ],
    correctAnswer: "D",
    explanation: "Multiple pregnancy increases the risk of pre-eclampsia, cholestasis, preterm delivery and growth restriction (from relative placental insufficiency) but, because babies must share finite uterine space and placental resources, macrosomia is actually LESS common than in singleton pregnancies — making D correct."
  },
  {
    id: 162,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "SBA",
    question: "Which of the following is NOT a recognised Quintero stage for twin-to-twin transfusion syndrome (TTTS)?",
    options: [
      { id: "A", text: "Oligo/polyhydramnios sequence with the donor's bladder visible and normal Dopplers in both twins." },
      { id: "B", text: "Growth restriction in both twins, raised MCA Dopplers, and reduced fetal movements in both twins." },
      { id: "C", text: "Oligo/polyhydramnios sequence, non-visualised donor bladder, and abnormal Dopplers (absent/reversed end-diastolic flow, reversed a-wave, or pulsatile umbilical vein flow)." },
      { id: "D", text: "One or both fetuses have died." },
      { id: "E", text: "One or both fetuses show signs of hydrops." }
    ],
    correctAnswer: "B",
    explanation: "The Quintero staging system runs: Stage I (donor bladder visible, normal Dopplers — as in A), Stage II (donor bladder not visible, normal Dopplers), Stage III (abnormal Dopplers — as in C), Stage IV (hydrops — as in E) and Stage V (fetal death — as in D). Option B, describing bilateral growth restriction with raised MCA Dopplers, does not correspond to any Quintero stage, making B the correct answer to 'which is NOT a Quintero stage'."
  },
  {
    id: 163,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "EMQ",
    question: "A woman at 18 weeks with MCDA twins has twin 1's DVP <2cm (bladder not visualisable) and twin 2's DVP 10cm. What is the appropriate management?",
    options: [
      { id: "A", text: "External cephalic version" },
      { id: "B", text: "Emergency caesarean section" },
      { id: "C", text: "Internal podalic version" },
      { id: "D", text: "Allow spontaneous delivery" },
      { id: "E", text: "Refer for tertiary referral opinion" }
    ],
    correctAnswer: "E",
    explanation: "These findings suggest early-stage TTTS, which needs specialist confirmation and staging, making referral to a tertiary fetal medicine unit (H) the appropriate immediate step, ahead of a more specific intervention like laser ablation."
  },
  {
    id: 164,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "EMQ",
    question: "A woman at 20 weeks with MCMA twins at booking asks about timing and mode of delivery, hoping for a vaginal delivery. What should be recommended?",
    options: [
      { id: "A", text: "External cephalic version" },
      { id: "B", text: "Emergency caesarean section" },
      { id: "C", text: "Internal podalic version" },
      { id: "D", text: "Allow spontaneous delivery" },
      { id: "E", text: "Elective caesarean section at 32-34 weeks" }
    ],
    correctAnswer: "E",
    explanation: "Monoamniotic twins carry a high risk of cord entanglement, so elective caesarean section is recommended, typically around 32-34 weeks after a course of corticosteroids, making F correct — vaginal delivery is not advised in MCMA twins."
  },
  {
    id: 165,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "EMQ",
    question: "At 37 weeks with DCDA twins, twin 1 delivers cephalic; twin 2 remains cephalic but high in the pelvis with intact membranes and decelerations on CTG. What is the appropriate management?",
    options: [
      { id: "A", text: "External cephalic version" },
      { id: "B", text: "Emergency caesarean section" },
      { id: "C", text: "Internal podalic version" },
      { id: "D", text: "Allow spontaneous delivery" },
      { id: "E", text: "Start oxytocin infusion" }
    ],
    correctAnswer: "C",
    explanation: "With an unpredictably high head and fetal distress on CTG, internal podalic version (turning the fetus to a breech presentation to deliver it) followed by breech extraction and amniotomy is the classic option chosen for delivering a compromised second twin, making C correct over emergency caesarean given the urgency of decelerations."
  },
  {
    id: 166,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "EMQ",
    question: "A woman with a twin pregnancy presents contracting every 15 minutes, with a long closed cervix and a reassuring fetal heart trace. What is the appropriate management?",
    options: [
      { id: "A", text: "External cephalic version" },
      { id: "B", text: "Emergency caesarean section" },
      { id: "C", text: "Internal podalic version" },
      { id: "D", text: "Allow spontaneous delivery" },
      { id: "E", text: "Administer corticosteroid injection" }
    ],
    correctAnswer: "E",
    explanation: "A twin pregnancy contracting with a still-closed cervix carries a real risk of preterm labour, so it is reasonable to give antenatal corticosteroids proactively to accelerate fetal lung maturity in case delivery does progress — making G correct."
  },
  {
    id: 167,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "SBA",
    question: "A 30-year-old woman at 24 weeks with MCDA twins is diagnosed with stage 2 TTTS. What is the appropriate management?",
    options: [
      { id: "A", text: "Immediate delivery" }, { id: "B", text: "Selective feticide of the donor twin" },
      { id: "C", text: "Selective feticide of the recipient twin" }, { id: "D", text: "Laser photocoagulation of anastomoses" }, { id: "E", text: "Serial amnioreduction" }
    ],
    correctAnswer: "D",
    explanation: "Fetoscopic laser photocoagulation of the placental vascular anastomoses is the standard treatment for stage II (and higher) TTTS at a gestation like 24 weeks, addressing the underlying vascular cause rather than just its consequences — making D correct."
  },
  {
    id: 168,
    topic: "Multifetal Pregnancies; Twin Delivery; Retained Second Twin",
    type: "SBA",
    question: "Regarding multifetal gestation, which of the following is TRUE?",
    options: [
      { id: "A", text: "Most twin gestations are monochorionic diamniotic." },
      { id: "B", text: "All monozygotic twins are monoamniotic dichorionic." },
      { id: "C", text: "The prevalence of monozygotic twinning is relatively constant worldwide." },
      { id: "D", text: "Dichorionic twins arise when 2 eggs are fertilised by a single sperm." },
      { id: "E", text: "Monochorionic twins arise when one egg is fertilised by two sperm." }
    ],
    correctAnswer: "C",
    explanation: "The rate of monozygotic (identical) twinning is a well-known epidemiological fact that stays fairly constant worldwide (roughly 1 in 250 pregnancies), unlike the dizygotic twinning rate, which varies markedly with maternal age, ethnicity and fertility treatment — making C correct. Most twins overall are dichorionic diamniotic (usually dizygotic), not monochorionic (A wrong); monozygotic twins can be dichorionic, monochorionic diamniotic, or monoamniotic depending on the timing of splitting (B wrong); and dichorionic/monochorionic status depends on when a single fertilised zygote splits, not on how many sperm fertilise an egg (D and E are biologically incorrect). (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 44: Preterm Labour / PROM ===================== */
  {
    id: 169,
    topic: "Preterm Labour; PROM",
    type: "EMQ",
    question: "Which risk factor for preterm labour is primarily due to uterine overdistension?",
    options: [
      { id: "A", text: "Smoking" },
      { id: "B", text: "Uterine abnormality" },
      { id: "C", text: "Appendicitis" },
      { id: "D", text: "Parity >5" },
      { id: "E", text: "Multiple pregnancy" }
    ],
    correctAnswer: "E",
    explanation: "Multiple pregnancy stretches the uterus well beyond its usual singleton capacity, and this overdistension is a principal mechanical trigger for preterm labour, making K correct."
  },
  {
    id: 170,
    topic: "Preterm Labour; PROM",
    type: "EMQ",
    question: "Which risk factor for preterm labour is linked to recurrent episodes of threatened miscarriage early in pregnancy?",
    options: [
      { id: "A", text: "Smoking" },
      { id: "B", text: "Uterine abnormality" },
      { id: "C", text: "Appendicitis" },
      { id: "D", text: "Parity >5" },
      { id: "E", text: "Intrauterine bleeding" }
    ],
    correctAnswer: "E",
    explanation: "Recurrent early bleeding (e.g. subchorionic haemorrhage) irritates the uterus and is linked to episodes of pain and threatened miscarriage, and is associated with an increased risk of later preterm labour, making F correct."
  },
  {
    id: 171,
    topic: "Preterm Labour; PROM",
    type: "EMQ",
    question: "Which risk factor for preterm labour may require surgery during pregnancy, itself carrying a risk of preterm labour?",
    options: [
      { id: "A", text: "Smoking" },
      { id: "B", text: "Uterine abnormality" },
      { id: "C", text: "Appendicitis" },
      { id: "D", text: "Parity >5" },
      { id: "E", text: "Previous preterm delivery" }
    ],
    correctAnswer: "C",
    explanation: "Appendicitis in pregnancy may require appendicectomy, which — while relatively safe overall — carries a recognised increased risk of triggering preterm labour, making C correct."
  },
  {
    id: 172,
    topic: "Preterm Labour; PROM",
    type: "EMQ",
    question: "Which risk factor for preterm labour is modifiable, for which help and advice can be given in antenatal clinic?",
    options: [
      { id: "A", text: "Smoking" },
      { id: "B", text: "Uterine abnormality" },
      { id: "C", text: "Appendicitis" },
      { id: "D", text: "Parity >5" },
      { id: "E", text: "Previous preterm delivery" }
    ],
    correctAnswer: "A",
    explanation: "Smoking is the only genuinely modifiable risk factor in this list, and antenatal clinics can offer smoking cessation support to directly reduce preterm labour risk, making A correct."
  },
  {
    id: 173,
    topic: "Preterm Labour; PROM",
    type: "SBA",
    question: "Which is the single strongest risk factor for preterm prelabour rupture of membranes (PPROM)?",
    options: [
      { id: "A", text: "Polyhydramnios" }, { id: "B", text: "Previous history of PPROM" }, { id: "C", text: "Malaria in pregnancy" },
      { id: "D", text: "Obesity" }, { id: "E", text: "Chorioamnionitis" }
    ],
    correctAnswer: "B",
    explanation: "A previous history of PPROM carries the strongest, most consistently quoted recurrence risk for a future PPROM, making B the single best answer among these options, even though polyhydramnios, infection and other factors also contribute. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 45: Instrumental Delivery ===================== */
  {
    id: 174,
    topic: "Operative Deliveries 2: Instrumental Delivery and Embryotomy",
    type: "SBA",
    question: "A midwife identifies perineal trauma involving the vagina and perineal muscles, but not the anal sphincter, following a spontaneous vaginal delivery. How should this tear be classified?",
    options: [
      { id: "A", text: "First-degree tear." }, { id: "B", text: "Episiotomy." }, { id: "C", text: "Third-degree tear." },
      { id: "D", text: "Fourth-degree tear." }, { id: "E", text: "Second-degree tear." }
    ],
    correctAnswer: "E",
    explanation: "Injury involving the vaginal mucosa and perineal muscles, but sparing the anal sphincter complex, is by definition a second-degree tear, making E correct. First-degree involves skin only, third-degree involves the anal sphincter, and fourth-degree extends into the rectal mucosa."
  },
  {
    id: 175,
    topic: "Operative Deliveries 2: Instrumental Delivery and Embryotomy",
    type: "SBA",
    question: "Which of the following is NOT an essential safety criterion prior to attempting an operative vaginal delivery (OVD)?",
    options: [
      { id: "A", text: "The bladder should be empty." }, { id: "B", text: "The head must be palpable in the abdomen." },
      { id: "C", text: "The cervix must be fully dilated." }, { id: "D", text: "The position of the fetal head must be known." },
      { id: "E", text: "The fetal head must be at or below the level of the ischial spines." }
    ],
    correctAnswer: "B",
    explanation: "If the head is still palpable per abdomen, it has not sufficiently engaged in the pelvis, and this is in fact an absolute CONTRAINDICATION to OVD rather than a required safety criterion — making B the correct answer to 'which is NOT essential'."
  },
  {
    id: 176,
    topic: "Operative Deliveries 2: Instrumental Delivery and Embryotomy",
    type: "SBA",
    question: "Which of the following destructive procedures can be performed on a live baby?",
    options: [
      { id: "A", text: "Cleidotomy" },
      { id: "B", text: "Craniotomy" },
      { id: "C", text: "Spondylectomy" },
      { id: "D", text: "Evisceration" },
      { id: "E", text: "None of the above" }
    ],
    correctAnswer: "A",
    explanation: "Cleidotomy (deliberate fracture of the fetal clavicle) is used to reduce shoulder width in severe shoulder dystocia and, unlike the other destructive procedures listed, is compatible with delivering a live infant — making A correct. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 177,
    topic: "Operative Deliveries 2: Instrumental Delivery and Embryotomy",
    type: "SBA",
    question: "The following are contraindicated for forceps delivery, EXCEPT:",
    options: [
      { id: "A", text: "Patient's refusal" }, { id: "B", text: "Inexperienced accoucheur" }, { id: "C", text: "Ruptured membranes" },
      { id: "D", text: "Cephalopelvic disproportion" }, { id: "E", text: "Cervix not fully dilated" }
    ],
    correctAnswer: "C",
    explanation: "Ruptured membranes are in fact a PREREQUISITE for forceps delivery (part of the standard 'FORCEPS' safety checklist), not a contraindication — making C the correct 'except'. Patient refusal, an inexperienced operator, cephalopelvic disproportion and an incompletely dilated cervix are all genuine contraindications."
  },

  /* ===================== TOPIC 46: PPH ===================== */
  {
    id: 178,
    topic: "Prevention and Treatment of PPH; Oxytocics in 3rd Stage",
    type: "EMQ",
    question: "You are called to a woman who delivered vaginally 12 minutes ago, bleeding moderately with a boggy, poorly contracted uterus. What is the FIRST step in managing uterine atony?",
    options: [
      { id: "A", text: "5-10 units IV/IM oxytocin" },
      { id: "B", text: "Carboprost 0.25mg IM every 15 min (max 8 doses; contraindicated in asthma)" },
      { id: "C", text: "Hysterectomy" },
      { id: "D", text: "Repeat ergometrine (500mcg) IM/slow IV" },
      { id: "E", text: "Uterine massage" }
    ],
    correctAnswer: "E",
    explanation: "The commonest cause of primary PPH is uterine atony, and bimanual/abdominal uterine massage ('rubbing up the fundus') is the immediate first mechanical step, often working well alongside pharmacological measures — making H correct."
  },
  {
    id: 179,
    topic: "Prevention and Treatment of PPH; Oxytocics in 3rd Stage",
    type: "EMQ",
    question: "Despite uterine massage the patient continues to bleed, having already received 5-10 units IV/IM oxytocin. What medication should be given next?",
    options: [
      { id: "A", text: "5-10 units IV/IM oxytocin" },
      { id: "B", text: "Carboprost 0.25mg IM every 15 min (max 8 doses; contraindicated in asthma)" },
      { id: "C", text: "Hysterectomy" },
      { id: "D", text: "Repeat ergometrine (500mcg) IM/slow IV" },
      { id: "E", text: "Syntometrine (ergometrine 500mcg + oxytocin 5 units)" }
    ],
    correctAnswer: "E",
    explanation: "The next pharmacological step after first-line oxytocin is a second-line uterotonic such as syntometrine (provided there is no hypertension, given its ergometrine component), making G correct."
  },
  {
    id: 180,
    topic: "Prevention and Treatment of PPH; Oxytocics in 3rd Stage",
    type: "EMQ",
    question: "While rubbing up uterine contraction you notice a palpable bladder; urine was last passed 2 hours ago. What is the next management step?",
    options: [
      { id: "A", text: "5-10 units IV/IM oxytocin" },
      { id: "B", text: "Carboprost 0.25mg IM every 15 min (max 8 doses; contraindicated in asthma)" },
      { id: "C", text: "Hysterectomy" },
      { id: "D", text: "Repeat ergometrine (500mcg) IM/slow IV" },
      { id: "E", text: "Indwelling catheter" }
    ],
    correctAnswer: "E",
    explanation: "A full bladder mechanically prevents the uterus from contracting effectively and is a reversible contributor to atony, so it should be emptied via an indwelling catheter, making K correct."
  },
  {
    id: 181,
    topic: "Prevention and Treatment of PPH; Oxytocics in 3rd Stage",
    type: "EMQ",
    question: "At the end of a caesarean section, clots are expressed and the uterus remains poorly contracted despite already being on 40 units oxytocin in 100ml over 4 hours; the patient is also hypertensive. What is the next pharmacological option?",
    options: [
      { id: "A", text: "5-10 units IV/IM oxytocin" },
      { id: "B", text: "Carboprost 0.25mg IM every 15 min (max 8 doses; contraindicated in asthma)" },
      { id: "C", text: "Hysterectomy" },
      { id: "D", text: "Repeat ergometrine (500mcg) IM/slow IV" },
      { id: "E", text: "800-1000mcg rectal misoprostol" }
    ],
    correctAnswer: "E",
    explanation: "Since ergometrine-containing drugs (like syntometrine or repeat ergometrine) are contraindicated in a hypertensive patient, rectal misoprostol is the appropriate next-line uterotonic that avoids this risk, making I correct."
  },

  /* ===================== TOPIC 47: Pharmacology in Obstetrics ===================== */
  {
    id: 182,
    topic: "Pharmacology in Obstetrics",
    type: "EMQ",
    question: "Which drug is an example of an ACE inhibitor, usually contraindicated in pregnancy?",
    options: [
      { id: "A", text: "Nifedipine" },
      { id: "B", text: "Lamotrigine" },
      { id: "C", text: "Propylthiouracil" },
      { id: "D", text: "Ramipril" },
      { id: "E", text: "Methyldopa" }
    ],
    correctAnswer: "D",
    explanation: "Ramipril is an ACE inhibitor, and this drug class is contraindicated in pregnancy because of fetotoxic effects (particularly on fetal renal development), making D correct."
  },
  {
    id: 183,
    topic: "Pharmacology in Obstetrics",
    type: "EMQ",
    question: "Which drug is an example of an antiepileptic drug commonly prescribed in pregnancy?",
    options: [
      { id: "A", text: "Nifedipine" },
      { id: "B", text: "Lamotrigine" },
      { id: "C", text: "Propylthiouracil" },
      { id: "D", text: "Ramipril" },
      { id: "E", text: "Methyldopa" }
    ],
    correctAnswer: "B",
    explanation: "Lamotrigine is one of the antiepileptic drugs with a relatively favourable safety profile in pregnancy and is commonly continued/prescribed for epilepsy management during pregnancy, making B correct."
  },
  {
    id: 184,
    topic: "Pharmacology in Obstetrics",
    type: "EMQ",
    question: "Which antihypertensive medication acts as a calcium-channel blocker?",
    options: [
      { id: "A", text: "Nifedipine" },
      { id: "B", text: "Lamotrigine" },
      { id: "C", text: "Propylthiouracil" },
      { id: "D", text: "Ramipril" },
      { id: "E", text: "Methyldopa" }
    ],
    correctAnswer: "A",
    explanation: "Nifedipine is a calcium-channel blocker commonly used as an antihypertensive in pregnancy, making A correct."
  },
  {
    id: 185,
    topic: "Pharmacology in Obstetrics",
    type: "EMQ",
    question: "Which drug is used for the treatment of asthma, usually as an inhaler?",
    options: [
      { id: "A", text: "Nifedipine" },
      { id: "B", text: "Lamotrigine" },
      { id: "C", text: "Propylthiouracil" },
      { id: "D", text: "Ramipril" },
      { id: "E", text: "Salbutamol" }
    ],
    correctAnswer: "E",
    explanation: "Salbutamol is a short-acting beta-agonist bronchodilator delivered by inhaler and is safe to continue for asthma control in pregnancy, making F correct."
  },
  {
    id: 186,
    topic: "Pharmacology in Obstetrics",
    type: "SBA",
    question: "Warfarin is contraindicated in pregnancy. Which of the following abnormalities is commonly associated with warfarin use in the first trimester?",
    options: [
      { id: "A", text: "Claw hand." }, { id: "B", text: "Dextrocardia." }, { id: "C", text: "Nasal hypoplasia." },
      { id: "D", text: "Neural tube defect." }, { id: "E", text: "Renal agenesis." }
    ],
    correctAnswer: "C",
    explanation: "Nasal hypoplasia (along with stippled epiphyses) is a well-recognised teratogenic feature of first-trimester warfarin exposure ('fetal warfarin syndrome'), making C correct."
  },
  {
    id: 187,
    topic: "Pharmacology in Obstetrics",
    type: "SBA",
    question: "Administration of which drug in the first trimester is typically associated with neural tube defects?",
    options: [
      { id: "A", text: "Enalapril." }, { id: "B", text: "Lithium." }, { id: "C", text: "Nitrofurantoin." },
      { id: "D", text: "Sodium valproate." }, { id: "E", text: "Warfarin." }
    ],
    correctAnswer: "D",
    explanation: "Sodium valproate carries a particularly high risk of neural tube defects when taken in the first trimester, a risk reduced (but not eliminated) by high-dose folic acid supplementation, making D correct."
  },

  /* ===================== TOPIC 48: Puerperium ===================== */
  {
    id: 188,
    topic: "Physiology of the Puerperium, including Lactation and Puerperal Morbidity",
    type: "SBA",
    question: "Poor attachment of the baby to the mother's breast is associated with all of the following EXCEPT:",
    options: [
      { id: "A", text: "Fissure of the nipple" }, { id: "B", text: "Breast engorgement" }, { id: "C", text: "Increased suckling reflex by the baby" },
      { id: "D", text: "Poor weight gain" }, { id: "E", text: "Decreased milk production" }
    ],
    correctAnswer: "C",
    explanation: "Poor attachment causes ineffective, not increased, suckling — the baby struggles to extract milk efficiently, which leads to nipple trauma, engorgement, reduced milk removal/production, and poor weight gain — making 'increased suckling reflex' (C) the correct 'except'. (Source unanswered — resolved by clinical reasoning.)"
  },

  /* ===================== TOPIC 49: Perinatal Mental Health ===================== */
  {
    id: 189,
    topic: "Perinatal Mental Health",
    type: "SBA",
    question: "Which perinatal mental health disorder is considered a psychiatric emergency?",
    options: [
      { id: "A", text: "Postpartum blues" },
      { id: "B", text: "Anxiety" },
      { id: "C", text: "Depression" },
      { id: "D", text: "Postpartum psychosis" },
      { id: "E", text: "Barrier methods only" }
    ],
    correctAnswer: "D",
    explanation: "Postpartum psychosis carries a risk of harm to mother and/or baby and can deteriorate rapidly, making it the classic obstetric/psychiatric emergency requiring urgent specialist assessment — unlike the 'blues', which is transient and self-limiting, or straightforward anxiety/depression, which are managed less urgently. (Source unanswered — resolved by clinical reasoning.)"
  },
  {
    id: 190,
    topic: "Perinatal Mental Health",
    type: "SBA",
    question: "A woman 2 weeks postpartum presents with confusion, delusions and hallucinations affecting her ability to care for her infant. What is the diagnosis?",
    options: [
      { id: "A", text: "Baby blues" }, { id: "B", text: "Puerperal psychosis" }, { id: "C", text: "Severe pre-eclampsia" }, { id: "D", text: "Severe sepsis" }, { id: "E", text: "Substance abuse" }
    ],
    correctAnswer: "B",
    explanation: "Confusion with delusions and hallucinations in the early postpartum period is the classic presentation of puerperal (postpartum) psychosis, a psychiatric emergency, making B correct."
  },

  /* ===================== TOPIC 50: Neonatal Jaundice ===================== */
  {
    id: 191,
    topic: "Neonatal Jaundice",
    type: "SBA",
    question: "A term male baby, 3.6kg, no maternal antibodies, had bilirubin of 320µmol/L 8 hours ago prompting blue-light phototherapy. Repeat bilirubin is now 330µmol/L. What treatment is required?",
    options: [
      { id: "A", text: "Continue phototherapy with blue or green light." }, { id: "B", text: "Start phototherapy with ultraviolet light." },
      { id: "C", text: "Organize exchange transfusion." }, { id: "D", text: "Administer immunoglobulin." }, { id: "E", text: "Place the baby on the window sill." }
    ],
    correctAnswer: "A",
    explanation: "Blue/green light phototherapy is the correct ongoing treatment as the bilirubin has not risen into the exchange transfusion range and the trend is only modestly upward — making A correct. UV light is never used clinically, immunoglobulin is only relevant for alloimmune haemolytic disease, and exposing a baby on a window sill is not an accepted or safe treatment."
  },

  /* ===================== TOPIC 51: Neonatal Resuscitation ===================== */
  {
    id: 192,
    topic: "Neonatal Resuscitation",
    type: "SBA",
    question: "A male baby born at 37 weeks is 2 minutes old, floppy and blue, with a heart rate of 80bpm. What is the first step to help him?",
    options: [
      { id: "A", text: "External cardiac massage." }, { id: "B", text: "Airway positioning: 'sniffing the morning air'." },
      { id: "C", text: "Put him in a plastic bag." }, { id: "D", text: "Position the airway in a neutral position." }, { id: "E", text: "Intubate." }
    ],
    correctAnswer: "D",
    explanation: "Neonatal airway anatomy requires a neutral head position (unlike the adult 'sniffing' position) to open the airway effectively, making D correct as the very first step. Chest compressions are reserved for a heart rate below 60 despite adequate ventilation, plastic bags are used to prevent heat loss in preterm infants, and intubation is reserved for cases where simpler measures fail."
  },
  {
    id: 193,
    topic: "Neonatal Resuscitation",
    type: "SBA",
    question: "A female baby born at 38 weeks (3.4kg) is 6 hours old with no risk factors. What is the appropriate approach to assessment of her blood glucose?",
    options: [
      { id: "A", text: "Prefeed blood glucose measurement." }, { id: "B", text: "Postfeed blood glucose measurement." },
      { id: "C", text: "No routine assessment of blood glucose." }, { id: "D", text: "Pre- and postfeed measurement." }, { id: "E", text: "Random measurement." }
    ],
    correctAnswer: "C",
    explanation: "In the absence of risk factors for neonatal hypoglycaemia (e.g. maternal diabetes, growth restriction, prematurity), routine blood glucose screening is not required, since a well, feeding baby can use alternative energy substrates — making C correct."
  },
  {
    id: 194,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing for surgery for congenital diaphragmatic hernia?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "When stable" }
    ],
    correctAnswer: "E",
    explanation: "Surgical repair of congenital diaphragmatic hernia is delayed until the infant's respiratory and circulatory status is stabilised, rather than performed emergently at birth, making H correct."
  },
  {
    id: 195,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing for cardiac catheterisation in transposition of the great arteries with no interatrial or interventricular blood flow?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "Within 12 hours" }
    ],
    correctAnswer: "E",
    explanation: "Without any mixing of oxygenated and deoxygenated blood, these babies become profoundly and rapidly hypoxic, requiring urgent balloon atrial septostomy within about 12 hours, making E correct."
  },
  {
    id: 196,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing for surgery for cleft palate?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "Between 6-12 months" }
    ],
    correctAnswer: "E",
    explanation: "Cleft palate repair is generally delayed until around 6-12 months of age to achieve the best surgical and speech outcomes, with feeding supported by special equipment in the meantime, making K correct."
  },
  {
    id: 197,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing for preventing hypothermia in a preterm baby using a plastic bag?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "Within 12 hours" }
    ],
    correctAnswer: "A",
    explanation: "Extremely preterm babies lose heat very rapidly, so they are placed in a plastic bag immediately at birth (without drying) to conserve heat, making A correct."
  },
  {
    id: 198,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing for airway repositioning if the baby is in poor condition after birth?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "Within 12 hours" }
    ],
    correctAnswer: "B",
    explanation: "The neonatal resuscitation algorithm requires reassessment and repositioning of the airway within the first minutes if a baby is not responding as expected, making 'within 5 minutes' (B) correct."
  },
  {
    id: 199,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing for surgery for hypospadias?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "Between 6-12 months" }
    ],
    correctAnswer: "E",
    explanation: "Hypospadias repair is typically delayed to around 6-12 months of age for the best surgical outcome, and circumcision is avoided beforehand because the foreskin may be needed for the repair, making K correct."
  },
  {
    id: 200,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing for surgery for necrotising enterocolitis (NEC)?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "When stable" }
    ],
    correctAnswer: "E",
    explanation: "Even critically ill infants with NEC requiring laparotomy need to be medically stabilised (fluids, ventilation, correction of coagulopathy) as far as possible before proceeding to surgery, making H correct."
  },
  {
    id: 201,
    topic: "Neonatal Resuscitation",
    type: "EMQ",
    question: "What is the appropriate timing to start ganciclovir for congenital CMV infection?",
    options: [
      { id: "A", text: "At birth" },
      { id: "B", text: "Within 5 minutes" },
      { id: "C", text: "Within 1 hour" },
      { id: "D", text: "Within 6 hours" },
      { id: "E", text: "Within 24 hours" }
    ],
    correctAnswer: "E",
    explanation: "Ganciclovir treatment for symptomatic congenital CMV is started promptly, within 24 hours of diagnosis, to give the best chance of limiting hearing and neurodevelopmental sequelae, making F correct."
  },

  /* ===================== TOPIC 52: Safe Motherhood ===================== */
  {
    id: 202,
    topic: "Safe Motherhood and Maternal Mortality Reduction in Nigeria; SDGs",
    type: "SBA",
    question: "Regarding perinatal mortality, which of the following is TRUE?",
    options: [
      { id: "A", text: "It is defined purely as the death of a neonate and stillbirth within the first month after delivery." },
      { id: "B", text: "Antepartum haemorrhage is not a common cause." },
      { id: "C", text: "Low birth weight is not a cause." },
      { id: "D", text: "Teenage pregnancy is not a cause." },
      { id: "E", text: "Antenatal counselling is effective in helping to prevent it." }
    ],
    correctAnswer: "E",
    explanation: "Good antenatal care and counselling (recognising danger signs, encouraging skilled birth attendance, managing risk factors) is a genuinely effective strategy for reducing perinatal mortality, making E the safest and most defensible true statement. Antepartum haemorrhage, low birth weight and teenage pregnancy are all recognised, common contributors to perinatal mortality, making B, C and D false, and the definition in A more precisely describes 'perinatal mortality' as stillbirths plus early neonatal deaths within the first week, not the first month. (Source unanswered — resolved by clinical reasoning.)"
  }
];
