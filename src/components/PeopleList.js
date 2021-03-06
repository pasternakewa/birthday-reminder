import React, { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import validate from "../validation";

const people = [
  { id: 1, name: "Leo", lastName: "DiCaprio", birthDate: "1974-11-11" },
  { id: 2, name: "Demi", lastName: "Moore", birthDate: "1962-11-11" },
  { id: 3, name: "Calista", lastName: "Flockhart", birthDate: "1964-11-11" }
];

const PeopleList = () => {
  const [peopleState, setPeople] = useState([...people]);
  const [isFormShown, setIsFormShown] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    nameError: "",
    lastName: "",
    lastNameError: "",
    birthDate: "",
    birthDateError: ""
  });

  let today = new Date().toISOString().slice(5, 10);

  const handleFormStateChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value, [`${key}Error`]: "" });
  };

  const handleDeletePerson = (id) => {
    setPeople(peopleState.filter((person) => person.id !== id));
  };

  const handleEditPerson = (id, name, lastName, birthDate) => {
    setEditId(id);
    setIsFormShown(true);
    setFormState({ name, lastName, birthDate });
  };

  const handleConfirm = () => {
    event.preventDefault();
    const err = validate(formState, setFormState);
    if (!err) {
      if (editId) {
        const updatedPeopleState = peopleState.reduce(
          (acc, curr) => [
            ...acc,
            curr.id !== editId ? curr : { ...formState, id: editId }
          ],
          []
        );
        setPeople(updatedPeopleState);
      } else {
        setPeople([...peopleState, { id: new Date().getTime(), ...formState }]);
        setEditId(null);
      }
      setFormState({
        name: "",
        lastName: "",
        birthDate: ""
      });
      setIsFormShown(false);
    }
  };

  const clearForm = () => {
    if (isFormShown === false) {
      setFormState({ name: "", lastName: "", birthDate: "" });
      setEditId(null);
    }
  };

  return (
    <div className="people-list-container">
      <div className="people-list">
        {peopleState.map(({ id, name, lastName, birthDate }) => (
          <div className="person" key={id}>
            <div className="person-image">
              <i className="fas fa-user"></i>
            </div>
            <div className="person-data">
              <div style={{ fontWeight: "bold" }}>{`${name} ${lastName}`}</div>
              <div
                style={
                  birthDate.slice(5, 10) === today
                    ? { fontSize: 14, color: "#ba88eb", fontWeight: "bold" }
                    : { fontSize: 14, color: "gray" }
                }
              >{`Birthday: ${birthDate}`}</div>
            </div>
            <div className="person-buttons">
              <i
                onClick={() => handleEditPerson(id, name, lastName, birthDate)}
                className="fas fa-pencil person-button"
              ></i>
              <i
                onClick={() => handleDeletePerson(id)}
                className="fas fa-trash person-button"
              ></i>
            </div>
          </div>
        ))}
      </div>
      <Button
        title={
          isFormShown ? (
            <i className="fas fa-angle-double-up"></i>
          ) : (
            <i className="fas fa-user-plus"></i>
          )
        }
        handleChange={() => {
          setIsFormShown(!isFormShown);
          clearForm();
        }}
      />
      {isFormShown && (
        <Form
          formState={formState}
          handleConfirm={handleConfirm}
          handleFormStateChange={handleFormStateChange}
        />
      )}
    </div>
  );
};

export default PeopleList;
