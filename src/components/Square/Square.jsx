import React from 'react'
import './Square.scss'

class Square extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			className: "square",
			value: 0
		}

		this.handleMove = this.handleMove.bind(this)
	}

	value() {
		return ( this.state.value === 0 ) ? "" : this.state.value
	}

	className() {
		const nonvalued = this.state.value === 0
		const enabled = this.props.enabled(this.props.w, this.props.h)
		return ( enabled && nonvalued ) ? "square square_enabled" : "square"
	}

	handleMove() {
		const initialState = ( this.state.value !== 0 )
		const disabled = !this.props.enabled(this.props.w, this.props.h)
		if ( initialState || disabled ) return

		const val = this.props.handler(this.props.w, this.props.h)
		this.setState({
			value: val,
			className: this.className()
		})
	}

	render() {
		return  <div className={this.className()} onClick={this.handleMove}>
							<span>{this.value()}</span>
					 	</div>
	}
}

export default Square