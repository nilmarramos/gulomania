import React, { Component, Fragment } from 'react'
import socketIOClient from 'socket.io-client'
import { Redirect } from 'react-router-dom'
import { Form } from 'react-final-form'
import axios from 'axios'
import { baseUrl } from '../../config'

import './checkout.css'
import CheckList from './checkList'
import FormFields from './Fields'
import CheckModal from './modal'
import Buttons from './button'
import Cep from './cep'

const socket = socketIOClient(baseUrl)

class Checkout extends Component{
	state= {
		label: 'Enviar',
		open: false,
		cep: '',
		data:{
			products: this.props.cart,
			localidade: 'Colatina',
			total: this.props.totalAmount

		}
	}
	onOpenModal = () => {
		this.setState({ open: true })
	};

	onCloseModal = () => {
		this.setState({ open: false })
		setTimeout(() => {
			this.props.history.push('/')
			this.props.resetCart()
		}, 1000)
	};

	getCep = () => {
		axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
			.then(resp => {
				return {
					bairro: resp.data.bairro,
					logradouro: resp.data.logradouro,
					localidade: resp.data.localidade,
					products: this.props.cart,
					total: this.props.totalAmount
				}
			})
			.then(data => this.setState({ data }))
	}
	handleCep = (e) => {
		this.setState({
			cep: e.target.value
		})
  }

  socketOrder = socket => {
		socket.emit('order')
  }

	onSubmit = values => {
		this.setState({ label: '✔'})
		axios.post(`${baseUrl}/order`, values)
			.then(() => this.onOpenModal())
			.then(() => this.socketOrder(socket))
	}

	render () {
		if (this.props.match.url === '/checkout' && this.props.cart.length <= 0) {
			return <Redirect to="/"/>
		}
		return (
			<Fragment>
				<CheckModal	open={this.state.open} onOpen={this.onOpenModal} onClose={this.onCloseModal} />

				<Cep handleCep={this.handleCep} getCep={this.getCep}/>

				{this.state.data.localidade !== 'Colatina' ? <div className="col text-center">Não entregamos nessa localidade</div> :
				<Form onSubmit={this.onSubmit}
		      initialValues={this.state.data}
		      render={({handleSubmit}) => (
			      <form onSubmit={handleSubmit} className="text-center">
				      <FormFields/>
				      <table className="mt-4 table table-bordered table-sm shadow">
					      <tbody>
						      {this.props.cart.map((p, i) => {
						        return (
						          <CheckList key={i} name={p.name} flavor={p.flavor} qty={p.productQts} price={p.price} />
							      )
						      })}
					      </tbody>
				      </table>
				      <Buttons label={this.state.label} totalAmount={this.props.totalAmount}/>
			      </form>
		      )}
				/>
				}
			</Fragment>
		)
	}
}

export default Checkout