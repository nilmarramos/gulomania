import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

import "./home.css"
import CheckModal from './modal'

class Home extends Component{
	state = {
		search: ''
	}

	searchProduct = (e) => {
		e.preventDefault()
		if (this.state.search === '') {
			return
		}
		this.props.search(this.state.search)
		return this.props.history.push('/search')
	}
	updateSearch = (e) => {
		this.setState({search: e.target.value})
	}

	render () {
		return (
			<Fragment>
				<CheckModal	open={this.props.open} onClose={this.props.closeModal} />
				<section className="home">
					<form onSubmit={this.searchProduct} className="row text-center justify-content-center">
						<div className="col-10 col-md-6">
							<div className="form-group">
								<label className="title-form">Produtos</label>
								<input onChange={this.updateSearch} type="text" className="form-control form-control-lg"
								       placeholder="Buscar produtos"/>
							</div>
						</div>
					</form>
					<div className="row mt-3 ">
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/paes"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1524611476/pao.jpg"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Pães</span>
						</div>
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/bolos"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1524611476/bolo-4.jpg"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Bolos</span>
						</div>
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/brigadeiros"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1524611479/brigadeiors.png"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Brigadeiros</span>
						</div>
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/salgados"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1524611481/salgado.png"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Salgados</span>
						</div>
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/biscoitos"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1524611481/biscoitos.png"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Biscoitos</span>
						</div>
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/low-carb"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1526877509/pa%CC%83o-low-435x326.webp"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Low Carb</span>
						</div>
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/bebidas"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1524611484/refri.png"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Bebidas</span>
						</div>
						<div className="col-6 col-md-3 text-center">
							<Link to="/products/category/outros"><img
								src="https://res.cloudinary.com/nilmar/image/upload/v1524611475/outros.png"
								className="img-fluid img-thumbnail rounded-circle" alt=""/></Link>
							<span>Outros-></span>
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default Home