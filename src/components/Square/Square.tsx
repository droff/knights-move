import React from "react";
import Figure from "./Figure";
import { useGameContext } from "../Game/Game";
import { useControlContext } from "../Control/Control";
import "./Square.css";

type SquareProps = {
  row: number;
  col: number;
  move: number;
};

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { row, col, move } = props;
  const { isFigure } = useControlContext();
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

  const renderValue = () => {
    return <span>{moveValue}</span>;
  };

  const renderFigure = () => {
    return isActivated && <Figure />;
  };

  return (
    <div className={className} onClick={handleMove}>
      {isFigure ? renderFigure() : renderValue()}
    </div>
  );
};

export default Square;
