import React, { Component } from 'react'

class Counter extends Component{
	state = {
		quantity: this.props.productQts
	}
	increment = (e) => {
		e.preventDefault()
		this.setState( prev => ({
			quantity: Number(prev.quantity) + 1
		}), () => {
			this.props.updateQts(this.state.quantity)
		})
	}
	decrement = (e) => {
		e.preventDefault()
		if (this.state.quantity <= 1) {
			return this.state.quantity
		}
		this.setState(prev => ({
			quantity: Number(prev.quantity) - 1
		}), () => {
			this.props.updateQts(this.state.quantity)
		})
	}

	feed = () => {
		this.setState({
			quantity: this.refs.feedQts.value
		}, () => {
			this.props.updateQts(this.state.quantity)
		})
	}
	render () {
		return (
			<div className="stepper-input">
				<a onClick={this.decrement}  className="decrement">–</a>
				<input type="number" ref="feedQts" className="quantity" onChange={this.feed} value={this.state.quantity}/>
				<a onClick={this.increment} className="increment">+</a>
			</div>
		)
	}
}

export default Counter