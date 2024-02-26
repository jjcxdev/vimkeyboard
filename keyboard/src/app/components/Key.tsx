import { ReactNode } from "react";
import {
  NormalModeKeyLabels,
  InsertModeKeyLabels,
  VisualModeKeyLabels,
} from "../utils/KeyLabels";

interface KeyProps {
  children?: ReactNode;
  action: string;
  mode?: "normal" | "visual" | "insert";
  isPressed?: boolean;
}

export default function Key({ children, action, mode, isPressed }: KeyProps) {
  // Initial styling, nothing additional applied
  let additionalModeClass = "";

  const isActiveInMode =
    (mode === "normal" && NormalModeKeyLabels[action]?.normal) ||
    (mode === "visual" && VisualModeKeyLabels[action]?.visual) ||
    (mode === "insert" && InsertModeKeyLabels[action]?.insert);

  if (isActiveInMode) {
    additionalModeClass = ` key-${mode}`; // Apply only if key is active in current mode
  }

  // Construct className with base key class and additional mode class
  const className = `key${additionalModeClass}`;

  // DO NOT REMOVE THIS - GLOBAL KEYPRESS REGARDLESS OF MODE
  let borderColor = isPressed ? "yellow" : ""; // yellow when pressed or inital styling

  //

  // Pass GLOBAL KEY PRESS to keys
  return (
    <kbd
      className={className}
      style={{
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "1px",
      }}
    >
      <label className="labels">{children}</label>
    </kbd>
  );
}
