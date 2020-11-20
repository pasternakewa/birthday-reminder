import React from "react";

const Input = ({ name, value, type = "text", handleChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}</label>
      <input id={name} type={type} onChange={handleChange} value={value} />
    </div>
  );
};

export default Input;
