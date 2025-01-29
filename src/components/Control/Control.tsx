import React, { createContext, useContext, useState } from "react";
import "./Control.css";
import Reset from "./Reset";
import { useGameContext } from "../Game/Game";
import Switch from "./Switch";

interface ControlInterface {
  isFigure: boolean;
}

export const ControlContext = createContext<ControlInterface | undefined>(
  undefined
);

export const useControlContext = (): ControlInterface => {
  const context = useContext(ControlContext);
  if (!context) {
    throw new Error("ControlContext must be used within a ControlProvider");
  }
  return context;
};

type ControlProps = {
  children: React.ReactNode;
};

const Control: React.FC<ControlProps> = (
  props: ControlProps
): React.ReactNode => {
  const { children } = props;
  const [isFigure, setIsFigure] = useState<boolean>(false);
  const { resetGame } = useGameContext();

  const handleReset = () => {
    resetGame();
  };

  const handleSwitch = () => {
    setIsFigure(!isFigure);
  };

  return (
    <ControlContext.Provider value={{ isFigure }}>
      {children}
      <div className="control">
        <div className="control-item">
          <Switch handleSwitch={handleSwitch} />
        </div>
        <div className="control-item">
          <Reset handleReset={handleReset} />
        </div>
      </div>
    </ControlContext.Provider>
  );
};

export default Control;
