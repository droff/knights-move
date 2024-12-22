import React from "react";
import "./Board.css";
import Square from "../Square/Square";

interface BoardProps {
  rows: number;
  cols: number;
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { rows, cols } = props;

  const drawGrid = (): React.ReactNode[] => {
    let idx = 0;
    const result = [];

    for (let row = 0; row < rows; row++)
      for (let col = 0; col < cols; col++, idx++)
        result.push(<Square key={idx} rowId={row} colId={col} />);

    return result;
  };

  return <div className="board">{drawGrid()}</div>;
};

export default Board;
