import React, { Component } from 'react'
import FlavorModal from './modal'

import Counter from '../counter/Counter'

class Product extends Component{
	state = {
		open: false,
		selectedProduct: {},
		button: false,
		label: 'Adicionar',
		flavor: ''
	}

	onOpenModal = () => {
		this.setState({ open: true })
	}
	onCloseModal = () => {
		this.setState({ open: false })
	}
	handleModal = (e) => {
		this.setState({flavor: e.target.value})
	}

	addCart = (_id, name, img, price, productQts, description) => {
		const {flavor} = this.state
		this.setState({
			selectedProduct: {_id, name, img, price, productQts, description, flavor},
			button: true,
			label: '✔'
		}, () => {
			const {selectedProduct} = this.state
			this.props.addCart(selectedProduct)
			this.onCloseModal()
		})
		setTimeout(() => this.setState({
			selectedProduct:{},
			button: false,
			label: 'Adicionar'
		}), 1000)
		this.props.animation()
	}

	render () {
		const {_id, img, name, price, productQts, updateQts, product, flavor, description} = this.props
		return (
			<div className={ product.length <= 1 ? "col-12 col-md-3 text-center mb-4" : "col-6 col-md-3 text-center mb-4" }>
				<FlavorModal
					open={this.state.open}
					handle={this.handleModal}
					{...this.props}
					addFlavor={this.addCart}
					onOpen={this.onOpenModal}
					flavor={flavor}
					onClose={this.onCloseModal}
				/>
				<div className="box-prod">
					<img onClick={this.onOpenModal} src={img} className="img-fluid" alt=""/>
					<p className="title-product">{name}</p>
					<p className="price-prod">R$ {price}</p>
					<Counter productQts={productQts} updateQts={updateQts}/>
					{!flavor ? <button onClick={() => this.addCart(_id, name, img, price, productQts, description, flavor)}
					                   className="bt btn btn-block">{this.state.label}</button>:
					flavor.length >= 1 ?
						<button onClick={this.onOpenModal}
						         className="bt btn btn-block">Sabores</button>:
						<button onClick={() => this.addCart(_id, name, img, price, productQts, description, flavor)}
						        className="bt btn btn-block">{this.state.label}</button>}
				</div>
			</div>
		)
	}
}

export default Product