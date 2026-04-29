import axiosClient from "../../../axios-client";
import { GET_ORDER_SUMMARIES } from "./actionType";

export const get_order_summaries = (userId) => async (dispatch) => {
   const response = await axiosClient.get(`/order-items/${userId}`);
   dispatch({
      type: GET_ORDER_SUMMARIES,
      payload: response.data.data,
   });
};
