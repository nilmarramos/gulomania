import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Animated} from 'react-animated-css'
import Drawer from './Drawer'

import './header.css'
import menu from './menu.svg'
import bag from './shopping-bag.svg'

class Header extends Component {
	state = {
		openLeft: false,
		openRight: false,
	};
	openLeft = (bol) =>{
		this.setState({
			openLeft: bol,
		})
	}
	openRight = (bol) =>{
		this.setState({
			openRight: bol,
		})
	}
	render() {
		const { openLeft, openRight } = this.state;
		return (
			<div>

				<Drawer openRight={this.state.openRight}
				        openLeft={this.state.openLeft}
				        changeLeft={this.openLeft}
				        changeRight={this.openRight}
				        cart={this.props.cart}
				        totalAmount={this.props.totalAmount}
				        totalItems={this.props.totalItems}
				        removeProduct={this.props.removeProduct}
				/>

				<div className="header fixed-top">
					<div className="container">
						<div className="row align-items-center justify-content-around justify-content-sm-between">
							<img onClick={() => this.setState({openLeft: !openLeft})} src={menu} className="icon-menu" alt=""/>
							<Link to="/"><span onClick={this.props.closeModal} className="title-header navbar-brand">Gulo Mania</span></Link>
							<Animated animationIn="jello" animationOut="rubberBand" isVisible={this.props.animation}>
								<div className="bag">
									<img onClick={() => this.setState({openRight: !openRight})} src={bag} className="icon-menu" alt=""/>
									{ !this.props.totalItems ? "" : <span className="badge badge-pill badge-danger">{this.props.totalItems}</span>}
								</div>
							</Animated>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default Header