import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Form from "./Form";
import validate from "../validation";
import { toggleFormShow, setEditId, removeEditId, setPeople } from "../actions";

const PeopleList = () => {
  // const [peopleState, setPeople] = useState([...people]);
  const [formState, setFormState] = useState({
    name: "",
    nameError: "",
    lastName: "",
    lastNameError: "",
    birthDate: "",
    birthDateError: ""
  });

  let today = new Date().toISOString().slice(5, 10);
  const dispatch = useDispatch();
  const isFormShown = useSelector((state) => {
    const { formShowReducer } = state;
    return formShowReducer;
  });
  const editId = useSelector((state) => state.editIdReducer);
  const peopleState = useSelector((state) => state.peopleReducer);

  const handleFormStateChange = (key) => (e) => {
    setFormState({ ...formState, [key]: e.target.value, [`${key}Error`]: "" });
  };

  const handleDeletePerson = (id) => {
    dispatch(setPeople(peopleState.filter((person) => person.id !== id)));
  };

  const handleEditPerson = (id, name, lastName, birthDate) => {
    dispatch(setEditId(id));
    dispatch(toggleFormShow(true));
    setFormState({ name, lastName, birthDate });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    const err = validate(formState, setFormState);
    if (!err) {
      if (editId) {
        dispatch(setPeople({ editId, formState }));
      } else {
        dispatch(setPeople({ id: new Date().getTime(), ...formState }));
        dispatch(removeEditId());
      }
      setFormState({
        name: "",
        lastName: "",
        birthDate: ""
      });
      dispatch(toggleFormShow(false));
    }
  };

  const clearForm = () => {
    if (isFormShown === false) {
      setFormState({ name: "", lastName: "", birthDate: "" });
      dispatch(removeEditId());
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
          dispatch(toggleFormShow(!isFormShown));
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
