import React, { Component } from 'react'

import Product from '../product/Product'

class SearchView extends Component{

	render () {
		if (this.props.loading) {
			return (
				<div className="col text-center">
					<div className="lds-dual-ring"></div>
					<div className="lds-text">
						Carregando...
					</div>
				</div>
			)
		}
		if (this.props.products.length <= 0) {
			return (
				<div className="row text-center">
					<div className="col"><h4>Produto não encontrado</h4></div>
				</div>
			)
		}
		return (
			<section className="row justify-content-center">
				{this.props.products.map(p => {
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
							product={this.props.products}
							animation={this.props.animation}
						/>
					)
				})}
			</section>
		)
	}
}

export default SearchView