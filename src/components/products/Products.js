import React, { Component } from 'react'
import axios from 'axios'
import {baseUrl} from '../../config'

import './products.css'

import Product from '../product/Product'

class Products extends Component{
	state = {
		productList: [],
		loading: true
	}

	getProducts = () => {
		const {catId} = this.props.match.params
		const url = `${baseUrl}/products/category/${catId}`
		axios.get(url).then(resp => {	this.setState({	productList: resp.data,	loading: false }) })
	}

	componentDidMount() {
		this.getProducts()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.catId !== this.props.match.params.catId) {
			return this.getProducts()
		}
	}

	render () {
		if (this.state.loading) {
			return (
				<div className="col text-center">
					<div className="lds-dual-ring"></div>
					<div className="lds-text">
						Carregando...
					</div>
				</div>
			)
		}
		if (this.state.productList.length <= 0) {
			return (
				<div className="row text-center">
					<div className="col"><h4>Produto não encontrado</h4></div>
				</div>
			)
		}
		return (
			<section className="row justify-content-center">
				{this.state.productList.map(p => {
					return (
						<Product
							key={p._id}
							_id={p._id}
		          img={p.img}
		          name={p.name}
		          price={p.price}
							flavor={p.flavor}
							description={p.description}
							product={this.state.productList}
		          productQts={this.props.productQts}
		          updateQts={this.props.updateQts}
		          addCart={this.props.addCart}
							animation={this.props.animation}
						/>
					)
				})}
			</section>
		)
	}
}

export default Products