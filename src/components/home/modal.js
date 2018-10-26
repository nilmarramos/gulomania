import React from 'react'
import Modal from 'react-responsive-modal'

const checkModal = props => {
	return (
		<Modal open={props.open} onClose={props.onClose} center showCloseIcon={false}>
			<div className="row justify-content-center">
				<div className="col text-center">
					<h5 className="c-f">Horario de funcionamento</h5>
					<div className="open">
						<p>Aberto de segunda à sabado</p>
						<p className="">de 07:00h ás 18:30h</p>
					</div>
					<button onClick={props.onClose} className="bt btn btn-block">OK</button>
				</div>
			</div>
		</Modal>
	)
}

export default checkModal