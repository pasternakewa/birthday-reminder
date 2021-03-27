const editIdReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_EDIT_ID":
      return action.payload;
    case "REMOVE_EDIT_ID":
      return null;
    default:
      return state;
  }
};

export default editIdReducer;
