import React, { ChangeEventHandler } from "react";
import "./Switch.css";
import { useControlContext } from "./Control";

type SwitchProps = {
  handleSwitch: ChangeEventHandler<HTMLInputElement>;
};

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const { handleSwitch } = props;
  const { isFigure } = useControlContext();

  return (
    <label className="switch">
      <input type="checkbox" checked={isFigure} onChange={handleSwitch} />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
