import React from "react";
import Board from "./components/Board/Board";
import Control from "./components/Control/Control";
import Game from "./components/Game/Game";
import "./App.css";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="app">
      <section className="game">
        <Game rows={8} cols={8}>
          <Board />
          <Control />
        </Game>
      </section>
    </div>
  );
};

export default App;
