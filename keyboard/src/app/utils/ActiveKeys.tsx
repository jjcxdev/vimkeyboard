interface KeyAction {
  [key: string]: {
    [mode: string]: string;
  };
}

const specialKeys = [
  "Control",
  "Escape",
  "Backspace",
  "Shift",
  "Alt",
  "Meta",
  "Option",
];

export function getActiveKeysForMode(
  keyActionObj: KeyAction,
  mode: string,
): string[] {
  let activeKeys = new Set<string>();

  Object.keys(keyActionObj).forEach((key) => {
    if (keyActionObj[key][mode]) {
      if (key.length === 1) {
        activeKeys.add(key);
      } else if (key.length === 2) {
        activeKeys.add(key[0]);
        activeKeys.add(key[1]);
      } else if (key.includes(" + ")) {
        key.split(" + ").forEach((part) => {
          if (specialKeys.includes(part)) {
            activeKeys.add(part);
          } else if (part.length === 1) {
            activeKeys.add(part);
          } else if (part.length === 2) {
            activeKeys.add(part[0]);
            activeKeys.add(part[1]);
          }
        });
      }
    }
  });

  return [...activeKeys];
}
