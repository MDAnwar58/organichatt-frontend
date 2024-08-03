import axiosClient from "../../../axios-client";
import { GET_CATEGORY_ID, GET_PRODUCTS } from "./actionType";

export const get_products =
  (
    category_slug,
    sub_category_slug,
    min_price,
    max_price,
    min_price_range,
    max_price_range
  ) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/all-products-get?category_slug=${
        category_slug !== null ? category_slug : ""
      }&sub_category_slug=${
        sub_category_slug !== null ? sub_category_slug : ""
      }&min_price=${min_price !== null ? min_price : ""}&max_price=${
        max_price !== null ? max_price : ""
      }&min_price_range=${
        min_price_range !== null ? min_price_range : ""
      }&max_price_range=${max_price_range !== null ? max_price_range : ""}`
    );
    console.log(response.data);
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.data,
    });
  };

export const get_category_id = (sub_category_slug) => async (dispatch) => {
  const response = await axiosClient.get(
    `/get-category-id?sub_category_slug=${sub_category_slug}`
  );
  dispatch({
    type: GET_CATEGORY_ID,
    payload: response.data,
  });
};

export const category_id_remove = (null_array) => async (dispatch) => {
  dispatch({
    type: GET_CATEGORY_ID,
    payload: null_array,
  });
};
