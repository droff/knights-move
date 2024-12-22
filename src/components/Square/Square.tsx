import React, { useState } from "react";
import "./Square.css";
import { useGameContext } from "../Game/Game";

interface SquareProps {
  rowId: number;
  colId: number;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { makeMove } = useGameContext();

  const { rowId, colId } = props;
  const [enabled, setEnabled] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [className, setClassName] = useState<string>("square");

  const handleMove = () => {
    if (enabled) return;

    const currentStep = makeMove(rowId, colId);
    setStep(currentStep);
    setEnabled(true);
    setClassName("square square_enabled");
  };

  return (
    <div className={className} onClick={handleMove}>
      <span>{step === 0 ? "" : step}</span>
    </div>
  );
};

export default Square;
