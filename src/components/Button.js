import React from "react";

const Button = ({ text, handleChange }) => {
  return (
    <button className="new-person-button" onClick={handleChange}>
      {text}
    </button>
  );
};

export default Button;
