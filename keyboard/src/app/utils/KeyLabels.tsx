type Mode = "normal" | "visual" | "insert";

export interface KeyAction {
  [key: string]: {
    [mode in Mode]?: string;
  };
}

const GlobalMotions = {};

export const NormalModeKeyLabels: KeyAction = {
  // Movement - Basic
  h: { normal: "Move cursor left" },
  j: { normal: "Move cursor down" },
  k: { normal: "Move cursor up" },
  l: { normal: "Move cursor right" },

  // Movement - Words
  w: { normal: "Jump forward to start of a word" },
  W: { normal: "Jump forward to start of word (punctuation included)" },
  e: { normal: "Jump forward to the end of a word" },
  E: { normal: "Jump forward to the end of a word (punctuation included)" },
  b: { normal: "Jump backward to the start of a word" },
  B: { normal: "Jump backward to the start of a word (punctuation included)" },
  ge: { normal: "Jump backward to the end of a word" },
  gE: { normal: "Jump backward to the end of a word (punctuation included)" },

  // Movement - Text Objects
  iw: { normal: "Inner word (select the current word)" }, // Consider using 'visual' mode
  aw: { normal: "A word (select the current word including whitespace)" },
  ip: { normal: "Inner paragraph (select the current paragraph)" },
  ap: {
    normal: "A paragraph (select the current paragraph including whitespace)",
  },

  // Movement - Lines
  0: { normal: "Jump to the start of the line" },
  "^": { normal: "Jump to the first non-blank character of the line" },
  $: { normal: "Jump to the end of the line" },
  g_: { normal: "Jump to the last non-blank character of the line" },

  // Movement - Screen & Document
  gg: { normal: "Go to the first line of the document" },
  G: { normal: "Go to the last line of the document" },
  H: { normal: "Move to the top of the screen" }, // Or consider 'screen' property
  M: { normal: "Move to the middle of the screen" },
  L: { normal: "Move to the bottom of the screen" },
  zz: { normal: "Center cursor on screen" },
  zt: { normal: "Position cursor at the top of the screen" },
  zb: { normal: "Position cursor at the bottom of the screen" },

  // Movement - Other
  gj: { normal: "Move cursor down (multi-line text)" },
  gk: { normal: "Move cursor up (multi-line text)" },
  "%": { normal: "Move cursor to matching character (, ), {, }, [, ]" },
  gd: { normal: "Move to local declaration" },
  gD: { normal: "Move to global declaration" },

  // Movement - Searching
  fx: { normal: "Jump to next occurrence of character x" },
  // ... add more search commands

  // Movement - Paragraphs/Blocks
  "}": { normal: "Jump to next paragraph (or function/block)" },
  "{": { normal: "Jump to previous paragraph (or function/block)" },

  // Editing - Deleting
  x: { normal: "Delete character under cursor" },
  d: { normal: "Delete (flexible, see with motions/text objects)" },
  dd: { normal: "Delete entire line" },
  // ... add more editing commands
};

export const VisualModeKeyLabels: KeyAction = {
  // Entering Visual Modes (you'll need to add these based on your setup)
  v: { visual: "Enter Visual mode (character-wise selection)" },
  V: { visual: "Enter Visual Line mode (line-wise selection)" },
  "Control + v": { visual: "Enter Visual Block mode (column selection)" },

  // Navigation in Visual Mode
  h: { visual: "Expand selection left" },
  j: { visual: "Expand selection down" },
  k: { visual: "Expand selection up" },
  l: { visual: "Expand selection right" },
  w: { visual: "Expand selection to start of next word" },
  W: {
    visual: "Expand selection to start of next word (punctuation included)",
  },
  b: { visual: "Expand selection to start of previous word" },
  B: {
    visual: "Expand selection to start of previous word (punctuation included)",
  },

  // Actions on Visual Selection
  d: { visual: "Delete (cut) the selected text" },
  y: { visual: "Yank (copy) the selected text" },
  c: { visual: "Change (replace) the selected text" },
  "<": { visual: "Shift selected text left" },
  ">": { visual: "Shift selected text right" },
  u: { visual: "Change selected text to lowercase" },
  U: { visual: "Change selected text to uppercase" },
  "~": { visual: "Invert the case of selected text" },
  // Other Visual Mode Actions
  o: { visual: "Move to the other end of the selected area" },
  O: { visual: "Move to the other corner of a Visual Block area" },
};

export const InsertModeKeyLabels: KeyAction = {
  // Basic Insertion
  i: { insert: "Insert before the cursor" },
  I: { insert: "Insert at the beginning of the line" },
  a: { insert: "Insert (append) after the cursor" },
  A: { insert: "Insert (append) at the end of the line" },
  o: { insert: "Open a new line below and enter Insert mode" },
  O: { insert: "Open a new line above and enter Insert mode" },

  // Editing within Insert Mode
  Backspace: { insert: "Delete character before the cursor" }, // Keep 'insert' mode
  "Control + h": { insert: "Delete character before the cursor" },
  "Control + w": { insert: "Delete word before the cursor" },
  "Control + u": { insert: "Delete from cursor to beginning of line" },
  "Control + k": { insert: "Delete from cursor to end of line" },
  // Navigation in Insert Mode
  "Control + o": {
    insert: "Temporarily exit Insert mode (for one Normal mode command)",
  },

  // Completion
  "Control + n": { insert: "Complete next match" },
  "Control + p": { insert: "Complete previous match" },

  // Special Actions
  "Control + r": {
    insert: "Insert contents of a register (see :help registers)",
  },
  "Control + t": { insert: "Indent line (add shiftwidth)" },
  "Control + d": { insert: "De-indent line (remove shiftwidth)" },
  Escape: { insert: "Exit Insert mode" }, // Keep 'insert' mode
  "Control + c": { insert: "Exit Insert mode" },
};
