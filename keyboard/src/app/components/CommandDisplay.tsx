import { useMode } from "../utils/ModeContext.js";
import {
  InsertModeKeyLabels,
  KeyAction,
  NormalModeKeyLabels,
  VisualModeKeyLabels,
} from "../utils/KeyLabels";

type Mode = "normal" | "visual" | "insert";

const CommandDisplay = () => {
  const { currentMode } = useMode();

  const modeKeyLabels: Record<Mode, KeyAction> = {
    normal: NormalModeKeyLabels,
    visual: VisualModeKeyLabels,
    insert: InsertModeKeyLabels,
  };

  const keyActions = modeKeyLabels[currentMode as Mode];

  return (
    <div>
      {Object.entries(keyActions).map(([key, action]) => {
        const actionDescription = action[currentMode as Mode];
        return (
          <div key={key}>
            {key}: {actionDescription}
          </div>
        );
      })}
    </div>
  );
};

export default CommandDisplay;
