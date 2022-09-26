import React, { useEffect, useRef, useState } from "react"
import "./Carrousel.css"
/* 
  El carrousel SIEMPRE muestra la segunda imagen del carrousel
*/

export const Carrousel = ({ images }) => {
	const [isAnimationFinished, setIsAnimationFinished] = useState(true)
	let carrouselRef = useRef("")

	useEffect(() => {
		/* 
      Al crearse el carrousel ubico la ultima foto en la primera posicion,
      para ver funcionamiento quitar overflow hidden
    */
		const carrousel = carrouselRef.current
		let carrouselImages = carrousel.children
		const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
		carrousel.insertAdjacentElement("afterbegin", lastCarrouselImage)
	}, [])

	function nextImg() {
		if (isAnimationFinished) {
			setIsAnimationFinished(false)
			const carrousel = carrouselRef.current
			let carrouselImages = carrousel.children
			carrousel.style.transition = "all 0.5s"
			/* 
        el carrousel pasa de mostrar la 2da imagen a la 3era
      */
			carrousel.style.left = "-200%"

			setTimeout(() => {
				/* 
          muevo la primer imagen al final, entonces la 2da se convierte en la 1era
          y la 3era en la 2da....
        */
				const firstCarrouselImage = carrouselImages[0]
				carrousel.insertAdjacentElement("beforeend", firstCarrouselImage)
				carrousel.style.transition = "all 0s"
				/* 
          vuelvo a mostrar la segunda imagen
        */
				carrousel.style.left = "-100%"
				setIsAnimationFinished(true)
			}, 500)
		}
	}

	function prevImg() {
		if (isAnimationFinished) {
			setIsAnimationFinished(false)

			const carrousel = carrouselRef.current
			let carrouselImages = carrousel.children
			carrousel.style.transition = "all 0.5s"
			/* 
        el carrousel pasa de mostrar la 2da imagen a la 1era
      */
			carrousel.style.left = "0"

			setTimeout(() => {
				const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
				/* 
          muevo la ultima imagen al principio, entonces la 1era se convierte en la 2da
          y la 2da en la 3era....
        */
				carrousel.insertAdjacentElement("afterbegin", lastCarrouselImage)
				carrousel.style.transition = "all 0s"
				carrousel.style.left = "-100%"
				setIsAnimationFinished(true)
			}, 500)
		}
	}

	return (
		<div className="carrousel-ctn">
			<div className="carrousel" ref={carrouselRef}>
				{images.map((url, index) => (
					<div className="carrousel__img-ctn" key={index}>
						<img alt="slider-img" src={url} />
					</div>
				))}
			</div>
			<div className="carrousel-controls">
				<button className="carrousel-btn-left" onClick={prevImg}>
					{"<"}
				</button>
				<button className="carrousel-btn-right" onClick={nextImg}>
					{">"}
				</button>
			</div>
		</div>
	)
}
