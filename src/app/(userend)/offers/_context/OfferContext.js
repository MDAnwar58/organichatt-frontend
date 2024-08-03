import React from "react";
import { useDispatch } from "react-redux";
import { get_offers } from "../_api/action";

export default function useOfferContext() {
  const dispatch = useDispatch();
  const getOffers = () => {
    dispatch(get_offers());
  };
  return { getOffers };
}
