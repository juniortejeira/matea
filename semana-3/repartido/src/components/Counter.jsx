import React, { useState } from "react"
import "./Counter.css"
const Counter = () => {
	const [counter, setCounter] = useState(0)
	const handleReset = () => {
		setCounter(0)
	}
	const handleClick = ({ target }) => {
		const value = parseInt(target.value)
		setCounter(counter + value)
	}
	return (
		<div>
			<p>
				Contador: <span className="counter__counter">{counter}</span>
			</p>
			<div className="counter__buttons-ctn">
				<button value="-5" onClick={handleClick}>
					-5
				</button>
				<button value="-1" onClick={handleClick}>
					-1
				</button>
				<button onClick={handleReset}>reiniciar</button>
				<button value="1" onClick={handleClick}>
					+1
				</button>
				<button value="5" onClick={handleClick}>
					+5
				</button>
			</div>
		</div>
	)
}

export default Counter
