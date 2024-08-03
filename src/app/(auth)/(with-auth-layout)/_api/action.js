import axiosClient from "../../../axios-client";
import { GET_EMAIL, GET_ERRORS, GET_MESSAGE } from "./actionType";
import { setToken } from "../../../../services/token";

export const signIn = (payload, router) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/sign-in`, payload);
    if (response.data.status === "sign in") {
      setToken("auth_user_token", response.data.data.token, 7);
      dispatch(getErrors([]));
      router.push("/");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

export const signUp = (payload, router, notify) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/sign-up`, payload);
    if (response.data.status === "success") {
      notify(response.data.status, response.data.msg);
      setTimeout(() => {
        setToken("auth_user_token", response.data.data.token, 7);
        dispatch(getErrors([]));
        router.push("/");
      }, 1500);
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

export const sendEmail = (payload) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/forget-password`, payload);
    if (response.data.status === "success") {
      dispatch(getMessages(response.data.msg));
      dispatch(getEmail(response.data.data.email));
      dispatch(getErrors([]));
    } else if (response.data.status === "fail") {
      dispatch(getMessages([]));
      dispatch(getEmail([]));
      dispatch(getErrors({ email: response.data.msg }));
    }
  } catch (error) {
    dispatch(getMessages([]));
    dispatch(getEmail([]));
    dispatch(getErrors(error.response.data.errors));
  }
};

export const resetPassword = (payload, router, notify) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/reset-password`, payload);
    if (response.data.status === "success") {
      notify(response.data.status, response.data.msg);
      router.push("/sign-in");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

export const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: errors,
  });
};
export const getMessages = (msg) => (dispatch) => {
  dispatch({
    type: GET_MESSAGE,
    payload: msg,
  });
};
export const getEmail = (email) => (dispatch) => {
  dispatch({
    type: GET_EMAIL,
    payload: email,
  });
};
