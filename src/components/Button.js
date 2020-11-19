import React from "react";

const Button = ({ icon, handleChange }) => {
  return (
    <button className="new-person-button" onClick={handleChange}>
      {icon}
    </button>
  );
};

export default Button;
