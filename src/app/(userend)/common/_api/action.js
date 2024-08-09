import axiosClient from "../../../axios-client";
import {
  GET_ALL_CATEGORY_FOR_MANUS,
  GET_CART_PRODUCT_COUNT,
  GET_CARTS,
  GET_FAVORITE_PRODUCT_COUNT,
  GET_FAVORITES,
  GET_PRODUCT_FOR_MODAL,
} from "./actionType";

export const getCategoriesForManus = () => async (dispatch) => {
  const response = await axiosClient.get("/all-category-get-for-manus");

  dispatch({
    type: GET_ALL_CATEGORY_FOR_MANUS,
    payload: response.data.data,
  });
};
// write a function and that function name is get_product_for_modal
export const get_product_for_modal = (id) => async (dispatch) => {
  const response = await axiosClient.get(`/modal-product/${id}`);
  dispatch({
    type: GET_PRODUCT_FOR_MODAL,
    payload: response.data.data,
  });
};

export const remove_product_from_modal = (object) => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_FOR_MODAL,
    payload: object,
  });
};

export const get_carts = (userId) => async (dispatch) => {
  const response = await axiosClient.get(`/get-carts/${userId}`);
  dispatch({
    type: GET_CARTS,
    payload: response.data.data,
  });
};
export const product_add_to_cart =
  (user_id, formData, notify) => async (dispatch) => {
    dispatch(cart_clear([]));
    const response = await axiosClient.post(
      `/product-add-to-cart/${user_id}`,
      formData
    );
    // console.log(response.data);
    if (response.data.status) {
      notify(response.data.status, response.data.msg);
      dispatch(cart_product_count(user_id));
      dispatch(get_carts(user_id));
      dispatch(get_favorites(user_id));
    }
  };
export const cart_product_qty_increment =
  (id, qty, product_id, user_id, notify) => async (dispatch) => {
    const response = await axiosClient.post(
      `/cart-product-qty-increment/${id}`,
      { product_id: product_id, qty: qty }
    );
    console.log(response.data);
    if (response.data.status === "success") {
      dispatch(get_carts(user_id));
    } else if (response.data.status === "fail") {
      notify(response.data.status, response.data.msg);
    }
  };
export const cart_product_qty_decrement =
  (id, qty, user_id, notify) => async (dispatch) => {
    const response = await axiosClient.post(
      `/cart-product-qty-decrement/${id}`,
      {
        qty: qty,
      }
    );
    if (response.data.status === "success") {
      dispatch(get_carts(user_id));
    } else if (response.data.status === "fail") {
      notify(response.data.status, response.data.msg);
    }
  };
export const cart_product_count = (userId) => async (dispatch) => {
  const response = await axiosClient.get(`/cart-product-count/${userId}`);
  dispatch({
    type: GET_CART_PRODUCT_COUNT,
    payload: response.data,
  });
};
export const remove_cart_item = (id, userId, notify) => async (dispatch) => {
  const response = await axiosClient.get(`/remove-product-in-cart-list/${id}`);
  if (response.data.status === "success") {
    notify(response.data.status, response.data.msg);
    dispatch(get_carts(userId));
    dispatch(cart_product_count(userId));
  }
};
export const cart_clear = (data) => (dispatch) => {
  dispatch({
    type: GET_CARTS,
    payload: data,
  });
};

export const product_add_to_favorite =
  (userId, formData, notify) => async (dispatch) => {
    const response = await axiosClient.post(
      `/product-add-to-favorite/${userId}`,
      formData
    );
    if (response.data.status) {
      notify(response.data.status, response.data.msg);
      dispatch(favorite_product_count(userId));
      dispatch(get_favorites(userId));
    }
  };

export const favorite_product_count = (userId) => async (dispatch) => {
  const response = await axiosClient.get(`/favorite-product-count/${userId}`);
  dispatch({
    type: GET_FAVORITE_PRODUCT_COUNT,
    payload: response.data,
  });
};

export const get_favorites = (userId) => async (dispatch) => {
  const response = await axiosClient.get(`/get-favorites/${userId}`);
  dispatch({ type: GET_FAVORITES, payload: response.data.data });
};

export const remove_fovrite_item = (id, userId, notify) => async (dispatch) => {
  const response = await axiosClient.get(
    `/remove-product-in-favorite-list/${id}`
  );
  if (response.data.status === "success") {
    notify(response.data.status, response.data.msg);
    dispatch(get_favorites(userId));
  }
};

export const checkout =
  (user_id, cart_ids, notify, router) => async (dispatch) => {
    const response = await axiosClient.post(`/checkout/${user_id}`, {
      cart_ids: cart_ids,
    });
    // console.log(response.data);
    if (response.data.status === "success") {
      notify(response.data.status, response.data.msg);
      router.push("/order");
    }
  };
