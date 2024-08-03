import axiosClient from "../../axios-client";
import {
  GET_COLLECTIONS,
  GET_HERO_BANNER,
  GET_OFFER_BANNERS,
  GET_OUR_CATEGORIES,
} from "./actionType";

export const get_banner = () => async (dispatch) => {
  const response = await axiosClient.get("/banner");
  dispatch({
    type: GET_HERO_BANNER,
    payload: response.data,
  });
};
export const get_our_categories = () => async (dispatch) => {
  const response = await axiosClient.get("/our-categories");
  dispatch({
    type: GET_OUR_CATEGORIES,
    payload: response.data,
  });
};
export const get_offer_banners = () => async (dispatch) => {
  const response = await axiosClient.get("/offer-banners");
  dispatch({
    type: GET_OFFER_BANNERS,
    payload: response.data,
  });
};
export const get_collections = () => async (dispatch) => {
  const response = await axiosClient.get("/collections");
  dispatch({
    type: GET_COLLECTIONS,
    payload: response.data.data,
  });
};
