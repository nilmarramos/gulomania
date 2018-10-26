import React from 'react'
import Modal from 'react-responsive-modal'

const checkModal = props => {
	return (
		<Modal open={props.open} onClose={props.onClose} center showCloseIcon={false}>
			<div className="row justify-content-center">
				<div className="col text-center">
					<p>Obrigado pela preferência</p>
					<p>Seu pedido chegará em alguns minutos</p>
					<button onClick={props.onClose} className="bt btn btn-block">sair</button>
				</div>
			</div>
		</Modal>
	)
}

export default checkModal