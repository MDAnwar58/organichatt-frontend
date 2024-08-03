import { useDispatch } from "react-redux";
import {
  category_id_remove,
  get_category_id,
  get_products,
} from "../_api/action";
import { useState } from "react";

export default function useProductsContext() {
  const [categorySlug, setCategorySlug] = useState("");
  const [subCategorySlug, setSubCategorySlug] = useState("");
  const [price, setPrice] = useState({
    min: "",
    max: "",
  });
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
  });
  const dispatch = useDispatch();
  const getProducts = (
    category_slug,
    sub_category_slug,
    min_price,
    max_price,
    min_price_range,
    max_price_range
  ) => {
    dispatch(
      get_products(
        category_slug,
        sub_category_slug,
        min_price,
        max_price,
        min_price_range,
        max_price_range
      )
    );
  };
  const getProductsWithCategorySlug = (category_slug) => {
    setCategorySlug(category_slug);
    dispatch(
      get_products(
        category_slug,
        "",
        price.min,
        price.max,
        priceRange.min,
        priceRange.max
      )
    );
  };
  const getProductsWithSubCategorySlug = (sub_category_slug) => {
    setSubCategorySlug(sub_category_slug);
    setCategorySlug("");
    dispatch(
      get_products(
        "",
        sub_category_slug,
        price.min,
        price.max,
        priceRange.min,
        priceRange.max
      )
    );
    // console.log(sub_category_slug);
  };
  const getProductWithMinAndMaxPrice = (minPrice, maxPrice) => {
    setPrice({
      min: minPrice,
      max: maxPrice,
    });
    dispatch(
      get_products(
        minPrice !== "" && maxPrice !== "" ? categorySlug : "",
        minPrice !== "" && maxPrice !== "" ? subCategorySlug : "",
        minPrice,
        maxPrice,
        minPrice !== "" && maxPrice !== "" ? priceRange.min : "",
        minPrice !== "" && maxPrice !== "" ? priceRange.max : ""
      )
    );
  };
  const getProductsWithMinAndMaxPriceRange = (minRangePrice, maxRangePrice) => {
    setPriceRange({
      min: minRangePrice,
      max: maxRangePrice,
    });
    dispatch(
      get_products(
        minRangePrice !== "" && maxRangePrice !== "" ? categorySlug : "",
        minRangePrice !== "" && maxRangePrice !== "" ? subCategorySlug : "",
        minRangePrice !== "" && maxRangePrice !== "" ? price.min : "",
        minRangePrice !== "" && maxRangePrice !== "" ? price.max : "",
        minRangePrice,
        maxRangePrice
      )
    );
  };
  const getCategoryId = (sub_category_slug) => {
    dispatch(get_category_id(sub_category_slug));
  };
  const categoryIdRmove = (nullArray) => {
    dispatch(category_id_remove(nullArray));
  };
  return {
    getProducts,
    categorySlug,
    setCategorySlug,
    subCategorySlug,
    setSubCategorySlug,
    getProductsWithCategorySlug,
    getProductWithMinAndMaxPrice,
    price,
    setPrice,
    getProductsWithMinAndMaxPriceRange,
    priceRange,
    getCategoryId,
    getProductsWithSubCategorySlug,
    categoryIdRmove,
    setPriceRange,
  };
}
