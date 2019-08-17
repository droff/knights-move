import React from 'react'
import './App.css'

import Board from '../Board/Board'
import Logger from '../Logger/Logger'

export class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			userMoves: []
		}

		this.movesHandler = this.movesHandler.bind(this)
	}

	movesHandler(userMoves) {
		this.setState( (prevState, props) => ({
			userMoves: userMoves
		}))
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board width="8" height="8" movesHandler={this.movesHandler} />
          <Logger userMoves={this.state.userMoves} />
        </header>
      </div>
    );
  }
}

export default App