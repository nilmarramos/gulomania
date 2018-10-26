import React, { Component } from 'react'
import queryString from "qs"
import Product from '../product/Product'
import axios from "axios/index";
import {baseUrl} from "../../config";

class QueryCoupon extends Component{
	state = {
		loading: true,
		productList: []
	}

	getQuery = () => {
		const values = queryString.parse(this.props.location.search.slice(1))
		const url = `${baseUrl}/social-media?product=${values.product}`
		axios.get(url).then(resp => {	this.setState({	productList: resp.data,	loading: false }) })
	}

	componentDidMount() {
		this.getQuery()
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
							productQts={this.props.productQts}
							updateQts={this.props.updateQts}
							addCart={this.props.addCart}
							product={this.state.productList}
							animation={this.props.animation}
						/>
					)
				})}
			</section>
		)
	}
}

export default QueryCoupon