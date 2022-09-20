import React from "react"
import "./Card.css"
const Card = ({ imgUrl, title, description }) => {
	return (
		<div className="card">
			<img className="card__img" src={imgUrl} alt={title} />
			<div className="card__info">
				<h3 className="card__title">{title}</h3>
				<p className="card__summary-txt">Summary</p>
				<p className="card__description">{description}</p>
			</div>
		</div>
	)
}

export default Card
