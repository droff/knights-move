import React from "react";
import Figure from "./Figure";
import { useGameContext } from "../Game/Game";
import "./Square.css";

type SquareProps = {
  row: number;
  col: number;
  move: number;
};

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { row, col, move } = props;
  const { makeMove } = useGameContext();

  const isInactive = move === -1;
  const isActive = move === 0;
  const isActivated = move > 0;

  const className =
    isActivated || isInactive ? "square" : "square square-active";

  const moveValue = isInactive || isActive ? "" : move;

  const handleMove = () => {
    if (isInactive || isActivated) return;
    makeMove(row, col);
  };

  return (
    <div className={className} onClick={handleMove}>
      <span>{moveValue}</span>
      {/* {isActivated && <Figure />} */}
    </div>
  );
};

export default Square;
