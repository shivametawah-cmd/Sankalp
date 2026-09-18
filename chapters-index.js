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
  =====================================================================
*/

var STATIC_CHAPTERS = [
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
  }

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
