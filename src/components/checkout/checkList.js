import React from 'react'
import n from "numeral";

const CheckList = props => {
	return (
		<tr>
			<td><span className="text-muted">x</span>{props.qty}</td>
			<td><b>{props.name}</b><br/>{props.flavor}</td>
			<td>R$ {n(props.price * props.qty).format('0,0[.]00')}</td>
		</tr>
	)
}

export default CheckList