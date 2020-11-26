import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ formState, handleConfirm, handleFormStateChange }) => {
  return (
    <form className="form" onSubmit={handleConfirm}>
      <Input
        name="Imię"
        value={formState.name}
        handleChange={handleFormStateChange("name")}
        errorText={formState.nameError}
      />

      <Input
        name="Nazwisko"
        value={formState.lastName}
        handleChange={handleFormStateChange("lastName")}
        errorText={formState.lastNameError}
      />

      <Input
        name="Data urodzenia"
        value={formState.birthDate}
        handleChange={handleFormStateChange("birthDate")}
        errorText={formState.birthDateError}
        placeholder="YYYY-MM-DD"
      />
      <Button
        type="submit"
        style={{ fontWeight: "bold", backgroundColor: "#42ba96" }}
        title="Potwierdź"
      />
    </form>
  );
};

export default Form;
