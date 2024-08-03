import { GET_OFFERS } from "./actionType";

const initialState = {
  offers: [],
};
const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export default offerReducer;
