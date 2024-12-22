import React from "react";
import "./App.css";
import { Game } from "./components/Game/Game";
import Board from "./components/Board/Board";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Game>
          <Board rows={8} cols={8} />
        </Game>
      </header>
    </div>
  );
};

export default App;
