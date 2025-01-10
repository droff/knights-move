import React from "react";
import "./App.css";
import { Game } from "./components/Game/Game";
import Board from "./components/Board/Board";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Game rows={8} cols={8}>
          <Board />
        </Game>
      </header>
    </div>
  );
};

export default App;
