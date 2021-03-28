const toggleFormShowReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_FORM_SHOW":
      return action.payload;
    default:
      return state;
  }
};

export default toggleFormShowReducer;
