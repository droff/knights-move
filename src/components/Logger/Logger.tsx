import React from "react";
import { MoveType, MovesType } from "../../types";

class Logger extends React.Component {
  props!: Readonly<{
    userMoves: MovesType;
  }>;

  render() {
    const userMoves = this.props.userMoves.map(
      (move: MoveType, idx: number) => (
        <li key={idx}>
          {move[0]}/{move[1]}
        </li>
      )
    );

    return (
      <div className="logger">
        <ol>{userMoves}</ol>
      </div>
    );
  }
}

export default Logger;
