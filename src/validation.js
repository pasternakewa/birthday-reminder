const validate = (formState, dispatch, handleSetFormState) => {
  let isError = false;
  const errors = [];
  const dateRegex = /^(19[2-9][0-9]|20[0-2][0-9])[-/.](0?[1-9]|1[0-2])[-/.](0?[1-9]|[12][0-9]|3[01])$/gim;

  //name validation
  if (formState.name.length < 3) {
    isError = true;
    errors.nameError = "Imię za krótkie";
  } else if (formState.name.length > 18) {
    isError = true;
    errors.nameError = "Imię za długie. Max 18 znaków.";
  } else {
    isError = false;
    errors.nameError = "";
  }

  //lastName validation
  if (formState.lastName.length < 3) {
    isError = true;
    errors.lastNameError = "Nazwisko za krótkie.";
  } else if (formState.lastName.length > 18) {
    isError = true;
    errors.lastNameError = "Nazwisko za długie. Max 18 znaków.";
  } else {
    isError = false;
    errors.lastNameError = "";
  }

  //birthDate validation
  if (!dateRegex.test(formState.birthDate)) {
    isError = true;
    errors.birthDateError = "Niepoprawy format daty";
  }

  dispatch(handleSetFormState({ ...formState, ...errors }));
  return isError;
};

export default validate;
