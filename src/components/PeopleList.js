import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const people = [
  { id: 1, name: "Leo", lastName: "DiCaprio", birthDate: "1974-11-11" },
  { id: 2, name: "Demi", lastName: "Moore", birthDate: "1962-11-11" },
  { id: 3, name: "Calista", lastName: "Flockhart", birthDate: "1964-11-11" }
];

const PeopleList = () => {
  const [peopleState, setPeople] = useState([...people]);
  const [isFormShown, setIsFormShown] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    birthDate: ""
  });

  const handleDeletePerson = (id) => {
    setPeople(peopleState.filter((person) => person.id !== id));
  };

  const handleFormStateChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  const handleAddPerson = () => {
    setPeople([...peopleState, { id: new Date().getTime(), ...formState }]);
  };

  return (
    <div className="people-list-container">
      <div className="people-list">
        {peopleState.map(({ id, name, lastName, birthDate }) => (
          <div className="person" key={id}>
            <div className="person-image">
              {<i className="fas fa-user fa-7x"></i>}
            </div>
            <div className="person-data">
              <div style={{ fontWeight: "bold" }}>{`${name} ${lastName}`}</div>
              <div style={{ fontSize: 14 }}>{`Birthday: ${birthDate}`}</div>
            </div>
            <div className="person-buttons">
              <button className="person-button">
                {<i className="fas fa-pencil fa-xs"></i>}
              </button>
              <button
                className="person-button"
                onClick={() => handleDeletePerson(id)}
              >
                {<i className="fas fa-trash"></i>}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Button
        icon={
          isFormShown ? (
            <i className="fas fa-angle-double-up fa-7x"></i>
          ) : (
            <i className="fas fa-angle-double-down"></i>
          )
        }
        handleChange={() => setIsFormShown(!isFormShown)}
      />
      {isFormShown && (
        <div className="form">
          <Input
            name="Imię"
            value={formState.name}
            handleChange={handleFormStateChange("name")}
          />

          <Input
            name="Nazwisko"
            value={formState.lastName}
            handleChange={handleFormStateChange("lastName")}
          />

          <Input
            name="Data urodzenia"
            value={formState.birthDate}
            handleChange={handleFormStateChange("birthDate")}
          />
          <Button
            type="submit"
            icon={<i className="fas fa-angle-double-right"></i>}
            handleChange={handleAddPerson}
          />
        </div>
      )}
    </div>
  );
};

export default PeopleList;
