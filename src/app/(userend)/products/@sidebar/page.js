"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavLink from "../../common/components/NavLink";
import useProductsContext from "../_context/ProductsContext";

export default function Sidebar() {
  const {
    getProductsWithCategorySlug,
    categorySlug,
    setCategorySlug,
    getProductWithMinAndMaxPrice,
    getProductsWithMinAndMaxPriceRange,
    priceRange,
    subCategorySlug,
    setSubCategorySlug,
    getProductsWithSubCategorySlug,
    categoryIdRmove,
    setPriceRange,
    price,
    setPrice,
  } = useProductsContext();
  // const [price, setPrice] = useState(null);
  const min_price_range = useRef();
  const max_price_range = useRef();
  // const [subCategorySlug, setSubCategorySlug] = useState(null);
  const categories = useSelector((state) => state.commonData.categories);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const category_slug = queryParams.get("category_slug");
    const sub_category_slug = queryParams.get("sub_category_slug");
    setCategorySlug(category_slug);
    setSubCategorySlug(sub_category_slug);
  }, []);
  const category_id = useSelector((state) => state.productData.category_id);
  // Function to remove a specific query parameter
  function removeQueryParam(param) {
    // Get the current URL
    const url = new URL(window.location);

    if (
      url.searchParams.get("category_slug") !== null ||
      url.searchParams.get("sub_category_slug") !== null
    ) {
      // Remove the query parameter
      url.searchParams.delete(param);
      // Update the URL without reloading the page
      window.history.replaceState({}, document.title, url);
    }
  }
  return (
    <div className="md:bg-slate-50 md:shadow-sm md:border md:rounded-md">
      <div className="title bg-gray-100 border rounded-md border-gray-300 m-3 px-3 py-2 text-xl font-semibold text-gray-600">
        Categories
      </div>
      <ul className=" py-2 md:px-0 px-3">
        {categories?.length > 0 &&
          categories.map((category, index) =>
            categories?.length === index + 1 ? (
              <li key={index + 1}>
                <a
                  onClick={() => {
                    setCategorySlug((prev) =>
                      prev === category?.slug ? "" : category?.slug
                    );
                    setSubCategorySlug("");
                    categoryIdRmove([]);
                    removeQueryParam("category_slug");
                    removeQueryParam("sub_category_slug");
                    getProductsWithCategorySlug(
                      category?.slug === categorySlug ? "" : category?.slug
                    );
                  }}
                >
                  <div
                    className={` cursor-pointer ${
                      category?.slug === categorySlug &&
                      "bg-green-400 text-white font-semibold"
                    } hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md px-7 py-2 w-full`}
                  >
                    {category?.name}
                  </div>
                </a>
                {category.id === category_id &&
                  category?.sub_categories.length > 0 &&
                  category?.sub_categories.map((sub_category, index) => (
                    <ul key={index + 1}>
                      <li>
                        <a
                          onClick={() => {
                            setSubCategorySlug((prev) =>
                              prev === sub_category.slug
                                ? ""
                                : sub_category.slug
                            );
                            getProductsWithSubCategorySlug(
                              sub_category.slug === subCategorySlug
                                ? ""
                                : sub_category.slug
                            );
                            removeQueryParam("sub_category_slug");
                          }}
                        >
                          <div
                            className={`${
                              subCategorySlug === sub_category.slug &&
                              "bg-green-400 text-white font-semibold"
                            } cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md px-12 py-1 w-full`}
                          >
                            {sub_category.name}
                          </div>
                        </a>
                      </li>
                    </ul>
                  ))}
              </li>
            ) : (
              <li key={index + 1}>
                <a
                  onClick={() => {
                    setCategorySlug((prev) =>
                      prev === category?.slug ? "" : category?.slug
                    );
                    setSubCategorySlug("");
                    categoryIdRmove([]);
                    removeQueryParam("category_slug");
                    removeQueryParam("sub_category_slug");
                    getProductsWithCategorySlug(
                      category?.slug === categorySlug ? "" : category?.slug
                    );
                  }}
                >
                  <div
                    className={`${
                      category.slug === categorySlug &&
                      "bg-green-400 text-white font-semibold"
                    } cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md px-7 py-2 w-full`}
                  >
                    {category.name}
                  </div>
                </a>
                {/* subCategorySlug === sub_category.slug && ( */}
                {category.id === category_id &&
                  category?.sub_categories.length > 0 &&
                  category?.sub_categories.map((sub_category, index) => (
                    <ul key={index + 1}>
                      <li>
                        <a
                          onClick={() => {
                            setSubCategorySlug((prev) =>
                              prev === sub_category.slug
                                ? ""
                                : sub_category.slug
                            );
                            getProductsWithSubCategorySlug(
                              sub_category.slug === subCategorySlug
                                ? ""
                                : sub_category.slug
                            );
                            removeQueryParam("sub_category_slug");
                          }}
                        >
                          <div
                            className={`${
                              subCategorySlug === sub_category.slug &&
                              "bg-green-400 text-white font-semibold"
                            } cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md px-12 py-1 w-full`}
                          >
                            {sub_category.name}
                          </div>
                        </a>
                      </li>
                    </ul>
                  ))}
              </li>
            )
          )}
      </ul>
      <div className="title bg-gray-100 border rounded-md border-gray-300 m-3 px-3 py-2 text-xl font-semibold text-gray-600">
        Rating
      </div>
      <ul className=" py-2 md:px-0 px-3">
        <li>
          <a>
            <div className=" hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full">
              sdf
            </div>
          </a>
        </li>
        <li>
          <a>
            <div className=" hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full">
              sdf
            </div>
          </a>
        </li>
        <li>
          <a>
            <div className=" hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full">
              sdf
            </div>
          </a>
        </li>
        <li>
          <a>
            <div className=" hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full">
              sdf
            </div>
          </a>
        </li>
      </ul>
      <div className="title bg-gray-100  border rounded-md border-gray-300 m-3 px-3 py-2 text-xl font-semibold text-gray-600">
        Price Range
      </div>
      <ul className=" py-2 md:px-0 px-3">
        <li>
          <a
            onClick={() => {
              setPrice((prev) => ({
                min: prev.min === 50 ? "" : 50,
                max: "",
              }));
              getProductWithMinAndMaxPrice(
                price.min === 50 ? "" : 50,
                price.min === 50 ? "" : 100
              );
            }}
          >
            <div
              className={`${
                price.min === 50 && "bg-green-400 text-white font-semibold"
              } cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full`}
            >
              50TK - 100TK
            </div>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setPrice((prev) => ({
                min: prev.min === 100 ? "" : 100,
                max: "",
              }));
              getProductWithMinAndMaxPrice(
                price.min === 100 ? "" : 100,
                price.min === 100 ? "" : 200
              );
            }}
          >
            <div
              className={`${
                price.min === 100 && "bg-green-400 text-white font-semibold"
              } cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full`}
            >
              100TK - 200TK
            </div>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setPrice((prev) => ({
                min: prev.min === 200 ? "" : 200,
                max: "",
              }));
              getProductWithMinAndMaxPrice(
                price.min === 200 ? "" : 200,
                price.min === 200 ? "" : 300
              );
            }}
          >
            <div
              className={`${
                price.min === 200 && "bg-green-400 text-white font-semibold"
              } cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full`}
            >
              200TK - 300TK
            </div>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setPrice((prev) => ({
                min: prev.min === 300 ? "" : 300,
                max: "",
              }));
              getProductWithMinAndMaxPrice(
                price.min === 300 ? "" : 300,
                price.min === 300 ? "" : 450
              );
            }}
          >
            <div
              className={`${
                price.min === 300 && "bg-green-400 text-white font-semibold"
              } cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold rounded-md text-md font-medium px-7 py-2 w-full`}
            >
              300TK - 450TK
            </div>
          </a>
        </li>
      </ul>
      <ul className=" py-2 px-3">
        <li>
          <div className="flex w-full gap-1">
            <div className="w-6/12">
              <label htmlFor="" className=" capitalize">
                min price
              </label>
              <input
                type="number"
                ref={min_price_range}
                className="w-full rounded-md border border-1 border-gray-300"
                onChange={(e) =>
                  getProductsWithMinAndMaxPriceRange(
                    e.target.value,
                    priceRange.max
                  )
                }
              />
            </div>
            <div className="w-6/12">
              <label htmlFor="" className=" capitalize">
                max price
              </label>
              <input
                type="number"
                ref={max_price_range}
                className="w-full rounded-md border border-1 border-gray-300"
                onChange={(e) =>
                  getProductsWithMinAndMaxPriceRange(
                    priceRange.min,
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <div className="text-end">
            <button
              type="button"
              className=" uppercase bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded-md mt-1"
              onClick={() => {
                setCategorySlug("");
                setSubCategorySlug("");
                getProductsWithCategorySlug("");
                getProductsWithSubCategorySlug("");

                categoryIdRmove([]);
                removeQueryParam("category_slug");
                removeQueryParam("sub_category_slug");
                setPrice({
                  min: "",
                  max: "",
                });
                getProductWithMinAndMaxPrice("", "");
                setPriceRange({
                  min: "",
                  max: "",
                });
                min_price_range.current.value = "";
                max_price_range.current.value = "";
                getProductsWithMinAndMaxPriceRange("", "");
              }}
            >
              reset filter
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
