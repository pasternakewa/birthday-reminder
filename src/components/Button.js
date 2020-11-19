import React from "react";

const Button = ({ icon, handleChange }) => {
  return (
    <button className="new-person-button" onClick={handleChange}>
      <p>{icon}</p>
    </button>
  );
};

export default Button;
