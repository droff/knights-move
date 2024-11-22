import React from "react";
import "./App.css";
import { MovesType } from "./types";
import Board from "./components/Board/Board";
import Logger from "./components/Logger/Logger";

interface Props {}

interface State {
  userMoves: MovesType;
}
export class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      userMoves: [],
    };

    this.movesHandler = this.movesHandler.bind(this);
  }

  movesHandler(userMoves: MovesType) {
    this.setState((prevState, props) => ({
      userMoves: userMoves,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board width={8} height={8} movesHandler={this.movesHandler} />
          <Logger userMoves={this.state.userMoves} />
        </header>
      </div>
    );
  }
}

export default App;
