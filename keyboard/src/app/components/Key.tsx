import { ReactNode } from "react";
import {
  NormalModeKeyLabels,
  InsertModeKeyLabels,
  VisualModeKeyLabels,
} from "../utils/KeyLabels";

interface KeyProps {
  children?: ReactNode;
  action?: string;
  mode?: "normal" | "visual" | "insert";
  isPressed?: boolean;
}

export default function Key({ children, action, mode, isPressed }: KeyProps) {
  let backgroundColor = "transparent";
  // DO NOT REMOVE THIS - GLOBAL KEYPRESS REGARDLESS OF MODE
  let borderColor = isPressed ? "yellow" : ""; // yellow when pressed or inital styling

  console.log(`Key: ${children}, Action: ${action}, Mode: ${mode}`);

  if (action && mode) {
    const isActiveInMode =
      (mode === "normal" && NormalModeKeyLabels[action]?.normal) ||
      (mode === "visual" && VisualModeKeyLabels[action]?.visual) ||
      (mode === "insert" && InsertModeKeyLabels[action]?.insert);

    if (isActiveInMode) {
      switch (mode) {
        case "normal":
          backgroundColor = "red";
          break;
        case "visual":
          backgroundColor = "blue";
          break;
        case "insert":
          backgroundColor = "green";
          break;
        default:
          backgroundColor = "transparent";
      }
    }
  }

  // Pass GLOBAL KEY PRESS to keys
  return (
    <kbd
      className="key"
      style={{
        backgroundColor,
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "1px",
      }}
    >
      <label className="labels">{children}</label>
    </kbd>
  );
}
