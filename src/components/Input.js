import React from "react";

const Input = ({
  name,
  value,
  type = "text",
  handleChange,
  errorText,
  placeholder
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type={type}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      <div className="error">{errorText}</div>
    </div>
  );
};

export default Input;
