const categoryState = {
  loader: false,
  categoryError: "",
  categorySuccessMessage: "",
};

export const dashCategoryReducers = (state = categoryState, action) => {
  const { type, payload } = action;

  if (type === "SET_LOADER") {
    return {
      ...state,
      loader: true,
    };
  }
  if (type === "CATEGORY_ADD_SUCCESS") {
    return {
      ...state,
      loader: false,
      categorySuccessMessage: payload.successMessage,
      categoryError: "",
    };
  }
  if (type === "CATEGORY_SUCCESS_MESSAGE_CLEAR") {
    return {
      ...state,
      categorySuccessMessage: "",
    };
  }
  if (type === "CATEGORY_ADD_FAIL") {
    return {
      ...state,
      loader: false,
      categoryError: payload.error,
      categorySuccessMessage: "",
    };
  }
  if (type === "CATEGORY_ERROR_MESSAGE_CLEAR") {
    return {
      ...state,
      categoryError: "",
    };
  }
  return state;
};