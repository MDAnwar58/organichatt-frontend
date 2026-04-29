import { GET_ORDER_SUMMARIES } from "./actionType";

const initialState = {
   order_summaries: [],
};

const OrderReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ORDER_SUMMARIES:
         return {
            ...state,
            order_summaries: action.payload,
         };
      default:
         return state;
   }
};

export default OrderReducer;
