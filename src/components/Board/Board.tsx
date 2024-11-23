import React from "react";
import "./Board.css";
import { MoveType, MovesType } from "../../types";
import Square from "../Square/Square";

interface Props {
  width: number;
  height: number;
  movesHandler: Function;
}

interface State {
  value: number;
  moves: string[];
  userMoves: MovesType;
}

class Board extends React.Component<Props, State> {
  movesPatterns: MovesType = [
    [0, 1],
    [1, 1],
    [2, 0],
    [1, -1],
    [0, -2],
    [-1, -1],
    [-2, 0],
    [-1, 1],
  ];

  constructor(props: Props) {
    super(props);

    this.state = {
      value: 1,
      moves: [],
      userMoves: [],
    };

    this.handleMove = this.handleMove.bind(this);
    this.enabled = this.enabled.bind(this);
  }

  handleMove(w: number, h: number) {
    const userMoves = this.state.userMoves;
    userMoves.push([w, h]);

    this.setState((prevState: State, props: Props) => ({
      value: prevState.value + 1,
      moves: this.calculateMoves(w, h),
      userMoves: userMoves,
    }));

    this.props.movesHandler(this.state.userMoves);

    return this.state.value;
  }

  calculateMoves(w: number, h: number) {
    let wi = w - 2,
      hi = h;

    return this.movesPatterns.map((pattern: MoveType) => {
      wi += pattern[0];
      hi += pattern[1];
      return JSON.stringify([wi, hi]);
    });
  }

  enabled(w: number, h: number) {
    if (this.state.value === 1) return true;

    return this.state.moves.includes(JSON.stringify([w, h]));
  }

  drawGrid() {
    let idx = 0;
    const result = [];

    for (let w = 0; w < this.props.width; w++)
      for (let h = 0; h < this.props.height; h++, idx++)
        result.push(
          <Square
            key={idx}
            handler={this.handleMove}
            w={w}
            h={h}
            enabled={this.enabled}
          />
        );

    return result;
  }

  render() {
    return <div className="board">{this.drawGrid()}</div>;
  }
}

export default Board;
