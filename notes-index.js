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
  // ---- Example (isko copy karke apni asli notes ke hisaab se badal do) ----
  // { title: "Chapter 1: Introduction to Computer — Notes", course: "CCC", type: "PDF", file: "notes/ccc-chapter1-notes.pdf" },
  // { title: "Chapter 2: Computer Hardware — Notes",        course: "CCC", type: "PDF", file: "notes/ccc-chapter2-notes.pdf" },
];
