import React, { Fragment } from "react";
import Image from "./Image";
import useCommonContext from "../_context/CommonContext";
import { getToken } from "../../../../services/token";
import { SvgMinusIcon, SvgPlusIcon } from "./svg-icons";

export default function FavoriteItem({
  cart,
  cartProductSelectHandleForTotalPrice,
  setCart,
  Cart,
}) {
  const { removeCartItem, cartProductQtyIncrement, cartProductQtyDecrement } =
    useCommonContext();
  const auth = getToken("auth_user_token");
  function isEmptyArray(arr) {
    return !arr || arr.length === 0;
  }
  function isEmptyString(str) {
    return !str || str.trim().length === 0;
  }
  // console.log(cart);
  return (
    <li className="flex py-6 flex-row justify-between">
      <div className="flex md:pt-14 pt-7 w-10">
        <p className="text-lg font-semibold">
          {!isEmptyArray(cart?.product?.offers) ? (
            !isEmptyArray(cart?.product?.product_weights) &&
            cart?.weight_id !== null ? (
              cart?.product?.product_weights.map(
                (product_weight) =>
                  product_weight?.weight_id === cart?.weight_id && (
                    <Fragment key={product_weight?.weight_id}>
                      {cart?.product?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_weight?.price -
                                    (product_weight?.price * offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_sizes) &&
              cart?.size_id !== null ? (
              cart?.product?.product_sizes.map(
                (product_size) =>
                  product_size?.size_id === cart?.size_id && (
                    <Fragment key={product_size?.size_id}>
                      {cart?.product?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_size?.price -
                                    (product_size?.price * offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
              cart?.size_number_id !== null ? (
              cart?.product?.product_size_numbers.map(
                (product_size_number) =>
                  product_size_number?.size_number_id ===
                    cart?.size_number_id && (
                    <Fragment key={product_size_number?.size_number_id}>
                      {cart?.product?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_size_number?.price -
                                    (product_size_number?.price *
                                      offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : (
              cart?.product?.offers.map((offer, index) => (
                <Fragment key={index}>
                  <input
                    type="checkbox"
                    className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                    onChange={() =>
                      cartProductSelectHandleForTotalPrice(
                        cart?.id,
                        Math.round(
                          cart?.product?.price -
                            (cart?.product?.price * offer.percents) / 100
                        ),
                        cart?.qty
                      )
                    }
                    checked={Cart.cart_ids.includes(cart?.id)}
                  />
                </Fragment>
              ))
            )
          ) : !isEmptyArray(cart?.product?.brand?.offers) ? (
            !isEmptyArray(cart?.product?.product_weights) &&
            cart?.weight_id !== null ? (
              cart?.product?.product_weights.map(
                (product_weight) =>
                  product_weight?.weight_id === cart?.weight_id && (
                    <Fragment key={product_weight?.weight_id}>
                      {cart?.product?.brand?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_weight?.price -
                                    (product_weight?.price * offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_sizes) &&
              cart?.size_id !== null ? (
              cart?.product?.product_sizes.map(
                (product_size) =>
                  product_size?.size_id === cart?.size_id && (
                    <Fragment key={product_size?.size_id}>
                      {cart?.product?.brand?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_size?.price -
                                    (product_size?.price * offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
              cart?.size_number_id !== null ? (
              cart?.product?.product_size_numbers.map(
                (product_size_number) =>
                  product_size_number?.size_number_id ===
                    cart?.size_number_id && (
                    <Fragment key={product_size_number?.size_number_id}>
                      {cart?.product?.brand?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_size_number?.price -
                                    (product_size_number?.price *
                                      offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : (
              cart?.product?.brand?.offers.map((offer, index) => (
                <Fragment key={index}>
                  <input
                    type="checkbox"
                    className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                    onChange={() =>
                      cartProductSelectHandleForTotalPrice(
                        cart?.id,
                        Math.round(
                          cart?.product?.price -
                            (cart?.product?.price * offer.percents) / 100
                        ),
                        cart?.qty
                      )
                    }
                    checked={Cart.cart_ids.includes(cart?.id)}
                  />
                </Fragment>
              ))
            )
          ) : !isEmptyArray(cart?.product?.category?.offers) ? (
            !isEmptyArray(cart?.product?.product_weights) &&
            cart?.weight_id !== null ? (
              cart?.product?.product_weights.map(
                (product_weight) =>
                  product_weight?.weight_id === cart?.weight_id && (
                    <Fragment key={product_weight?.weight_id}>
                      {cart?.product?.category?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_weight?.price -
                                    (product_weight?.price * offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_sizes) &&
              cart?.size_id !== null ? (
              cart?.product?.product_sizes.map(
                (product_size) =>
                  product_size?.size_id === cart?.size_id && (
                    <Fragment key={product_size?.size_id}>
                      {cart?.product?.category?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_size?.price -
                                    (product_size?.price * offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
              cart?.size_number_id !== null ? (
              cart?.product?.product_size_numbers.map(
                (product_size_number) =>
                  product_size_number?.size_number_id ===
                    cart?.size_number_id && (
                    <Fragment key={product_size_number?.size_number_id}>
                      {cart?.product?.category?.offers.map((offer, index) => (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                            onChange={() =>
                              cartProductSelectHandleForTotalPrice(
                                cart?.id,
                                Math.round(
                                  product_size_number?.price -
                                    (product_size_number?.price *
                                      offer?.percents) /
                                      100
                                ),
                                cart?.qty
                              )
                            }
                            checked={Cart.cart_ids.includes(cart?.id)}
                          />
                        </Fragment>
                      ))}
                    </Fragment>
                  )
              )
            ) : (
              cart?.product?.category?.offers.map((offer, index) => (
                <Fragment key={index}>
                  <input
                    type="checkbox"
                    className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                    onChange={() =>
                      cartProductSelectHandleForTotalPrice(
                        cart?.id,
                        Math.round(
                          cart?.product?.price -
                            (cart?.product?.price * offer.percents) / 100
                        ),
                        cart?.qty
                      )
                    }
                    checked={Cart.cart_ids.includes(cart?.id)}
                  />
                </Fragment>
              ))
            )
          ) : !isEmptyArray(cart?.product?.sub_category?.offers) ? (
            !isEmptyArray(cart?.product?.product_weights) &&
            cart?.weight_id !== null ? (
              cart?.product?.product_weights.map(
                (product_weight) =>
                  product_weight?.weight_id === cart?.weight_id && (
                    <Fragment key={product_weight?.weight_id}>
                      {cart?.product?.sub_category?.offers.map(
                        (offer, index) => (
                          <Fragment key={index}>
                            <input
                              type="checkbox"
                              className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                              onChange={() =>
                                cartProductSelectHandleForTotalPrice(
                                  cart?.id,
                                  Math.round(
                                    product_weight?.price -
                                      (product_weight?.price *
                                        offer?.percents) /
                                        100
                                  ),
                                  cart?.qty
                                )
                              }
                              checked={Cart.cart_ids.includes(cart?.id)}
                            />
                          </Fragment>
                        )
                      )}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_sizes) &&
              cart?.size_id !== null ? (
              cart?.product?.product_sizes.map(
                (product_size) =>
                  product_size?.size_id === cart?.size_id && (
                    <Fragment key={product_size?.size_id}>
                      {cart?.product?.sub_category?.offers.map(
                        (offer, index) => (
                          <Fragment key={index}>
                            <input
                              type="checkbox"
                              className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                              onChange={() =>
                                cartProductSelectHandleForTotalPrice(
                                  cart?.id,
                                  Math.round(
                                    product_size?.price -
                                      (product_size?.price * offer?.percents) /
                                        100
                                  ),
                                  cart?.qty
                                )
                              }
                              checked={Cart.cart_ids.includes(cart?.id)}
                            />
                          </Fragment>
                        )
                      )}
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
              cart?.size_number_id !== null ? (
              cart?.product?.product_size_numbers.map(
                (product_size_number) =>
                  product_size_number?.size_number_id ===
                    cart?.size_number_id && (
                    <Fragment key={product_size_number?.size_number_id}>
                      {cart?.product?.sub_category?.offers.map(
                        (offer, index) => (
                          <Fragment key={index}>
                            <input
                              type="checkbox"
                              className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                              onChange={() =>
                                cartProductSelectHandleForTotalPrice(
                                  cart?.id,
                                  Math.round(
                                    product_size_number?.price -
                                      (product_size_number?.price *
                                        offer?.percents) /
                                        100
                                  ),
                                  cart?.qty
                                )
                              }
                              checked={Cart.cart_ids.includes(cart?.id)}
                            />
                          </Fragment>
                        )
                      )}
                    </Fragment>
                  )
              )
            ) : (
              cart?.product?.sub_category?.offers.map((offer, index) => (
                <Fragment key={index}>
                  <input
                    type="checkbox"
                    className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                    onChange={() =>
                      cartProductSelectHandleForTotalPrice(
                        cart?.id,
                        Math.round(
                          cart?.product?.price -
                            (cart?.product?.price * offer.percents) / 100
                        ),
                        cart?.qty
                      )
                    }
                    checked={Cart.cart_ids.includes(cart?.id)}
                  />
                </Fragment>
              ))
            )
          ) : !isEmptyString(cart?.product?.discount_price) ? (
            !isEmptyArray(cart?.product?.product_weights) &&
            cart?.weight_id !== null ? (
              cart?.product?.product_weights.map(
                (product_weight) =>
                  product_weight?.weight_id === cart?.weight_id && (
                    <Fragment key={product_weight?.weight_id}>
                      <input
                        type="checkbox"
                        className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                        onChange={() =>
                          cartProductSelectHandleForTotalPrice(
                            cart?.id,
                            product_weight?.price -
                              product_weight?.discount_price,
                            cart?.qty
                          )
                        }
                        checked={Cart.cart_ids.includes(cart?.id)}
                      />
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_sizes) &&
              cart?.size_id !== null ? (
              cart?.product?.product_sizes.map(
                (product_size) =>
                  product_size?.size_id === cart?.size_id && (
                    <Fragment key={product_size?.size_id}>
                      <input
                        type="checkbox"
                        className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                        onChange={() =>
                          cartProductSelectHandleForTotalPrice(
                            cart?.id,
                            product_size?.price - product_size?.discount_price,
                            cart?.qty
                          )
                        }
                        checked={Cart.cart_ids.includes(cart?.id)}
                      />
                    </Fragment>
                  )
              )
            ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
              cart?.size_number_id !== null ? (
              cart?.product?.product_size_numbers.map(
                (product_size_number) =>
                  product_size_number?.size_number_id ===
                    cart?.size_number_id && (
                    <Fragment key={product_size_number?.size_number_id}>
                      <input
                        type="checkbox"
                        className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                        onChange={() =>
                          cartProductSelectHandleForTotalPrice(
                            cart?.id,
                            product_size_number?.price -
                              product_size_number?.discount_price,
                            cart?.qty
                          )
                        }
                        checked={Cart.cart_ids.includes(cart?.id)}
                      />
                    </Fragment>
                  )
              )
            ) : (
              <input
                type="checkbox"
                className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                onChange={() =>
                  cartProductSelectHandleForTotalPrice(
                    cart?.id,
                    cart?.product?.price - cart?.product?.discount_price,
                    cart?.qty
                  )
                }
                checked={Cart.cart_ids.includes(cart?.id)}
              />
            )
          ) : !isEmptyArray(cart?.product?.product_weights) &&
            cart?.weight_id !== null ? (
            cart?.product?.product_weights.map(
              (product_weight) =>
                product_weight?.weight_id === cart?.weight_id && (
                  <Fragment key={product_weight?.weight_id}>
                    <input
                      type="checkbox"
                      className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                      onChange={() =>
                        cartProductSelectHandleForTotalPrice(
                          cart?.id,
                          product_weight?.price,
                          cart?.qty
                        )
                      }
                      checked={Cart.cart_ids.includes(cart?.id)}
                    />
                  </Fragment>
                )
            )
          ) : !isEmptyArray(cart?.product?.product_sizes) &&
            cart?.size_id !== null ? (
            cart?.product?.product_sizes.map(
              (product_size) =>
                product_size?.size_id === cart?.size_id && (
                  <Fragment key={product_size?.size_id}>
                    <input
                      type="checkbox"
                      className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                      onChange={() =>
                        cartProductSelectHandleForTotalPrice(
                          cart?.id,
                          product_size?.price,
                          cart?.qty
                        )
                      }
                      checked={Cart.cart_ids.includes(cart?.id)}
                    />
                  </Fragment>
                )
            )
          ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
            cart?.size_number_id !== null ? (
            cart?.product?.product_size_numbers.map(
              (product_size_number) =>
                product_size_number?.size_number_id ===
                  cart?.size_number_id && (
                  <Fragment key={product_size_number?.size_number_id}>
                    <input
                      type="checkbox"
                      className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                      onChange={() =>
                        cartProductSelectHandleForTotalPrice(
                          cart?.id,
                          product_size_number?.price,
                          cart?.qty
                        )
                      }
                      checked={Cart.cart_ids.includes(cart?.id)}
                    />
                  </Fragment>
                )
            )
          ) : (
            <Fragment>
              <input
                type="checkbox"
                className="pe-1 text-green-400 focus:ring-green-400 w-5 h-5 rounded-md"
                onChange={() =>
                  cartProductSelectHandleForTotalPrice(
                    cart?.id,
                    cart?.product?.price,
                    cart?.qty
                  )
                }
                checked={Cart.cart_ids.includes(cart?.id)}
              />
            </Fragment>
          )}
        </p>
      </div>
      <div className="flex w-full space-x-2 sm:space-x-4 relative">
        <Image
          className="flex-shrink-0 sm:w-32 sm:h-32 w-20 h-20 object-cover dark:border rounded outline-none  dark:bg-gray-500"
          src={cart?.product?.image_url}
          alt={cart?.product?.name}
        />
        {cart?.product?.offers?.length > 0
          ? cart?.product?.offers.map((offer, index) => (
              <div
                key={index}
                className="sm:w-32 sm:h-32 w-20 h-20 absolute top-0 left-0"
              >
                <span className="bg-red-500 text-white rounded-lg px-1 sm:py-1 py-[.10rem] font-semibold sm:text-xs text-[.55rem] absolute top-0 right-1">
                  -{offer?.percents}%
                </span>
              </div>
            ))
          : cart?.product?.brand?.offers?.length > 0
          ? cart?.product?.brand?.offers.map((offer, index) => (
              <div
                key={index}
                className="sm:w-32 sm:h-32 w-20 h-20 absolute top-0 left-0"
              >
                <span className="bg-red-500 text-white rounded-lg px-1 sm:py-1 py-[.10rem] font-semibold sm:text-xs text-[.55rem] absolute top-0 right-1">
                  -{offer?.percents}%
                </span>
              </div>
            ))
          : cart?.product?.category?.offers?.length > 0
          ? cart?.product?.category?.offers.map((offer, index) => (
              <div
                key={index}
                className="sm:w-32 sm:h-32 w-20 h-20 absolute top-0 left-0"
              >
                <span className="bg-red-500 text-white rounded-lg px-1 sm:py-1 py-[.10rem] font-semibold sm:text-xs text-[.55rem] absolute top-0 right-1">
                  -{offer?.percents}%
                </span>
              </div>
            ))
          : cart?.product?.sub_category?.offers?.length > 0
          ? cart?.product?.sub_category?.offers.map((offer, index) => (
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
                {cart?.product?.name} - {cart?.product?.id}
              </h3>
              <div className="text-sm dark:text-gray-600">
                {!isEmptyArray(cart?.product?.product_weights) &&
                cart?.weight_id !== null ? (
                  <div className="flex">
                    <span className="me-1">Weight: -</span>
                    {cart?.product?.product_weights.map(
                      (product_weight) =>
                        product_weight?.weight_id === cart?.weight_id && (
                          <div key={product_weight.weight_id} className="flex">
                            <span>{product_weight?.weight?.number}</span>
                            <span>{product_weight?.weight?.weight}</span>
                          </div>
                        )
                    )}
                  </div>
                ) : !isEmptyArray(cart?.product?.product_sizes) &&
                  cart?.size_id !== null ? (
                  <div className="flex">
                    <span className="me-1">Size: -</span>
                    {cart?.product?.product_sizes.map(
                      (product_size) =>
                        product_size?.size_id === cart?.size_id && (
                          <div key={product_size.size_id}>
                            <span>{product_size?.size?.name}</span>
                          </div>
                        )
                    )}
                  </div>
                ) : (
                  !isEmptyArray(cart?.product?.product_size_numbers) &&
                  cart?.size_number_id !== null && (
                    <div className="flex">
                      <span className="me-1">Size Number: -</span>
                      {cart?.product?.product_size_numbers.map(
                        (product_size_number) =>
                          product_size_number?.size_number_id ===
                            cart?.size_number_id && (
                            <span key={product_size_number.size_number_id}>
                              {product_size_number?.size_number?.name}
                            </span>
                          )
                      )}
                    </div>
                  )
                )}
              </div>
              <div className="pt-1">
                <div className=" flex">
                  <button
                    type="button"
                    className=" border-2 border-gray-400 rounded-full me-1 px-[.10rem]"
                    onClick={() =>
                      cartProductQtyDecrement(cart?.id, 1, auth?.user?.userId)
                    }
                  >
                    <SvgMinusIcon className="stroke-gray-500" />
                  </button>
                  <div className="px-3 h-7 flex justify-center items-center">
                    {cart?.qty}
                  </div>
                  <button
                    type="button"
                    className=" border-2 border-gray-400 rounded-full ms-1 px-[.10rem]"
                    onClick={() =>
                      cartProductQtyIncrement(
                        cart?.id,
                        1,
                        cart?.product?.id,
                        auth.user.userId
                      )
                    }
                  >
                    <SvgPlusIcon className="stroke-gray-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                {!isEmptyArray(cart?.product?.offers)
                  ? !isEmptyArray(cart?.product?.product_weights) &&
                    cart?.weight_id !== null
                    ? cart?.product?.product_weights.map(
                        (product_weight) =>
                          product_weight?.weight_id === cart?.weight_id && (
                            <Fragment key={product_weight?.weight_id}>
                              {cart?.product?.offers.map((offer, index) => (
                                <Fragment key={index}>
                                  {Math.round(
                                    product_weight?.price -
                                      (product_weight?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty}
                                </Fragment>
                              ))}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_sizes) &&
                      cart?.size_id !== null
                    ? cart?.product?.product_sizes.map(
                        (product_size) =>
                          product_size?.size_id === cart?.size_id && (
                            <Fragment key={product_size?.size_id}>
                              {cart?.product?.offers.map((offer, index) => (
                                <Fragment key={index}>
                                  {Math.round(
                                    product_size?.price -
                                      (product_size?.price * offer?.percents) /
                                        100
                                  ) * cart?.qty}
                                </Fragment>
                              ))}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_size_numbers) &&
                      cart?.size_number_id !== null
                    ? cart?.product?.product_size_numbers.map(
                        (product_size_number) =>
                          product_size_number?.size_number_id ===
                            cart?.size_number_id && (
                            <Fragment key={product_size_number?.size_number_id}>
                              {cart?.product?.offers.map((offer, index) => (
                                <Fragment key={index}>
                                  {Math.round(
                                    product_size_number?.price -
                                      (product_size_number?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty}
                                </Fragment>
                              ))}
                            </Fragment>
                          )
                      )
                    : cart?.product?.offers.map(
                        (offer) =>
                          Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty
                      )
                  : !isEmptyArray(cart?.product?.brand?.offers)
                  ? !isEmptyArray(cart?.product?.product_weights) &&
                    cart?.weight_id !== null
                    ? cart?.product?.product_weights.map(
                        (product_weight) =>
                          product_weight?.weight_id === cart?.weight_id && (
                            <Fragment key={product_weight?.weight_id}>
                              {cart?.product?.brand?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_weight?.price -
                                        (product_weight?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_sizes) &&
                      cart?.size_id !== null
                    ? cart?.product?.product_sizes.map(
                        (product_size) =>
                          product_size?.size_id === cart?.size_id && (
                            <Fragment key={product_size?.size_id}>
                              {cart?.product?.brand?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_size?.price -
                                        (product_size?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_size_numbers) &&
                      cart?.size_number_id !== null
                    ? cart?.product?.product_size_numbers.map(
                        (product_size_number) =>
                          product_size_number?.size_number_id ===
                            cart?.size_number_id && (
                            <Fragment key={product_size_number?.size_number_id}>
                              {cart?.product?.brand?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_size_number?.price -
                                        (product_size_number?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : cart?.product?.brand?.offers.map((offer, index) => (
                        <span key={index}>
                          {Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty}
                        </span>
                      ))
                  : !isEmptyArray(cart?.product?.category?.offers)
                  ? !isEmptyArray(cart?.product?.product_weights) &&
                    cart?.weight_id !== null
                    ? cart?.product?.product_weights.map(
                        (product_weight) =>
                          product_weight?.weight_id === cart?.weight_id && (
                            <Fragment key={product_weight?.weight_id}>
                              {cart?.product?.category?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_weight?.price -
                                        (product_weight?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_sizes) &&
                      cart?.size_id !== null
                    ? cart?.product?.product_sizes.map(
                        (product_size) =>
                          product_size?.size_id === cart?.size_id && (
                            <Fragment key={product_size?.size_id}>
                              {cart?.product?.category?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_size?.price -
                                        (product_size?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_size_numbers) &&
                      cart?.size_number_id !== null
                    ? cart?.product?.product_size_numbers.map(
                        (product_size_number) =>
                          product_size_number?.size_number_id ===
                            cart?.size_number_id && (
                            <Fragment key={product_size_number?.size_number_id}>
                              {cart?.product?.category?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_size_number?.price -
                                        (product_size_number?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : cart?.product?.category?.offers.map(
                        (offer) =>
                          Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty
                      )
                  : !isEmptyArray(cart?.product?.sub_category?.offers)
                  ? !isEmptyArray(cart?.product?.product_weights) &&
                    cart?.weight_id !== null
                    ? cart?.product?.product_weights.map(
                        (product_weight) =>
                          product_weight?.weight_id === cart?.weight_id && (
                            <Fragment key={product_weight?.weight_id}>
                              {cart?.product?.sub_category?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_weight?.price -
                                        (product_weight?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_sizes) &&
                      cart?.size_id !== null
                    ? cart?.product?.product_sizes.map(
                        (product_size) =>
                          product_size?.size_id === cart?.size_id && (
                            <Fragment key={product_size?.size_id}>
                              {cart?.product?.sub_category?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_size?.price -
                                        (product_size?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_size_numbers) &&
                      cart?.size_number_id !== null
                    ? cart?.product?.product_size_numbers.map(
                        (product_size_number) =>
                          product_size_number?.size_number_id ===
                            cart?.size_number_id && (
                            <Fragment key={product_size_number?.size_number_id}>
                              {cart?.product?.sub_category?.offers.map(
                                (offer, index) => (
                                  <Fragment key={index}>
                                    {Math.round(
                                      product_size_number?.price -
                                        (product_size_number?.price *
                                          offer?.percents) /
                                          100
                                    ) * cart?.qty}
                                  </Fragment>
                                )
                              )}
                            </Fragment>
                          )
                      )
                    : cart?.product?.sub_category?.offers.map(
                        (offer) =>
                          Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty
                      )
                  : !isEmptyString(cart?.product?.discount_price)
                  ? !isEmptyArray(cart?.product?.product_weights) &&
                    cart?.weight_id !== null
                    ? cart?.product?.product_weights.map(
                        (product_weight) =>
                          product_weight?.weight_id === cart?.weight_id && (
                            <Fragment key={product_weight?.weight_id}>
                              {(product_weight?.price -
                                product_weight?.discount_price) *
                                cart?.qty}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_sizes) &&
                      cart?.size_id !== null
                    ? cart?.product?.product_sizes.map(
                        (product_size) =>
                          product_size?.size_id === cart?.size_id && (
                            <Fragment key={product_size?.size_id}>
                              {(product_size?.price -
                                product_size?.discount_price) *
                                cart?.qty}
                            </Fragment>
                          )
                      )
                    : !isEmptyArray(cart?.product?.product_size_numbers) &&
                      cart?.size_number_id !== null
                    ? cart?.product?.product_size_numbers.map(
                        (product_size_number) =>
                          product_size_number?.size_number_id ===
                            cart?.size_number_id && (
                            <Fragment key={product_size_number?.size_number_id}>
                              {(product_size_number?.price -
                                product_size_number?.discount_price) *
                                cart?.qty}
                            </Fragment>
                          )
                      )
                    : (cart?.product?.price - cart?.product?.discount_price) *
                      cart?.qty
                  : !isEmptyArray(cart?.product?.product_weights) &&
                    cart?.weight_id !== null
                  ? cart?.product?.product_weights.map(
                      (product_weight) =>
                        product_weight?.weight_id === cart?.weight_id && (
                          <Fragment key={product_weight?.weight_id}>
                            {product_weight?.price * cart?.qty}
                          </Fragment>
                        )
                    )
                  : !isEmptyArray(cart?.product?.product_sizes) &&
                    cart?.size_id !== null
                  ? cart?.product?.product_sizes.map(
                      (product_size) =>
                        product_size?.size_id === cart?.size_id && (
                          <Fragment key={product_size?.size_id}>
                            {product_size?.price * cart?.qty}
                          </Fragment>
                        )
                    )
                  : !isEmptyArray(cart?.product?.product_size_numbers) &&
                    cart?.size_number_id !== null
                  ? cart?.product?.product_size_numbers.map(
                      (product_size_number) =>
                        product_size_number?.size_number_id ===
                          cart?.size_number_id && (
                          <Fragment key={product_size_number?.size_number_id}>
                            {product_size_number?.price * cart?.qty}
                          </Fragment>
                        )
                    )
                  : cart?.product?.price * cart?.qty}
                TK
              </p>
              {!isEmptyArray(cart?.product?.offers) ||
              !isEmptyArray(cart?.product?.brand?.offers) ||
              !isEmptyArray(cart?.product?.category?.offers) ||
              !isEmptyArray(cart?.product?.sub_category?.offers) ||
              !isEmptyString(cart?.product?.discount_price) ? (
                cart?.weight_id === null &&
                cart?.size_id === null &&
                cart?.size_number_id === null ? (
                  <p className="text-sm line-through text-gray-400">
                    {cart?.product?.price}TK
                  </p>
                ) : !isEmptyArray(cart?.product?.product_weights) &&
                  cart?.weight_id !== null ? (
                  cart?.product?.product_weights.map(
                    (product_weight) =>
                      product_weight?.weight_id === cart?.weight_id && (
                        <p
                          key={product_weight.id}
                          className="text-sm line-through text-gray-400"
                        >
                          {product_weight.price}TK
                        </p>
                      )
                  )
                ) : !isEmptyArray(cart?.product?.product_sizes) &&
                  cart?.size_id !== null ? (
                  cart?.product?.product_sizes.map(
                    (product_size) =>
                      product_size?.size_id === cart?.size_id && (
                        <p
                          key={product_size.id}
                          className="text-sm line-through text-gray-400"
                        >
                          {product_size.price}TK
                        </p>
                      )
                  )
                ) : (
                  !isEmptyArray(cart?.product?.product_size_numbers) &&
                  cart?.size_number_id !== null &&
                  cart?.product?.product_size_numbers.map(
                    (product_size_number) =>
                      product_size_number?.size_number_id ===
                        cart?.size_number_id && (
                        <p
                          key={product_size_number.id}
                          className="text-sm line-through text-gray-400"
                        >
                          {product_size_number.price}TK
                        </p>
                      )
                  )
                )
              ) : null}
            </div>
          </div>
          <div className="flex justify-end text-sm divide-x">
            <button
              type="button"
              className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
              onClick={() => {
                removeCartItem(cart?.id, auth?.user?.userId);
                setCart({
                  cart_ids: [],
                  price: 0,
                });
              }}
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
          </div>
        </div>
      </div>
    </li>
  );
}
