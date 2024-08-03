import React, { Fragment } from "react";
import Image from "./Image";
import useCommonContext from "../_context/CommonContext";
import { getToken } from "../../../../services/token";

export default function FavoriteItem({ favorite }) {
  const { removeFavoriteItem, productAddToCart } = useCommonContext();
  const auth = getToken("auth_user_token");
  function isEmptyArray(arr) {
    return !arr || arr.length === 0;
  }
  function isEmptyString(str) {
    return !str || str.trim().length === 0;
  }
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4 relative">
        <Image
          className="flex-shrink-0 sm:w-32 sm:h-32 w-20 h-20 object-cover dark:border rounded outline-none  dark:bg-gray-500"
          src={favorite?.product?.image_url}
          alt={favorite?.product?.name}
        />
        {favorite?.product?.offers?.length > 0
          ? favorite?.product?.offers.map((offer, index) => (
              <div
                key={index}
                className="sm:w-32 sm:h-32 w-20 h-20 absolute top-0 left-0"
              >
                <span className="bg-red-500 text-white rounded-lg px-1 sm:py-1 py-[.10rem] font-semibold sm:text-xs text-[.55rem] absolute top-0 right-1">
                  -{offer?.percents}%
                </span>
              </div>
            ))
          : favorite?.product?.brand?.offers?.length > 0
          ? favorite?.product?.brand?.offers.map((offer, index) => (
              <div
                key={index}
                className="sm:w-32 sm:h-32 w-20 h-20 absolute top-0 left-0"
              >
                <span className="bg-red-500 text-white rounded-lg px-1 sm:py-1 py-[.10rem] font-semibold sm:text-xs text-[.55rem] absolute top-0 right-1">
                  -{offer?.percents}%
                </span>
              </div>
            ))
          : favorite?.product?.category?.offers?.length > 0
          ? favorite?.product?.category?.offers.map((offer, index) => (
              <div
                key={index}
                className="sm:w-32 sm:h-32 w-20 h-20 absolute top-0 left-0"
              >
                <span className="bg-red-500 text-white rounded-lg px-1 sm:py-1 py-[.10rem] font-semibold sm:text-xs text-[.55rem] absolute top-0 right-1">
                  -{offer?.percents}%
                </span>
              </div>
            ))
          : favorite?.product?.sub_category?.offers?.length > 0
          ? favorite?.product?.sub_category?.offers.map((offer, index) => (
              <div
                key={index}
                className="sm:w-32 sm:h-32 w-20 h-20 absolute top-0 left-0"
              >
                <span className="bg-red-500 text-white rounded-lg px-1 sm:py-1 py-[.10rem] font-semibold sm:text-xs text-[.55rem] absolute top-0 right-1">
                  -{offer?.percents}%
                </span>
              </div>
            ))
          : null}
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {favorite?.product?.name}
              </h3>
              <p className="text-sm dark:text-gray-600">
                Quantity: - {favorite?.product?.available_quantity}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                {!isEmptyArray(favorite?.product?.offers)
                  ? favorite?.product?.offers.map((offer) =>
                      Math.round(
                        favorite?.product?.price -
                          (favorite?.product?.price * offer.percents) / 100
                      )
                    )
                  : !isEmptyArray(favorite?.product?.brand?.offers)
                  ? favorite?.product?.brand?.offers.map((offer) =>
                      Math.round(
                        favorite?.product?.price -
                          (favorite?.product?.price * offer.percents) / 100
                      )
                    )
                  : !isEmptyArray(favorite?.product?.category?.offers)
                  ? favorite?.product?.category?.offers.map((offer) =>
                      Math.round(
                        favorite?.product?.price -
                          (favorite?.product?.price * offer.percents) / 100
                      )
                    )
                  : !isEmptyArray(favorite?.product?.sub_category?.offers)
                  ? favorite?.product?.sub_category?.offers.map((offer) =>
                      Math.round(
                        favorite?.product?.price -
                          (favorite?.product?.price * offer.percents) / 100
                      )
                    )
                  : !isEmptyString(favorite?.product?.discount_price)
                  ? favorite?.product?.price - favorite?.product?.discount_price
                  : favorite?.product?.price}
                TK
              </p>
              {!isEmptyArray(favorite?.product?.offers) ||
              !isEmptyArray(favorite?.product?.brand?.offers) ||
              !isEmptyArray(favorite?.product?.category?.offers) ||
              !isEmptyArray(favorite?.product?.sub_category?.offers) ||
              !isEmptyString(favorite?.product?.discount_price) ? (
                <p className="text-sm line-through text-gray-400">
                  {favorite?.product?.price}TK
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              type="button"
              className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
              onClick={() =>
                removeFavoriteItem(favorite?.id, auth?.user?.userId)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width={32} height={200} x={168} y={216} />
                <rect width={32} height={200} x={240} y={216} />
                <rect width={32} height={200} x={312} y={216} />
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1"
              onClick={() =>
                productAddToCart(auth?.user?.userId, favorite?.product?.id, 1)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
              </svg>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
