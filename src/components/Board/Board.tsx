import React, { createContext, useContext } from "react";
import "./Board.css";
import Square from "../Square/Square";
import { useGameContext } from "../Game/Game";

interface BoardInterface {
  renderBoard: Function;
}

const BoardContext = createContext<BoardInterface | undefined>(undefined);

export const useBoardContext = (): BoardInterface => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("BoardContext must be used within a BoardProvider");
  }
  return context;
};

type BoardProps = {
  rows: number;
  cols: number;
};

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { rows, cols } = props;
  const { board } = useGameContext();

  const renderBoard = (): React.ReactNode[] => {
    const squares: React.ReactNode[] = [];

    for (let row = 0; row < rows; row++)
      for (let col = 0; col < cols; col++) {
        squares.push(
          <Square
            key={`[${row};${col}]`}
            row={row}
            col={col}
            move={board[row][col]}
          />
        );
      }

    return squares;
  };

  return (
    <BoardContext.Provider value={{ renderBoard }}>
      <div className="board">{renderBoard()}</div>
    </BoardContext.Provider>
  );
};

export default Board;
