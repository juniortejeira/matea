import React from "react";
import "./Input.css"

const Input = ({ onChange, type, placeholder, name, error, value, label }) => {

    return (
        <div className="input__ctn">
            <label>
                <p>
                    {label}:
                </p>
                <input
                    name={name}
                    type={type}
                    className={`input ${error ? "error" : ""}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
            {
                error && <p className="input__error">{error}</p>
            }
        </div>
    )
}







export default Input;