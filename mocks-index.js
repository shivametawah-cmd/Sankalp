/*
  SANKALP COMPUTER CLASSES — Full-Length Mock Test Index
  =====================================================================
  Ye file un sabhi "full-length mock test" HTML pages ki list hai
  (jaise ccc-mock-test-1.html, ccc-mock-test-2.html). Isi list se:
    - index.html          (home page par "Mock Tests" section)
    - mock-tests.html     (sabhi mocks ka hub page)
    - dashboard.html      (student ke course/batch ke mocks)
    - shivam.html         (admin: batch-wise mock allocate karna)
  ... sabhi padhte hain. Is file ke alawa kahin aur kuch edit karne ki
  zaroorat nahi.

  NAYA MOCK ADD KARNE KA TARIKA:
  ---------------------------------------------------------------------
  1) Nayi mock HTML file banao (ccc-mock-test-1.html ki copy ya mujhse
     (Claude) bana lo).
  2) Neeche STATIC_MOCKS mein ek naya { ... } block copy-paste karo.
       id            → unique code, e.g. 'ccc-mock3'
                       (leaderboard / score history isi id se save hoti
                       hai aur batch-access bhi isi se hota hai, isliye
                       ek baar set karke ise mat badalna)
       course        → 'CCC', 'ADCA', 'Tally' ... (jis course ke student
                       ko dikhana hai — dashboard isi se filter karta hai)
       chapter       → mock ka naam (English)
       chapterHi     → mock ka naam (Hindi)
       questionCount → total questions (sirf badge ke liye)
       duration      → minutes mein time limit (sirf badge ke liye)
       url           → html file ka naam
  Pichle block ke baad comma (,) lagana mat bhoolna.

  NOTE: "chapterId" / "chapter" naam isliye rakha hai taaki dashboard aur
  shivam.html ka puraana score-history code mocks ko bhi pehchaan sake.
  Yahan "window.STATIC_MOCKS" use hua hai (var/const nahi) taaki kisi aur
  file ke saath "already declared" error na aaye.
  =====================================================================
*/

window.STATIC_MOCKS = [
  {
    id: 'ccc-mock1',
    course: 'CCC',
    chapter: 'CCC Mock Test 1: Full Length (NIELIT Pattern)',
    chapterHi: 'CCC मॉक टेस्ट 1: पूर्ण-लंबाई (NIELIT पैटर्न)',
    questionCount: 100,
    duration: 90,
    url: 'ccc-mock-test-1.html'
  },
  {
    id: 'ccc-mock2',
    course: 'CCC',
    chapter: 'CCC Mock Test 2: Full Length (NIELIT Pattern)',
    chapterHi: 'CCC मॉक टेस्ट 2: पूर्ण-लंबाई (NIELIT पैटर्न)',
    questionCount: 100,
    duration: 90,
    url: 'ccc-mock-test-2.html'
  }

  // 👇 Naya mock yahan add karo (upar wale block ke baad comma lagakar):
  // ,{
  //   id: 'ccc-mock3',
  //   course: 'CCC',
  //   chapter: 'CCC Mock Test 3: Full Length (NIELIT Pattern)',
  //   chapterHi: 'CCC मॉक टेस्ट 3: ...',
  //   questionCount: 100,
  //   duration: 90,
  //   url: 'ccc-mock-test-3.html'
  // }
];
