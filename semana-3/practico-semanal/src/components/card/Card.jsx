import React from "react"
import logo from "../../assets/img/logo-matea.jpg"
import "./Card.css"

const Card = ({
	name = "NOMBRE",
	lastname = "APELLIDO",
	job = "PUESTO",
	company = "EMPRESA",
}) => {
	return (
		<div className="card">
			<div className="card__header">
				<img className="card__img" src={logo} alt="logo de matea" />
			</div>
			<p className="card__name">
				{name.trim()} {lastname.trim()}
			</p>
			<p className="card__job">
				{job} en {company}
			</p>
		</div>
	)
}

export default Card
