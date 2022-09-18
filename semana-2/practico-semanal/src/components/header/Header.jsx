import React from "react"
import "./Header.css"
import logo from "../../assets/img/logo.webp"
const NavBar = () => {
	return (
		<nav className="navbar">
			<div>
				<img className="navbar__logo" src={logo} alt="LoremBooks logo" />
				<h1 className="navbar__title">LoremBooks</h1>
			</div>
		</nav>
	)
}

export default NavBar
