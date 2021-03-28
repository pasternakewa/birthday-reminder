const initialState = [
  { id: 1, name: "Leo", lastName: "DiCaprio", birthDate: "1974-11-11" },
  { id: 2, name: "Demi", lastName: "Moore", birthDate: "1962-11-11" },
  { id: 3, name: "Calista", lastName: "Flockhart", birthDate: "1964-11-11" }
];

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return state.reduce(
        (acc, curr) => [
          ...acc,
          curr.id !== action.payload.editId
            ? curr
            : { id: action.payload.editId, ...action.payload.formState }
        ],
        []
      );
    case "REMOVE_PERSON":
      return null;
    default:
      return state;
  }
};

export default peopleReducer;
