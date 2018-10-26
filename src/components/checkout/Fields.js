import React,{ Fragment } from 'react'
import { Field } from 'react-final-form'

const Fields = () => {
	return (
		<Fragment>
			<div className="form-row mb-3">
				<div className="col">
					<label>Nome Completo</label>
					<Field name="name" type="text" component="input" className="form-control" placeholder="Nome Completo" required/>
				</div>
			</div>
			<div className="form-row mb-3">
				<div className="col">
					<label>Telefone</label>
					<Field name="phone" type="text" component="input" className="form-control" placeholder="Telefone" required/>
				</div>
			</div>
			<div className="form-row mb-3">
				<div className="col">
					<label>Rua</label>
					<Field name="logradouro" type="text" component="input" className="form-control" placeholder="Rua" required/>
				</div>
			</div>
			<div className="form-row mb-3">
				<div className="col-8">
					<label>Bairro</label>
					<Field name="bairro" type="text" component="input" className="form-control" placeholder="Bairro" required/>
				</div>
				<div className="col-4">
					<label>Nº</label>
					<Field name="num" type="text" component="input" className="form-control" placeholder="Nº" required/>
				</div>
			</div>
			<div className="form-row mb-3">
				<div className="col">
					<label>Referencia</label>
					<Field name="referencia" type="text" component="input" className="form-control" placeholder="Referencia" required/>
				</div>
			</div>
			<div className="form-row mb-3 justify-content-center">
				<div className="form-check form-check-inline">
					<label className="form-check-label">
						<Field name="payment" component="input" type="radio"	className="form-check-input" value="cartao"	/>
						Cartão
					</label>
				</div>
				<div className="form-check form-check-inline">
					<label className="form-check-label">
						<Field name="payment" component="input" type="radio"	className="form-check-input" value="dinheiro" />
						Dinheiro
					</label>
				</div>
			</div>
		</Fragment>
	)
}

export default Fields