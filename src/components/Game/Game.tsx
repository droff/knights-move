import React, { createContext, useContext, useState } from "react";
import { MoveType, MovesType } from "../../types";

interface GameInterface {
  userMoves: MovesType;
  makeMove: Function;
}

const GameContext = createContext<GameInterface | undefined>(undefined);

export const useGameContext = (): GameInterface => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("GameContext must be used within a GameProvider");
  }
  return context;
};

export const Game: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [moves, setMoves] = useState<string[]>();
  const [userMoves, setUserMoves] = useState<MovesType>([]);

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

  const calculateMoves = (w: number, h: number): string[] => {
    let wi = w - 2,
      hi = h;

    return movesPatterns.map((pattern: MoveType) => {
      wi += pattern[0];
      hi += pattern[1];
      return JSON.stringify([wi, hi]);
    });
  };

  const makeMove = (colId: number, rowId: number): number => {
    setMoves([...(moves || []), ...calculateMoves(colId, rowId)]);
    setUserMoves([...userMoves, [colId, rowId]]);

    return userMoves.length + 1;
  };

  return (
    <GameContext.Provider value={{ userMoves, makeMove }}>
      {children}
    </GameContext.Provider>
  );
};
