"use client";
import { Fragment, useState } from "react";
import Image from "./Image";
import "../../../../assets/css/collection-slider.css";
import "../../../../assets/css/index.css";
import NavLink from "./NavLink";
import { getToken } from "../../../../services/token";

export default function Product({
  setProductDetailsModalIsOpen,
  getProductForModal,
  product,
  productAddToCart,
  productAddToFavorite,
}) {
  const auth = getToken("auth_user_token");
  function isEmptyArray(arr) {
    return !arr || arr.length === 0;
  }
  function isEmptyString(str) {
    return !str || str.trim().length === 0;
  }

  return (
    <Fragment>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 product-card">
        <div className=" relative">
          <Image
            className="rounded-t-lg 5sm:h-80 sm:h-64 h-72 product-img mx-auto"
            src={product?.image_url}
            alt={product?.slug}
          />
          {product?.product_offers?.length > 0
            ? product?.product_offers.map((offer, index) => (
                <span
                  key={index}
                  className=" absolute top-0 right-0 me-1 mt-1 bg-red-500 text-white font-semibold text-xs py-1 px-1 rounded-lg"
                >
                  -{offer.percents}%
                </span>
              ))
            : product?.brand?.offers?.length > 0
            ? product?.brand?.offers.map((offer, index) => (
                <span
                  key={index}
                  className=" absolute top-0 right-0 me-1 mt-1 bg-red-500 text-white font-semibold text-xs py-1 px-1 rounded-lg"
                >
                  -{offer.percents}%
                </span>
              ))
            : product?.category?.offers?.length > 0
            ? product?.category?.offers.map((offer, index) => (
                <span
                  key={index}
                  className=" absolute top-0 right-0 me-1 mt-1 bg-red-500 text-white font-semibold text-xs py-1 px-1 rounded-lg"
                >
                  -{offer.percents}%
                </span>
              ))
            : product?.sub_category?.offers?.length > 0 &&
              product?.sub_category?.offers.map((offer, index) => (
                <span
                  key={index}
                  className=" absolute top-0 right-0 me-1 mt-1 bg-red-500 text-white font-semibold text-xs py-1 px-1 rounded-lg"
                >
                  -{offer.percents}%
                </span>
              ))}
          <div className=" relative bg-green-400/5 absolute top-0 h-full w-full text-end pe-3 rounded-t-lg product-img-effect transition-all">
            <NavLink
              href={`/product?slug=${product?.slug}`}
              className=" absolute bottom-0 right-0 me-1 mb-1 text-white bg-green-400 hover:bg-green-500 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-2 pt-1 pb-[.05rem] text-center text-md dark:focus:ring-green-300 product-details-icon"
            >
              <i className="fi fi-bs-eye"></i>
            </NavLink>
          </div>
        </div>
        <div className="px-5 pb-5">
          <NavLink href={`/product?slug=${product?.slug}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2">
              {product?.name}- {product?.id}
            </h5>
          </NavLink>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <div className="7xs:flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              <span>
                {product?.product_offers?.length > 0
                  ? product?.product_offers.map((offer) =>
                      Math.round(
                        product?.price - (product?.price * offer.percents) / 100
                      )
                    )
                  : product?.brand?.offers?.length > 0
                  ? product?.brand?.offers.map((offer) =>
                      Math.round(
                        product?.price - (product?.price * offer.percents) / 100
                      )
                    )
                  : product?.category?.offers?.length > 0
                  ? product?.category?.offers.map((offer) =>
                      Math.round(
                        product?.price - (product?.price * offer.percents) / 100
                      )
                    )
                  : product?.sub_category?.offers?.length > 0
                  ? product?.sub_category?.offers.map((offer) =>
                      Math.round(
                        product?.price - (product?.price * offer.percents) / 100
                      )
                    )
                  : product?.discount_price
                  ? product?.price - product?.discount_price
                  : product?.price}
                TK
              </span>
              <div className=" text-sm line-through text-gray-300">
                {isEmptyString(product?.discount_price) === false ? (
                  <span>{product?.price}TK</span>
                ) : isEmptyArray(product?.product_offers) === false ? (
                  <span>{product?.price}TK</span>
                ) : isEmptyArray(product?.brand?.offers) === false ? (
                  <span>{product?.price}TK</span>
                ) : isEmptyArray(product?.category?.offers) === false ? (
                  <span>{product?.price}TK</span>
                ) : (
                  isEmptyArray(product?.sub_category?.offers) === false && (
                    <span>{product?.price}TK</span>
                  )
                )}
              </div>
            </span>
            <ul className="flex items-center 7xs:justify-start justify-center 7xs:pt-0 pt-3">
              <li className="me-1">
                <button
                  type="button"
                  className="text-white bg-green-400 hover:bg-green-500 focus:ring-2 focus:outline-none focus:ring-green-300 7xs:text-[1rem] text-2xl font-medium rounded-lg 7xs:px-[0.6rem] px-3 7xs:pt-1 pt-2 7xs:pb-0 pb-[.10rem] text-center text-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() =>
                    productAddToFavorite(auth.user.userId, product.id)
                  }
                >
                  <i className="fi fi-bs-heart" />
                </button>
              </li>
              <li className="me-1">
                <button
                  type="button"
                  className="text-white bg-green-400 hover:bg-green-500 focus:ring-2 focus:outline-none focus:ring-green-300 7xs:text-[1rem] text-2xl font-medium rounded-lg 7xs:px-[0.6rem] px-3 7xs:pt-1 pt-2 7xs:pb-0 pb-[.10rem] text-center text-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-green-300"
                  onClick={() =>
                    productAddToCart(
                      auth.user.userId,
                      product.id,
                      1,
                      null,
                      null,
                      null
                    )
                  }
                >
                  <i className="fi fi-bs-cart-arrow-down" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    getProductForModal(product?.id);
                    setProductDetailsModalIsOpen(true);
                  }}
                  className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 7xs:text-[1rem] text-2xl font-medium rounded-lg 7xs:px-[0.6rem] px-3 7xs:pt-1 pt-2 7xs:pb-0 pb-[.10rem] text-center text-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className="fi fi-bs-icon-star" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
