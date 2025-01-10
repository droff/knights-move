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

const Board: React.FC<{}> = () => {
  const { board } = useGameContext();

  const renderBoard = (): React.ReactNode[] => {
    return board.map((row, rowIndex) =>
      row.map((move, colIndex) => (
        <Square
          key={`[${rowIndex};${colIndex}]`}
          row={rowIndex}
          col={colIndex}
          move={move}
        />
      ))
    );
  };

  return (
    <BoardContext.Provider value={{ renderBoard }}>
      <div className="board">{renderBoard()}</div>
    </BoardContext.Provider>
  );
};

export default Board;
