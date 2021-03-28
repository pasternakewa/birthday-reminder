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
