type Mode = "normal" | "visual" | "insert";

export interface KeyAction {
  [key: string]: {
    [mode in Mode]?: string;
  };
}

export const GlobalMotions = {
  // Buffer and Tab Management
  ":bn": { global: "Next buffer" },
  ":bp": { global: "Prev buffer" },
  ":tabnew": { global: "Open new tab" },
  ":tabnext": { global: "Next tab" },
  ":tabprev": { global: "Prev tab" },
  ":tabclose": { global: "Close tab" },
  ":tabonly": { global: "Close other tabs" },

  // File Operations and Saving
  ":q": { global: "Close window" },
  ":qa": { global: "Quit Vim" },
  ":w": { global: "Save" },
  ":wq": { global: "Save & quit" },
  ":x": { global: "Save & quit" },
  ZZ: { global: "Save & exit if saved" },
  ZQ: { global: "Quit w/o saving" },

  // Reading and Writing with External Commands
  ":r": { global: "Read file" },
  ":w !sudo tee %": { global: "Write w/ sudo" },
  "!": { global: "Run command" },
};

export const NormalModeKeyLabels: KeyAction = {
  // Movement Commands
  h: { normal: "Move left" },
  j: { normal: "Move down" },
  k: { normal: "Move up" },
  l: { normal: "Move right" },
  w: { normal: "Start of next word" },
  e: { normal: "End of word" },
  b: { normal: "Start of prev word" },
  "0": { normal: "Start of line" },
  $: { normal: "End of line" },
  gg: { normal: "First line" },
  G: { normal: "Last line" },

  // Editing Commands
  dd: { normal: "Delete line" },
  yy: { normal: "Copy line" },
  p: { normal: "Paste" },
  C: { normal: "Change to line end" },
  s: { normal: "Delete char & insert" },
  S: { normal: "Delete line & insert" },
  cc: { normal: "Change line" },
  ciw: { normal: "Change inner word" },
  "di'": { normal: "Delete in quotes" },

  // Undo/Redo Commands
  u: { normal: "Undo" },
  "Ctrl + r": { normal: "Redo" },

  // Search and Replace Commands
  "/": { normal: "Search" },
  n: { normal: "Next search result" },
  N: { normal: "Prev search result" },
  "?": { normal: "Search backward" },
  ":%s/old/new/g": { normal: "Replace all" },
  "*": { normal: "Next word occurrence" },
  "#": { normal: "Prev word occurrence" },
  ":g/old/d": { normal: "Delete lines with 'old'" },

  // Window and Screen Management Commands
  ":split": { normal: "Split horizontally" },
  ":vsplit": { normal: "Split vertically" },
  zz: { normal: "Center screen" },

  // Mode Transition Commands
  i: { normal: "Insert mode" },
  I: { normal: "Insert start line" },
  A: { normal: "Insert end line" },
  o: { normal: "Open below & insert" },
  O: { normal: "Open above & insert" },
  v: { normal: "Visual mode" },
  V: { normal: "Visual line mode" },
  "Ctrl + v": { normal: "Visual block mode" },

  // Replace Mode Commands
  R: { normal: "Replace mode" },
  gR: { normal: "Virtual replace mode" },

  // Advanced Editing and Selection
  "vi[": { normal: "Select in brackets" },
  ".": { normal: "Repeat change" },

  // Register and Macro Operations
  qa: { normal: "Start macro a" },
  q: { normal: "Stop macro" },
  "@a": { normal: "Execute macro a" },

  // Fold Manipulation Commands
  zf: { normal: "Create fold" },
  zo: { normal: "Open fold" },
  zc: { normal: "Close fold" },

  // Marks and Navigation Commands
  ma: { normal: "Set mark a" },
  "`a": { normal: "Jump to mark a" },

  // Pattern Matching and Line Manipulation
  ":m": { normal: "Move lines" },

  // Command Mode Entry
  ":": { normal: "Command-line mode" },
};

export const VisualModeKeyLabels: KeyAction = {
  // Mode Transition
  Escape: { visual: "Exit Visual mode" },

  // Editing Commands
  ">": { visual: "Shift right" },
  "<": { visual: "Shift left" },
  y: { visual: "Copy text" },
  d: { visual: "Delete text" },

  // Case Manipulation Commands
  "~": { visual: "Toggle case" },
  u: { visual: "Lowercase" },
  U: { visual: "Uppercase" },
};

export const InsertModeKeyLabels: KeyAction = {
  // Text Deletion
  Backspace: { insert: "Delete char before cursor" },
  "Ctrl + h": { insert: "Delete char before cursor" },
  "Ctrl + w": { insert: "Delete word before cursor" },
  "Ctrl + u": { insert: "Delete to line start" },
  "Ctrl + k": { insert: "Delete to line end" },

  // Command Execution
  "Ctrl + o": { insert: "Execute command in Normal mode" },

  // Autocomplete
  "Ctrl + n": { insert: "Autocomplete next" },
  "Ctrl + p": { insert: "Autocomplete previous" },
};
