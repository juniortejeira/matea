import React from "react"
import "./Select.css"
const Select = ({ options, error, label, name, handleChange }) => {
	return (
		<div className="select__ctn">
			<label>
				<p>{label}:</p>
				<select
					className={`select ${error ? "error" : ""}`}
					name={name}
					onChange={handleChange}
				>
					<option value="empty">Selecionar</option>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{error && <p className="select__error">{error}</p>}
			</label>
		</div>
	)
}

export default Select
