import React, { useState } from 'react';
import Card from './components/card/Card';
import Form from './components/form/Form';
import './App.css';

function App() {
	const [values, setValues] = useState({})
	const handleSubmit = (values) => {
		setValues(values)
	}
	return (
		<>
			<Form setValues={setValues} handleSubmit={handleSubmit} />
			<Card {...values} />
		</>

	)










}

export default App;
