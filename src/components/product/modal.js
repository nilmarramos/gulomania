import React from 'react'
import Modal from 'react-responsive-modal'

const FlavorModal = props => {
	const {_id, img, name, price,productQts, description} = props
	return (
		<Modal open={props.open} onClose={props.onClose} center showCloseIcon={false}>
			<div className="row">
				<div className="col text-center">
					<img src={img} className="img-thumbnail" alt=""/>
					<h6 className="c-f mt-2">{description}</h6>
					{props.flavor && props.flavor.map(p => {
						return (
							<div key={p} className="form-check form-check-inline">
								<label className="form-check-label mb-2">
									<input className="form-check-input" onChange={props.handle} type="radio" name="flavor" id="flavor" value={p}/>
									{p}
								</label>
							</div>
						)
					})}
					<button onClick={() => props.addFlavor(_id, name, img, price, productQts, description)} className="bt btn btn-block">Adicionar</button>
				</div>
			</div>
		</Modal>
	)
}

export default FlavorModal