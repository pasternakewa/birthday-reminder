import React, { useState } from "react";
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

  return (
    <div className="page">
      <div className="people-list">
        {peopleState.map(({ id, name, lastName, birthDate }) => (
          <div className="person" key={id}>
            <img
              style={{ height: "50px", borderRadius: "25px", marginRight: 10 }}
              src="https://cdn.onlinewebfonts.com/svg/img_184513.png"
              alt="person"
            ></img>
            <div
              style={{ display: "flex", flexDirection: "column", marginTop: 6 }}
            >
              <div>{`${name} ${lastName}`}</div>
              <div>{`Birthday: ${birthDate}`}</div>
            </div>
            <button className="person-button">
              <img
                style={{ height: "32px", borderRadius: "16px" }}
                src="https://www.kindpng.com/picc/m/79-793180_edit-round-icon-png-png-download-round-edit.png"
                alt="edit"
              ></img>
            </button>
            <button
              className="person-button"
              onClick={() => handleDeletePerson(id)}
            >
              <img
                style={{ height: "28px", borderRadius: "14px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMdX3UpUCzG50K3uTFEIb13KZVkmsMESwM3Jf5wZ8-ksXIJ6PuuH6ksWKh3KzCk3t1nB1y0v4KcAlUISdkVpGqwJBx0sgpdviai-hylbI&usqp=CAU&ec=45725302"
                alt="delete"
              ></img>
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 6 }}>
        <button
          className="person-button"
          style={{ border: "1px solid black" }}
          onClick={() => setIsFormShown(!isFormShown)}
        >
          +New
        </button>
      </div>
      {isFormShown && <div>
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
        <button
          className="person-button"
          style={{ border: "1px solid black", marginTop: 6 }}
        >
          Dodaj
        </button>
      </div>}
    </div>
  );
};

export default PeopleList;
