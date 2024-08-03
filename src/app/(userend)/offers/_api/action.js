import axiosClient from "../../../axios-client";
import { GET_OFFERS } from "./actionType";

export const get_offers = () => async (dispatch) => {
  const response = await axiosClient.get(`/all-offers-get`);
  dispatch({
    type: GET_OFFERS,
    payload: response.data,
  });
};
