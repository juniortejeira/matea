import React, { useState } from "react"
import useForm from "../../hooks/useForm"
import Input from "../input/Input"
import Select from "../select/Select"
import "./Form.css"
function Form({ handleSubmit }) {
	const [values, handleInputChange] = useForm({
		name: "",
		lastname: "",
		ci: "",
		age: "",
		email: "",
		city: "empty",
		neighborhood: "",
		phone: "",
		job: "empty",
		company: "",
	})
	const [errors, setErrors] = useState({})
	const {
		name,
		lastname,
		ci,
		age,
		email,
		city,
		neighborhood,
		phone,
		job,
		company,
	} = values

	const onSumbit = (events) => {
		events.preventDefault()
		let errors = {}
		if (!/([A-Z]{1,30})/gi.test(name)) {
			errors.name = "Máx. 30 caracteres."
		}
		if (!/([A-Z]{1,30})/gi.test(lastname)) {
			errors.lastname = "Máx. 30 caracteres."
		}
		if (!/([1-9][0-9]{7})/.test(ci)) {
			errors.ci = "La cedula debe contener 8 digitos."
		}
		if (age < 0 || age === "") {
			errors.age = "Edad invalida"
		}
		if (!/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/.test(email)) {
			errors.email = "No debe contener mayusculas ni espacios."
		}
		if (!/^[0-9]{9}$/.test(phone)) {
			errors.phone = "El número debe contener 9 digitos."
		}
		if (!/^[a-z]+$/gi.test(neighborhood)) {
			errors.neighborhood = "Ciudad invalida."
		}
		if (city === "empty") {
			errors.city = "Seleciona un departamento"
		}
		if (job === "empty") {
			errors.job = "Seleciona un puesto"
		}
		if (company.length === 0) {
			errors.company = "Ingresa una empresa"
		}

		if (
			!errors.name &&
			!errors.lastname &&
			!errors.ci &&
			!errors.age &&
			!errors.email &&
			!errors.phone &&
			!errors.neighborhood &&
			!errors.city &&
			!errors.job &&
			!errors.company
		) {
			handleSubmit(values)
		}
		setErrors(errors)
	}
	const jobs = [
		"Selecionar",
		"Diseñador",
		"Programador",
		"Analista",
		"Ingeniero",
	]
	const cities = [
		"Artigas",
		"Canelones",
		"Cerro Largo",
		"Colonia",
		"Durazno",
		"Flores",
		"Florida",
		"Lavalleja",
		"Maldonado",
		"Montevideo",
		"Paysandú",
		"Río Negro",
		"Rivera",
		"Rocha",
		"Salto",
		"San José",
		"Soriano",
		"Tacuarembó",
		"Treinta y Tres",
	]
	return (
		<form onSubmit={onSumbit} className="form">
			<div className="form__group">
				<Input
					onChange={handleInputChange}
					label="Nombre"
					value={name}
					name="name"
					placeholder="Nombre"
					error={errors.name}
				/>
				<Input
					onChange={handleInputChange}
					label="Apellido"
					value={lastname}
					name="lastname"
					placeholder="Apellido"
					error={errors.lastname}
				/>
			</div>
			<div className="form__group">
				<Input
					onChange={handleInputChange}
					label="Cedula"
					value={ci}
					name="ci"
					placeholder="Cedula"
					type="number"
					error={errors.ci}
				/>
				<Input
					onChange={handleInputChange}
					label="Edad"
					value={age}
					name="age"
					placeholder="Edad"
					type="number"
					min="1"
					error={errors.age}
				/>
			</div>
			<div className="form__group">
				<Input
					onChange={handleInputChange}
					label="Correo Electronico"
					value={email}
					name="email"
					placeholder="Email"
					type="email"
					error={errors.email}
				/>
				<Select
					handleChange={handleInputChange}
					options={jobs}
					name="job"
					label="Puesto"
					error={errors.job}
				/>
			</div>
			<div className="form__group">
				<Input
					onChange={handleInputChange}
					label="Empresa"
					value={company}
					name="company"
					placeholder="Trabajo"
					error={errors.company}
				/>
				<Input
					onChange={handleInputChange}
					label="Celular"
					value={phone}
					name="phone"
					placeholder="Celular"
					type="number"
					error={errors.phone}
				/>
			</div>
			<div className="form__group">
				<Input
					onChange={handleInputChange}
					label="Barrio"
					value={neighborhood}
					name="neighborhood"
					placeholder="Barrio"
					error={errors.neighborhood}
				/>
				<Select
					handleChange={handleInputChange}
					options={cities}
					name="city"
					label="Departamento"
					error={errors.city}
				/>
			</div>

			<button>Crear Tarjeta</button>
		</form>
	)
}

export default Form
