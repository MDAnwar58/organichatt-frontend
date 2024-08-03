import { GET_EMAIL, GET_ERRORS, GET_MESSAGE } from "./actionType";

const initialState = {
  errors: [],
  msg: "",
  email: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    case GET_MESSAGE:
      return {
        ...state,
        msg: action.payload,
      };

    case GET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
