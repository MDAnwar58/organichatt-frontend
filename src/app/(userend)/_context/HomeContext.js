import React from "react";
import { useDispatch } from "react-redux";
import {
  get_banner,
  get_collections,
  get_offer_banners,
  get_our_categories,
} from "../_api/action";

export default function useHomeContext() {
  const dispatch = useDispatch();
  const getBanner = () => {
    dispatch(get_banner());
  };
  const getOurCategories = () => {
    dispatch(get_our_categories());
  };
  const getOfferBanners = () => {
    dispatch(get_offer_banners());
  };
  const getCollections = () => {
    dispatch(get_collections());
  };
  return { getBanner, getOurCategories, getOfferBanners, getCollections };
}
