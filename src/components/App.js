import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import axios from "axios/index";
import {baseUrl} from "../config";

import Header from './header/Header'
import Footer from './footer/Footer'
import Products from "./products/Products";
import Checkout from './checkout/Checkout'
import Home from "./home/Home";
import SearchView from "./searchView/SearchView";
import QueryCoupon from "./queryCoupon/QueryCoupon";

class App extends Component {
	state = {
		open: true,
		animation: true,
		loading: true,
		products: [],
		quantity: 1,
		cart: [],
		totalItems: 0,
		totalAmount: 0
	}

	closeModal = () => {
		this.setState({ open: false})
	}

	animation = () => {
		this.setState({animation: false})
		setTimeout(() => this.setState({animation: true}), 1000)
	}

	updateQts = qts => this.setState({ quantity: qts })

	checkProduct = productId => {
		const { cart } = this.state
		return cart.some(item => item._id === productId)
	}

	checkFlavor = flavor => {
		const { cart } = this.state
		return cart.some(item => item.flavor === flavor)
	}

	searchProduct = term => {
		const url = `${baseUrl}/products/search`
		let exp = new RegExp(term.trim(), 'i')
		axios.get(url)
			.then(resp => resp.data.filter(p => exp.test(p.name)))
			.then(products => this.setState({ products, loading: false }))
}

	addToCart = product => {
		const cartItem = this.state.cart
		const flavor = product.flavor
		const productId = product._id
		const quantity = product.productQts
		if (this.checkProduct(productId)) {
			if (!this.checkFlavor(flavor)) {
				return this.setState({ cart: [...cartItem, product] },() => {
					this.sumTotalItem()
					this.sumTotalAmount()
				})
			} else {
				const indexF = cartItem.findIndex(p => p.flavor === flavor)
				cartItem[indexF].productQts = Number(cartItem[indexF].productQts) + Number(quantity)
				return this.setState({	cart: cartItem }, () => {
					this.sumTotalAmount()
				})
			}
			const index = cartItem.findIndex(p => p._id === productId)
			cartItem[index].productQts = Number(cartItem[index].productQts) + Number(quantity)
			return this.setState({	cart: cartItem }, () => {
				this.sumTotalAmount()
			})
		}
		this.setState({	cart: [...cartItem, product] },() => {
			this.sumTotalItem()
			this.sumTotalAmount()
		})
		setTimeout(() => { this.setState({ quantity: 1 })}, 1000)
	}
	resetCart = () => {
		this.setState({
			cart: [],
			totalItems: 0
		})
	}

	removeProduct = id => {
		const {cart} = this.state
		const cartItem = cart.filter((item) => item._id !== id);
		this.setState({ cart: cartItem }, () => {
			this.sumTotalItem()
			this.sumTotalAmount()
		})
	}
	sumTotalAmount(){
			const total = this.state.cart
				.map(p => p.price * p.productQts)
				.reduce((acc, cur) => acc + cur, 0)
			this.setState({
				totalAmount: total.toFixed(2)
			})
	}

	sumTotalItem = () => {
		this.setState({ totalItems: this.state.cart.length })}

	render() {
    return (
      <div>
        <Header
	        closeModal={this.closeModal}
	        totalItems={this.state.totalItems}
          cart={this.state.cart}
	        totalAmount={this.state.totalAmount}
	        removeProduct={this.removeProduct}
	        animation={this.state.animation}
        />
        <div className="container wrapper">
	        <Switch>
		        <Route exact path="/" render={props => {
		        	return (
		        		<Home{...props}
					        open={this.state.open}
				          closeModal={this.closeModal}
				          search={this.searchProduct}
				        />
			        )
		        }}/>
		        <Route path="/search" render={props => {
		        	return (
		        		<SearchView{...props}
					        loading={this.state.loading}
					        products={this.state.products}
					        addCart={this.addToCart}
					        updateQts={this.updateQts}
					        productQts={this.state.quantity}
					        animation={this.animation}
				        />
			        )
		        }}/>
		        <Route path="/social-media" render={props => {
			        return (
				        <QueryCoupon{...props}
	                 addCart={this.addToCart}
	                 updateQts={this.updateQts}
	                 productQts={this.state.quantity}
	                 animation={this.animation}
				        />
			        )
		        }}/>
		        <Route exact path="/products/category/:catId" render={props => {
		        	return (
		        		<Products{...props}
                  addCart={this.addToCart}
                  updateQts={this.updateQts}
                  productQts={this.state.quantity}
				          animation={this.animation}
				        />
			        )
		        }}/>
		        <Route path="/checkout" render={props => {
		        	return (
		        		<Checkout{...props}
				          cart={this.state.cart}
				          resetCart={this.resetCart}
				          totalAmount={this.state.totalAmount}
				        />
			        )
		        }}/>
		        <Redirect from="*" to="/"/>
	        </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
