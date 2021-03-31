export const toggleFormShow = (payload) => ({
  type: "TOGGLE_FORM_SHOW",
  payload
});

export const setEditId = (id) => ({
  type: "SET_EDIT_ID",
  payload: id
});

export const removeEditId = () => ({
  type: "REMOVE_EDIT_ID"
});

export const setPeople = (payload) => ({
  type: "SET_PEOPLE",
  payload
});

export const removePerson = (id) => ({
  type: "REMOVE_PERSON",
  id
});

export const handleFormChange = (payload) => ({
  type: "HANDLE_FORM_CHANGE",
  payload
});

export const handleSetFormState = (payload) => ({
  type: "HANDLE_SET_FORM_STATE",
  payload
});

export const clearFormState = () => ({
  type: "CLEAR_FORM_STATE"
});
