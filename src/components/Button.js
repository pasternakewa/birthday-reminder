import React from "react";

const Button = ({ title, handleChange, style, type }) => {
  return (
    <button
      className="new-person-button"
      onClick={handleChange}
      style={style}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
