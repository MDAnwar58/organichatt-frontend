import { GET_CATEGORY_ID, GET_PRODUCTS } from "./actionType";

// import {state}
const initialState = {
  products: [],
  category_id: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_CATEGORY_ID:
      return {
        ...state,
        category_id: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
