const initialState = {
  name: "",
  nameError: "",
  lastName: "",
  lastNameError: "",
  birthDate: "",
  birthDateError: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_FORM_CHANGE":
      return {
        ...state,
        [action.payload.key]: action.payload.e.target.value,
        [`${action.payload.key}Error`]: ""
      };
    case "HANDLE_SET_FORM_STATE":
      return {
        name: action.payload.name,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate
      };
    case "HANDLE_SUBMIT_FORM":
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate
      };
    case "CLEAR_FORM_STATE":
      return initialState;
    default:
      return state;
  }
};

export default formReducer;
