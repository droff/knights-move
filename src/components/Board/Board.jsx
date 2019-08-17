import React from 'react'
import './Board.scss'

import Square from '../Square/Square'

class Board extends React.Component {
	constructor(props) {
		super(props)

		const movesPattern = [
			[0,  1], [ 1,  1], [ 2, 0], [ 1, -1],
			[0, -2], [-1, -1], [-2, 0], [-1,  1]
		]

		this.state = {
			value: 1,
			moves: [],
			userMoves: []
		}

		this.movesPattern = movesPattern
		this.handleMove = this.handleMove.bind(this)
		this.enabled = this.enabled.bind(this)
	}

	handleMove(w, h) {
		const userMoves = this.state.userMoves
		userMoves.push([w, h])

		this.setState( (prevState, props) => ({
			value: prevState.value + 1,
			moves: this.calculateMoves(w, h),
			userMoves: userMoves
		}))

		this.props.movesHandler(this.state.userMoves)

		return this.state.value
	}

	calculateMoves(w, h) {
		let wi = w-2, hi = h

		return this.movesPattern.map(pattern => {
			wi += pattern[0]
			hi += pattern[1]
			return JSON.stringify( [wi, hi] )
		})
	}

	enabled(w, h) {
		if ( this.state.value === 1 )
			return true

		return this.state.moves.includes(JSON.stringify([w, h]))
	}

	drawGrid() {
		let idx = 0
		const result = []

		for ( let w = 0; w < this.props.width; w++ )
			for ( let h = 0; h < this.props.height; h++, idx++ )
				result.push(<Square key={idx} handler={this.handleMove} w={w} h={h} enabled={this.enabled} />)

		return result
	}

	render() {
		return <div className="board">{this.drawGrid()}</div>
	}
}

export default Board