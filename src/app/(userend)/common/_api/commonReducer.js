import {
  GET_ALL_CATEGORY_FOR_MANUS,
  GET_CART_PRODUCT_COUNT,
  GET_CARTS,
  GET_ERRORS,
  GET_FAVORITE_PRODUCT_COUNT,
  GET_FAVORITES,
  GET_PRODUCT_FOR_MODAL,
} from "./actionType";

const initialState = {
  categories: [],
  product: {},
  cart_count: 0,
  favorite_count: 0,
  favorites: [],
  carts: [],
  errors: {},
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_FOR_MANUS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCT_FOR_MODAL:
      return {
        ...state,
        product: action.payload,
      };
    case GET_CART_PRODUCT_COUNT:
      return {
        ...state,
        cart_count: action.payload,
      };
    case GET_FAVORITE_PRODUCT_COUNT:
      return {
        ...state,
        favorite_count: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case GET_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
