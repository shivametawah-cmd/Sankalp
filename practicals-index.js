// =====================================================================
//  SANKALP COMPUTER CLASSES — Practicals Index
//  =====================================================================
//  Ye file dashboard.html ke "My Practicals" section ko data deti hai —
//  bilkul notes-index.js jaisa hi tareeka.
//
//  NAYA PRACTICAL ADD KARNE KE 2 STEPS:
//   1) PDF file repo ke "practicals" folder me daal do
//      (jaise: practicals/ccc-practical-1.pdf)
//   2) Neeche list me ek entry add kar do (pichli entry ke baad comma , lagana):
//        title  -> jo naam dashboard pe dikhega
//        course -> EXACTLY wahi jo student ke record me hai (CCC, ADCA, Tally...)
//        type   -> chhota label, jaise "PDF" ya "Practical"
//        file   -> repo ke andar PDF ka path
//
//  Batch-wise chhupana ho to shivam.html -> Batch access -> "Practicals" column
//  me untick karke Save karo. Kuch bhi untick na ho to sab batches ko dikhega.
//
//  NOTE: file PDF hi honi chahiye (dashboard isse seedha page-by-page dikhata
//  hai, download nahi hone deta).
// =====================================================================

window.STATIC_PRACTICALS = [
  // ---- Example (isko copy karke apne asli practicals ke hisaab se badlo) ----
  // { title: "Practical 1: MS Word Basics", course: "CCC", type: "PDF", file: "practicals/ccc-practical-1.pdf" },
  { title: "Practical 2: MS Excel Home Tab", course: "ADCA", type: "PDF", file: "practicals/adca-excel-1.pdf" },
];
