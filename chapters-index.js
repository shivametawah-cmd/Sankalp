/*
  SANKALP COMPUTER CLASSES — Chapter Quiz Index
  =====================================================================
  Ye file un sabhi "standalone" chapter-quiz HTML pages ki ek simple list
  hai (jaise ccc-chapter1-mcq.html, ccc-chapter2-mcq.html). mcq-quiz.html
  ye list yahin se padhta hai — is file ke alawa kahin aur kuch edit
  karne ki zaroorat nahi.

  NAYA QUIZ ADD KARNE KA TARIKA (2 STEPS):
  ---------------------------------------------------------------------
  1) Nayi quiz HTML file banao (koi bhi existing chapter file jaise
     ccc-chapter1-mcq.html ko copy karke apne naye chapter ka data
     usme daal do — ya mujhse (Claude) bana lo, bas MCQs bhej do).

  2) Neeche STATIC_CHAPTERS array mein ek naya { ... } block add karo —
     bas copy-paste karke values badlo. Fields ka matlab:

       id            → koi bhi unique short code, e.g. 'ccc-ch3'
                        (leaderboard isi id se save hoti hai, isliye
                        ek baar set karne ke baad ise mat badalna)
       course        → dropdown filter mein group karne ke liye,
                        e.g. 'CCC', 'ADCA', 'Tally'
       chapter       → chapter ka poora naam (English)
       chapterHi     → chapter ka naam (Hindi)
       questionCount → us quiz mein kitne questions hain (sirf badge
                        par number dikhane ke liye, koi logic nahi)
       url           → us chapter ki html file ka naam

  Bas itna hi — file save karo, upload karo, mcq-quiz.html ki list mein
  naya chapter apne aap dikhne lagega. Koi aur code kahin nahi badalna.

  NOTE (fix log): pehle is file mein "var STATIC_CHAPTERS = [...]" likha
  tha. mcq-quiz.html mein bhi alag se "const STATIC_CHAPTERS = ..." hai,
  aur ek hi naam var + const dono se declare hone par browser error deta
  hai ("Identifier has already been declared"), jisse poora quiz page
  crash ho jaata tha. Isliye ab neeche "window.STATIC_CHAPTERS" use kiya
  gaya hai — isse sirf window object par property set hoti hai, koi naya
  global identifier declare nahi hota, aur conflict nahi hota.
  =====================================================================
*/

window.STATIC_CHAPTERS = [
  {
    id: 'ccc-ch1',
    course: 'CCC',
    chapter: 'Chapter 1: Introduction to Computer',
    chapterHi: 'अध्याय 1: कंप्यूटर का परिचय',
    questionCount: 50,
    url: 'ccc-chapter1-mcq.html'
  },
  {
    id: 'ccc-ch2',
    course: 'CCC',
    chapter: 'Chapter 2: Introduction to Operating System',
    chapterHi: 'अध्याय 2: ऑपरेटिंग सिस्टम का परिचय',
    questionCount: 50,
    url: 'ccc-chapter2-mcq.html'
  },
  {
    id: 'mso-word',
    course: 'Microsoft Office',
    chapter: 'MS Word',
    chapterHi: 'एमएस वर्ड',
    questionCount: 50,
    url: 'msword-mcq.html'
  },
  {
    id: 'ccc-ch3',
    course: 'CCC',
    chapter: 'Chapter 3: Word Processing',
    chapterHi: 'अध्याय 3: वर्ड प्रोसेसिंग',
    questionCount: 50,
    url: 'ccc-chapter3-mcq.html'
  },
{
    id: 'ccc-ch4',
    course: 'CCC',
    chapter: 'Chapter 4: Spreadsheet',
    chapterHi: 'अध्याय 4: स्प्रेडशीट',
    questionCount: 50,
    url: 'ccc-chapter4-mcq.html'
  },
  {
    id: 'adca-ch1',
    course: 'ADCA',
    chapter: 'Chapter 1: Fundamentals of computer-Basic',
    chapterHi: 'अध्याय 1: कंप्यूटर की मूलभूत अवधारणाएँ-बेसिक',
    questionCount: 20,
    url: 'adca-chapter1-basic-mcq.html'
  },
    {
    id: 'adca-ch1',
    course: 'ADCA',
    chapter: 'Chapter 1: Fundamentals of computer-Intermediate',
    chapterHi: 'अध्याय 1: कंप्यूटर की मूलभूत अवधारणाएँ-इंटरमीडिएट',
    questionCount: 20,
    url: 'adca-chapter1-intermediate-mcq.html'
  },
      {
    id: 'adca-ch1',
    course: 'ADCA',
    chapter: 'Chapter 1: Fundamentals of computer-Hard',
    chapterHi: 'अध्याय 1: कंप्यूटर की मूलभूत अवधारणाएँ-हार्ड',
    questionCount: 20,
    url: 'adca-chapter1-hard-mcq.html'
  },
     {
    id: 'ccc-ch5',
    course: 'CCC',
    chapter: 'Chapter 5: Introduction to Presentation',
    chapterHi: 'अध्याय 5: प्रेजेंटेशन का परिचय',
    questionCount: 50,
    url: 'ccc-chapter5-mcq.html'
  },
  // 👇 Naya chapter yahan neeche add karo, upar wale jaisa hi ek block
  // copy-paste karke. Pichle block ke baad comma (,) lagana mat bhoolna.
  //
  // ,{
  //   id: 'ccc-ch3',
  //   course: 'CCC',
  //   chapter: 'Chapter 3: ...',
  //   chapterHi: 'अध्याय 3: ...',
  //   questionCount: 50,
  //   url: 'ccc-chapter3-mcq.html'
  // }
];
