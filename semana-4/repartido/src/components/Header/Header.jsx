import React from "react"
import "./Header.css"
const Header = ({ handleModal }) => {
	return (
		<header className="header">
			<div className="header__ctn">
				<p className="header__title">Repartido 3</p>
				<button onClick={handleModal}>Abrir Modal</button>
			</div>
		</header>
	)
}

export default Header
