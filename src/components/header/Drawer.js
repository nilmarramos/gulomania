import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Drawer from 'react-motion-drawer';
import { Scrollbars } from 'react-custom-scrollbars'
import n from 'numeral'

import cartEmpty from './cart-empty.png'

class menuMobile extends Component {
	state ={
		redirect: false
	}

	redirect = () => {
		return this.setState({
			redirect: true
		}, () => {
			this.setState({redirect: false})
			this.props.changeRight(false)
		})
	}

	render () {
		const screen = window.innerHeight - 170

		const style = {
			background: "#ffffff",
			boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
		}

		const drawerprops = {
			overlayColor: "rgba(255,255,255,0.6)",
			drawerStyle: style
		}

		if (this.state.redirect) {
			return <Redirect to="/checkout"/>
		}
		return (
			<div>
				{/* MENU LEFT */}
				{!this.props.openRight &&
				<Drawer
					{...drawerprops}
					fadeOut={true}
					open={this.props.openLeft}
					onChange={open => this.props.changeLeft(open)}
				>
					<div className="menu">
						Menu
					</div>
					{/*link de menu*/}
					<div className="menu-list list-group">
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/paes" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Pães</Link><i className="icon icon-bread"></i>
						</div>
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/bolos" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Bolos</Link><i className="icon icon-cake"></i>
						</div>
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/brigadeiros" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Brigadeiros</Link><i className="icon icon-cupcake"></i>
						</div>
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/salgados" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Salgados</Link><i className="icon icon-chicken"></i>
						</div>
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/bebidas" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Bebidas</Link><i className="icon icon-wine"></i>
						</div>
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/low-carb" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Low Carb</Link><i className="icon icon-low"></i>
						</div>
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/biscoitos" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Biscoitos</Link><i className="icon icon-cookie"></i>
						</div>
						<div className="list-group-item  d-flex justify-content-around">
							<Link to="/products/category/outros" onClick={() => this.props.changeLeft(false)} className="list-group-item-action">Outros</Link><i className="icon icon-plus"></i>
						</div>
					</div>
				</Drawer>}
				{/* MENU RIGHT */}
				{!this.props.openLeft &&
				<Drawer
					{...drawerprops}
					right={true}
					fadeOut={true}
					open={this.props.openRight}
					onChange={open => this.props.changeRight(open)}
				>
					<div className="menu">
						Total: {this.props.totalAmount}
					</div>
					{this.props.totalItems <= 0 &&
					<div className="text-center">
						<img src={cartEmpty} className="img-fluid p-4" alt=""/>
					</div>}
					<Scrollbars style={{height: screen}}>
						<div className="container">
							{this.props.cart.map((p, i) => {
								return (
									<div key={i} className="row align-items-center mt-3">
										<div className="col-2 mr-3">
											<img src={p.img} width={55} alt=""/>
										</div>
										<div className="col">
											<h6 className="text-uppercase font-weight-bold">{p.name}</h6>
											<span className="text-muted mb-1">{p.flavor}</span>
											<div className="row justify-content-around">
												<h6 className="text-muted">R$ {p.price}&ensp;x{p.productQts}</h6>
												<h6>R$ {n(p.price * p.productQts).format('0,0[.]00')}</h6>
												<span onClick={() => this.props.removeProduct(p._id)} className="close">&times;</span>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</Scrollbars>
					<div className="container bt-cart">
						{this.props.totalAmount <= 4.99
							? <div className="col py-2 text-center btn-danger menu-list">Valor mínimo R$ 5.00</div>
							:	<button onClick={this.redirect} className="bt btn btn-block">
									<div className="font-weight-bold">Confirmar Pedido</div>
								</button>
						}
					</div>
				</Drawer>}
			</div>
		)
	}
}

export default menuMobile