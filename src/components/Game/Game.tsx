import React, { createContext, useContext, useState } from "react";
import { BoardType, MoveType, MovesType } from "../../types";

interface GameInterface {
  board: BoardType;
  makeMove: Function;
  resetGame: Function;
}

const GameContext = createContext<GameInterface | undefined>(undefined);

export const useGameContext = (): GameInterface => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("GameContext must be used within a GameProvider");
  }
  return context;
};

type GameProps = {
  rows: number;
  cols: number;
  children: React.ReactNode;
};

export const Game: React.FC<GameProps> = (props: GameProps) => {
  const { rows, cols, children } = props;
  const [board, setBoard] = useState<BoardType>(
    Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))
  );
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [prevCalculatedMoves, setPrevCalculatedMoves] = useState<number[][]>(
    []
  );
  const isFirstMove = currentMove === 0;

  const movesPatterns: MovesType = [
    [0, 1],
    [1, 1],
    [2, 0],
    [1, -1],
    [0, -2],
    [-1, -1],
    [-2, 0],
    [-1, 1],
  ];

  const calculateMoves = (row: number, col: number): number[][] => {
    let rowId = row - 2;
    let colId = col;

    return movesPatterns
      .map((pattern: MoveType) => {
        rowId += pattern[0];
        colId += pattern[1];
        return [rowId, colId];
      })
      .filter((move: MoveType) => {
        const [row, col] = move;
        return row >= 0 && row < rows && col >= 0 && col < cols;
      });
  };

  const fillBoardWithValues = (value: number): BoardType => {
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => value)
    );
  };

  const resetPreviousMoves = (board: BoardType): void => {
    prevCalculatedMoves.forEach((move: MoveType) => {
      const [row, col] = move;
      if (board[row][col] === 0) {
        board[row][col] = -1;
      }
    });
  };

  const activateCalculatedMoves = (
    board: BoardType,
    row: number,
    col: number
  ): void => {
    const calculatedMoves = calculateMoves(row, col);

    calculatedMoves.forEach((move: MoveType) => {
      const [row, col] = move;
      if (board[row][col] === -1) {
        board[row][col] = 0;
      }
    });

    setPrevCalculatedMoves(calculatedMoves);
  };

  const makeMove = (row: number, col: number): void => {
    const move = currentMove + 1;
    const updatedBoard = isFirstMove ? fillBoardWithValues(-1) : board;

    resetPreviousMoves(updatedBoard);
    activateCalculatedMoves(updatedBoard, row, col);
    updatedBoard[row][col] = move;

    setCurrentMove(move);
    setBoard(updatedBoard);
  };

  const resetGame = (): void => {
    setBoard(fillBoardWithValues(0));
    setCurrentMove(0);
    setPrevCalculatedMoves([]);
  };

  return (
    <GameContext.Provider value={{ board, makeMove, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export default Game;
