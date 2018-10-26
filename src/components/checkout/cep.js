import React from 'react'

const submit = (e) => {
	e.preventDefault()
}

const Cep = props => {
	return (
		<form onSubmit={submit} className="mb-3 form-row text-center form-inline justify-content-center">
			<div className="col-6">
				<label>CEP</label>
				<input name="cep" type="text" onBlur={props.getCep} onChange={props.handleCep} className="form-control" placeholder="inserir CEP"/>
			</div>
		</form>
	)
}

export default Cep