import React, {Fragment} from 'react'

const Buttons = props => {
	return (
		<Fragment>
			<div className="row justify-content-center fz shadow">
				<div className="col">Total</div>
				<div className="col">R$ {props.totalAmount}</div>
			</div>

			<div className="row mt-4 justify-content-center">
				<div className="col-6">
					<button type="submit" className="bt btn btn-block">{props.label}</button>
				</div>
			</div>
		</Fragment>
	)
}
export default Buttons