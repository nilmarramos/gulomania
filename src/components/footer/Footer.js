import React from 'react'

import './footer.css'

import band from './img/band.png'

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="pag">
						<h1 className="display-1">Formas de pagamentos</h1>
						<img src={band} className="img-fluid" alt=""/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="social">
						<h1 className="display-1">Rua José Sárria 178 Simonassi Colatina/ES</h1>
					</div>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer