import { useState, useEffect } from "react"
import "./Clock.css"
const Clock = () => {
	const [time, setTime] = useState({
		hours: "00",
		minutes: "00",
		seconds: "00",
	})
	useEffect(() => {
		const date = new Date()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()

		const interval = setInterval(() => {
			seconds++
			if (seconds > 59) {
				seconds = 0
				minutes++
				if (minutes > 59) {
					minutes = 0
					hours++
					if (hours > 23) {
						hours = 0
					}
				}
			}
			setTime({
				seconds,
				minutes,
				hours,
			})
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	const { hours, minutes, seconds } = time

	return (
		<div className="clock">
			<div className="clock__digit-ctn">
				<p>
					{Math.floor(hours / 10)}
					{hours % 10}
				</p>
				<span>horas</span>
			</div>
			<span>:</span>
			<div className="clock__digit-ctn">
				<p>
					{Math.floor(minutes / 10)}
					{minutes % 10}
				</p>
				<span>minutos</span>
			</div>
			<span>:</span>
			<div className="clock__digit-ctn">
				<p>
					{Math.floor(seconds / 10)}
					{seconds % 10}
				</p>
				<span>segundos</span>
			</div>
		</div>
	)
}

export default Clock
