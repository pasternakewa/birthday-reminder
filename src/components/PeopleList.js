import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Form from "./Form";
import validate from "../validation";
import {
  toggleFormShow,
  setEditId,
  removeEditId,
  setPeople,
  removePerson,
  handleFormChange,
  handleSetFormState,
  clearFormState
} from "../actions";
import { getPropFromState } from "../selectors";

const PeopleList = () => {
  const editId = useSelector(getPropFromState)("editIdReducer");
  const peopleState = useSelector(getPropFromState)("peopleReducer");
  const isFormShown = useSelector(getPropFromState)("toggleFormShowReducer");
  const formState = useSelector(getPropFromState)("formReducer");

  const dispatch = useDispatch();

  let today = new Date().toISOString().slice(5, 10);

  const handleFormStateChange = (key) => (e) => {
    dispatch(handleFormChange({ key, e }));
  };

  const handleDeletePerson = (id) => {
    dispatch(removePerson(id));
  };

  const handleEditPerson = (id, name, lastName, birthDate) => {
    dispatch(setEditId(id));
    dispatch(toggleFormShow(true));
    dispatch(handleSetFormState({ name, lastName, birthDate }));
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    const err = validate(formState, dispatch, handleSetFormState);
    if (!err) {
      if (editId) {
        dispatch(setPeople({ editId, formState }));
      } else {
        dispatch(setPeople({ id: new Date().getTime(), formState }));
      }
      dispatch(clearFormState());
      dispatch(toggleFormShow(false));
    }
  };

  const clearForm = () => {
    if (isFormShown === false) {
      dispatch(clearFormState());
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
