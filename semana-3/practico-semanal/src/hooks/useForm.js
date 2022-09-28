import { useState } from "react"

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log({ name, value })
    setValues({ ...values, [name]: value })
  }
  return [values, handleInputChange]
}

export default useForm