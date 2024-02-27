type Mode = "normal" | "visual" | "insert";

export interface KeyAction {
  [key: string]: {
    [mode in Mode]?: string;
  };
}

const GlobalMotions = {
  // Buffer and Tab Management
  ":bn": { global: "Switch to the next buffer" },
  ":bp": { global: "Switch to the previous buffer" },
  ":tabnew": { global: "Open a new tab" },
  ":tabnext": { global: "Move to the next tab" },
  ":tabprev": { global: "Move to the previous tab" },
  ":tabclose": { global: "Close the current tab" },
  ":tabonly": { global: "Close all other tabs" },

  // File Operations and Saving
  ":q": { global: "Close current window" },
  ":qa": { global: "Quit Vim" },
  ":w": { global: "Save changes to the disk" },
  ":wq": { global: "Save and quit" },
  ":x": { global: "Save and quit (same as :wq)" },
  ZZ: { global: "Save changes and quit if no changes are made" },
  ZQ: { global: "Quit without saving changes" },

  // Reading and Writing with External Commands
  ":r": { global: "Read a file into the current buffer" },
  ":w !sudo tee %": { global: "Write out the current file using sudo" },
  "!": { global: "Execute an external command" },
};

export const NormalModeKeyLabels: KeyAction = {
  // Movement Commands
  h: { normal: "Move left" },
  j: { normal: "Move down" },
  k: { normal: "Move up" },
  l: { normal: "Move right" },
  w: { normal: "Jump forwards to the start of a word" },
  e: { normal: "Jump forwards to the end of a word" },
  b: { normal: "Jump backwards to the start of a word" },
  "0": { normal: "Jump to the start of the line" },
  $: { normal: "Jump to the end of the line" },
  gg: { normal: "Go to the first line of the document" },
  G: { normal: "Go to the last line of the document" },

  // Editing Commands
  dd: { normal: "Delete line" },
  yy: { normal: "Yank (copy) line" },
  p: { normal: "Paste" },
  C: { normal: "Change (delete) to the end of the line and enter Insert mode" },
  s: { normal: "Delete character and enter Insert mode" },
  S: { normal: "Delete line and enter Insert mode" },
  cc: { normal: "Change (delete) entire line and enter Insert mode" },
  ciw: { normal: "Change inner word" },
  "di'": { normal: "Delete inside single quotes" },

  // Undo/Redo Commands
  u: { normal: "Undo" },
  "Ctrl + r": { normal: "Redo" },

  // Search and Replace Commands
  "/": { normal: "Search for a pattern" },
  n: { normal: "Repeat search in same direction" },
  N: { normal: "Repeat search in opposite direction" },
  "?": { normal: "Enter Search mode (backward)" },
  ":%s/old/new/g": { normal: "Replace all old with new throughout file" },
  "*": {
    normal: "Search for the next occurrence of the word under the cursor",
  },
  "#": {
    normal: "Search for the previous occurrence of the word under the cursor",
  },
  ":g/old/d": { normal: "Delete all lines containing 'old'" },

  // Window and Screen Management Commands
  ":split": { normal: "Split window horizontally" },
  ":vsplit": { normal: "Split window vertically" },
  zz: { normal: "Center cursor on screen" },

  // Mode Transition Commands
  i: { normal: "Enter Insert mode" },
  I: { normal: "Enter Insert mode at the beginning of the line" },
  A: { normal: "Enter Insert mode at the end of the line" },
  o: { normal: "Open a new line below and enter Insert mode" },
  O: { normal: "Open a new line above and enter Insert mode" },
  v: { normal: "Enter Visual mode" },
  V: { normal: "Enter Visual Line mode" },
  "Ctrl + v": { normal: "Enter Visual Block mode" },

  // Replace Mode Commands
  R: { normal: "Enter Replace mode" },
  gR: {
    normal:
      "Enter Virtual Replace mode, replacing virtual characters (like tabs with spaces)",
  },

  // Advanced Editing and Selection
  "vi[": { normal: "Visually select inside brackets" },
  ".": { normal: "Repeat the last change" },

  // Register and Macro Operations
  qa: { normal: "Start recording macro in register a" },
  q: { normal: "Stop recording macro" },
  "@a": { normal: "Execute macro stored in register a" },

  // Fold Manipulation Commands
  zf: { normal: "Create a fold" },
  zo: { normal: "Open a fold" },
  zc: { normal: "Close a fold" },

  // Marks and Navigation Commands
  ma: { normal: "Set mark a" },
  "`a": { normal: "Jump to mark a" },

  // Pattern Matching and Line Manipulation
  ":m": { normal: "Move lines" },

  // Command Mode Entry
  ":": { normal: "Enter Command-line mode" },
};

export const VisualModeKeyLabels: KeyAction = {
  // Mode Transition
  Escape: { visual: "Exit Visual mode" },
  // Editing Commands
  ">": { visual: "Shift text right" },
  "<": { visual: "Shift text left" },
  y: { visual: "Yank (copy) highlighted text" },
  d: { visual: "Delete highlighted text" },

  // Case Manipulation Commands
  "~": { visual: "Switch case" },
  u: { visual: "Lowercase" },
  U: { visual: "Uppercase" },
};

export const InsertModeKeyLabels: KeyAction = {
  // Text Deletion
  Backspace: { insert: "Delete the character before the cursor" },
  "Ctrl + h": {
    insert: "Delete the character before the cursor (equivalent to Backspace)",
  },
  "Ctrl + w": { insert: "Delete the word before the cursor" },
  "Ctrl + u": {
    insert: "Delete all characters before the cursor on the current line",
  },
  "Ctrl + k": { insert: "Delete from the cursor to the end of the line" },

  // Command Execution
  "Ctrl + o": {
    insert: "Execute one command in Normal mode and return to Insert mode",
  },

  // Autocomplete
  "Ctrl + n": { insert: "Autocomplete next" },
  "Ctrl + p": { insert: "Autocomplete previous" },

  // Mode Transition
  Escape: { insert: "Exit Insert mode" },
};
