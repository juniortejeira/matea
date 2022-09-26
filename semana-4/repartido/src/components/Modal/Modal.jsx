import React, { useEffect } from "react"
import "./Modal.css"
const Modal = ({ handleCloseModal }) => {
	useEffect(() => {
		const handlePresESC = (e) => {
			if (e.key === "Escape") handleCloseModal()
		}
		window.addEventListener("keydown", handlePresESC)

		return () => {
			window.removeEventListener("keydown", handlePresESC)
		}
	})

	return (
		<div className="modal">
			<div className="modal__ctn">
				<button className="modal__close-btn" onClick={handleCloseModal}>
					X
				</button>
				<div className="modal__form">
					<img
						className="modal__img"
						src="https://raw.githubusercontent.com/sebas-pena/store/frontend/management-app/src/assets/images/logo.png"
					/>
					<label>
						<p>Correo Electornico</p>
						<input placeholder="Correo Electornico" />
					</label>
					<label>
						<p>Contraseña</p>
						<input placeholder="Contraseña" type="password" />
					</label>
					<button className="modal__send" onClick={handleCloseModal}>
						Iniciar Sesion
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
