import {
  GET_ERRORS,
  GET_HERO_BANNER,
  GET_OFFER_BANNERS,
  GET_OUR_CATEGORIES,
  GET_COLLECTIONS,
} from "./actionType";
const initialState = {
  banner: {},
  categories: [],
  offers: [],
  collections: [],
  errors: [],
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO_BANNER:
      return {
        ...state,
        banner: action.payload,
      };
    case GET_OUR_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_OFFER_BANNERS:
      return {
        ...state,
        offers: action.payload,
      };
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
