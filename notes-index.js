// =====================================================================
//  SANKALP COMPUTER CLASSES — Notes Index
//  =====================================================================
//  Ye file dashboard.html ke "My Notes" section ko data deti hai —
//  bilkul chapters-index.js jaisa hi tareeka (jo MCQ chapters list
//  karta hai).
//
//  NAYI NOTE ADD KARNE KE 2 STEPS:
//   1) PDF file is repo ke "notes" folder me daal do
//      (jaise: notes/ccc-chapter1-notes.pdf)
//   2) Neeche list me ek entry add kar do — bas 4 cheezein:
//        title  → jo naam dashboard pe dikhega
//        course → EXACTLY wahi jo student ke record me hai
//                 (jaise "CCC", "Tally", "MS Word" — jaisa bhi
//                 aapke Google Sheet me course field me likha hai)
//        type   → chhota label, jaise "PDF" ya "Notes"
//        file   → repo ke andar PDF ka path (upar wale folder ke hisaab se)
//
//  Bas itna karne se wo note turant us course ke sabhi students ke
//  dashboard pe "📖 Read Notes" ke saath dikhne lagega — koi aur
//  jagah kuch badalne ki zaroorat nahi.
//
//  NOTE: file PDF hi honi chahiye (dashboard isse seedha andar
//  page-by-page dikhata hai, download nahi hone deta).
// =====================================================================

window.STATIC_NOTES = [
  { title: "Chapter 1: Introduction to Computer — Notes", course: "CCC", type: "PDF", file: "notes/chapter-1.pdf" },
  { title: "Chapter 1: Introduction to Computer — Notes", course: "ADCA", type: "PDF", file: "notes/chapter-1.pdf" },
  { title: "Chapter 2: Operating System— Notes", course: "CCC", type: "PDF", file: "notes/chapter-2.pdf" },
  { title: "Chapter 2: Operating System — Notes", course: "ADCA", type: "PDF", file: "notes/chapter-2.pdf" },
  { title: "Chapter 3: Word Processing — Notes", course: "CCC", type: "PDF", file: "notes/chapter-3.pdf" },
  { title: "Chapter 4: Spread Sheet — Notes", course: "CCC", type: "PDF", file: "notes/chapter-4.pdf" },
  { title: "Chapter 5: Presentation — Notes", course: "CCC", type: "PDF", file: "notes/chapter-5.pdf" },
  { title: "Chapter 6: Introduction to Internet and WWW — Notes", course: "CCC", type: "PDF", file: "notes/chapter-6.pdf" },
  { title: "Chapter 7: Email, Social Networking and E governance services — Notes", course: "CCC", type: "PDF", file: "notes/chapter-7.pdf" },
  { title: "Chapter 8: Digita Financial tools and applications — Notes", course: "CCC", type: "PDF", file: "notes/chapter-8.pdf" },
  { title: "Chapter 9: Overview of Cyber Security— Notes", course: "CCC", type: "PDF", file: "notes/chapter-9.pdf" },
  { title: "Chapter 10: Overview of Future Skills and Artificial Intelligence — Notes", course: "CCC", type: "PDF", file: "notes/chapter-10.pdf" },
  // ---- Example (isko copy karke apni asli notes ke hisaab se badal do) ----
  // { title: "Chapter 1: Introduction to Computer — Notes", course: "CCC", type: "PDF", file: "notes/ccc-chapter1-notes.pdf" },
  // { title: "Chapter 2: Computer Hardware — Notes",        course: "CCC", type: "PDF", file: "notes/ccc-chapter2-notes.pdf" },
];
