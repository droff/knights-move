import React from 'react'
import './Logger.scss'

class Logger extends React.Component {
	render() {
		const userMoves = this.props.userMoves.map((move, idx) =>
      <li key={idx}>{move[0]}/{move[1]}</li>
    );

    return <div className="logger"><ol>{userMoves}</ol></div>;
	}
}

export default Logger