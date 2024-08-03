import React from "react";

export default function CartProductRemove() {
  return (
    <div className="flex justify-end text-sm divide-x">
      {!isEmptyArray(cart?.product?.offers) ? (
        !isEmptyArray(cart?.product?.product_weights) &&
        cart?.weight_id !== null ? (
          cart?.product?.product_weights.map(
            (product_weight) =>
              product_weight?.weight_id === cart?.weight_id && (
                <Fragment key={product_weight?.weight_id}>
                  {cart?.product?.offers.map((offer, index) => (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_weight?.price -
                                      (product_weight?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size?.price -
                                      (product_size?.price * offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
          cart?.size_number_id !== null ? (
          cart?.product?.product_size_numbers.map(
            (product_size_number) =>
              product_size_number?.size_number_id === cart?.size_number_id && (
                <Fragment key={product_size_number?.size_number_id}>
                  {cart?.product?.offers.map((offer, index) => (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size_number?.price -
                                      (product_size_number?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : (
          cart?.product?.offers.map((offer, index) => (
            <Fragment key={index}>
              <button
                type="button"
                className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                onClick={() => {
                  removeCartItem(cart?.id, auth?.user?.userId);
                  setCart((prevCart) => {
                    const updatedCartIds = prevCart.cart_ids.filter(
                      (id) => id !== cart?.id
                    );
                    const removedItemPrice =
                      prevCart?.price > 0
                        ? Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty
                        : 0;

                    return {
                      cart_ids: updatedCartIds,
                      price: prevCart.price - removedItemPrice,
                    };
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
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_weight?.price -
                                      (product_weight?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size?.price -
                                      (product_size?.price * offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
          cart?.size_number_id !== null ? (
          cart?.product?.product_size_numbers.map(
            (product_size_number) =>
              product_size_number?.size_number_id === cart?.size_number_id && (
                <Fragment key={product_size_number?.size_number_id}>
                  {cart?.product?.brand?.offers.map((offer, index) => (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size_number?.price -
                                      (product_size_number?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : (
          cart?.product?.brand?.offers.map((offer, index) => (
            <Fragment key={index}>
              <button
                type="button"
                className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                onClick={() => {
                  removeCartItem(cart?.id, auth?.user?.userId);
                  setCart((prevCart) => {
                    const updatedCartIds = prevCart.cart_ids.filter(
                      (id) => id !== cart?.id
                    );
                    const removedItemPrice =
                      prevCart?.price > 0
                        ? Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty
                        : 0;

                    return {
                      cart_ids: updatedCartIds,
                      price: prevCart.price - removedItemPrice,
                    };
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
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_weight?.price -
                                      (product_weight?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size?.price -
                                      (product_size?.price * offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
          cart?.size_number_id !== null ? (
          cart?.product?.product_size_numbers.map(
            (product_size_number) =>
              product_size_number?.size_number_id === cart?.size_number_id && (
                <Fragment key={product_size_number?.size_number_id}>
                  {cart?.product?.category?.offers.map((offer, index) => (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size_number?.price -
                                      (product_size_number?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : (
          cart?.product?.category?.offers.map((offer, index) => (
            <Fragment key={index}>
              <button
                type="button"
                className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                onClick={() => {
                  removeCartItem(cart?.id, auth?.user?.userId);
                  setCart((prevCart) => {
                    const updatedCartIds = prevCart.cart_ids.filter(
                      (id) => id !== cart?.id
                    );
                    const removedItemPrice =
                      prevCart?.price > 0
                        ? Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty
                        : 0;

                    return {
                      cart_ids: updatedCartIds,
                      price: prevCart.price - removedItemPrice,
                    };
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
                  {cart?.product?.sub_category?.offers.map((offer, index) => (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_weight?.price -
                                      (product_weight?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                  {cart?.product?.sub_category?.offers.map((offer, index) => (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size?.price -
                                      (product_size?.price * offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
          cart?.size_number_id !== null ? (
          cart?.product?.product_size_numbers.map(
            (product_size_number) =>
              product_size_number?.size_number_id === cart?.size_number_id && (
                <Fragment key={product_size_number?.size_number_id}>
                  {cart?.product?.sub_category?.offers.map((offer, index) => (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                        onClick={() => {
                          removeCartItem(cart?.id, auth?.user?.userId);
                          setCart((prevCart) => {
                            const updatedCartIds = prevCart.cart_ids.filter(
                              (id) => id !== cart?.id
                            );
                            const removedItemPrice =
                              prevCart?.price > 0
                                ? Math.round(
                                    product_size_number?.price -
                                      (product_size_number?.price *
                                        offer?.percents) /
                                        100
                                  ) * cart?.qty
                                : 0;

                            return {
                              cart_ids: updatedCartIds,
                              price: prevCart.price - removedItemPrice,
                            };
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
                    </Fragment>
                  ))}
                </Fragment>
              )
          )
        ) : (
          cart?.product?.sub_category?.offers.map((offer, index) => (
            <Fragment key={index}>
              <button
                type="button"
                className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                onClick={() => {
                  removeCartItem(cart?.id, auth?.user?.userId);
                  setCart((prevCart) => {
                    const updatedCartIds = prevCart.cart_ids.filter(
                      (id) => id !== cart?.id
                    );
                    const removedItemPrice =
                      prevCart?.price > 0
                        ? Math.round(
                            cart?.product?.price -
                              (cart?.product?.price * offer.percents) / 100
                          ) * cart?.qty
                        : 0;

                    return {
                      cart_ids: updatedCartIds,
                      price: prevCart.price - removedItemPrice,
                    };
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
                  <button
                    type="button"
                    className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                    onClick={() => {
                      removeCartItem(cart?.id, auth?.user?.userId);
                      setCart((prevCart) => {
                        const updatedCartIds = prevCart.cart_ids.filter(
                          (id) => id !== cart?.id
                        );
                        const removedItemPrice =
                          prevCart?.price > 0
                            ? (product_weight?.price -
                                product_weight?.discount_price) *
                              cart?.qty
                            : 0;

                        return {
                          cart_ids: updatedCartIds,
                          price: prevCart.price - removedItemPrice,
                        };
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
                </Fragment>
              )
          )
        ) : !isEmptyArray(cart?.product?.product_sizes) &&
          cart?.size_id !== null ? (
          cart?.product?.product_sizes.map(
            (product_size) =>
              product_size?.size_id === cart?.size_id && (
                <Fragment key={product_size?.size_id}>
                  <button
                    type="button"
                    className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                    onClick={() => {
                      removeCartItem(cart?.id, auth?.user?.userId);
                      setCart((prevCart) => {
                        const updatedCartIds = prevCart.cart_ids.filter(
                          (id) => id !== cart?.id
                        );
                        const removedItemPrice =
                          prevCart?.price > 0
                            ? (product_size?.price -
                                product_size?.discount_price) *
                              cart?.qty
                            : 0;

                        return {
                          cart_ids: updatedCartIds,
                          price: prevCart.price - removedItemPrice,
                        };
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
                </Fragment>
              )
          )
        ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
          cart?.size_number_id !== null ? (
          cart?.product?.product_size_numbers.map(
            (product_size_number) =>
              product_size_number?.size_number_id === cart?.size_number_id && (
                <Fragment key={product_size_number?.size_number_id}>
                  <button
                    type="button"
                    className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                    onClick={() => {
                      removeCartItem(cart?.id, auth?.user?.userId);
                      setCart((prevCart) => {
                        const updatedCartIds = prevCart.cart_ids.filter(
                          (id) => id !== cart?.id
                        );
                        const removedItemPrice =
                          prevCart?.price > 0
                            ? (product_size_number?.price -
                                product_size_number?.discount_price) *
                              cart?.qty
                            : 0;

                        return {
                          cart_ids: updatedCartIds,
                          price: prevCart.price - removedItemPrice,
                        };
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
                </Fragment>
              )
          )
        ) : (
          <button
            type="button"
            className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
            onClick={() => {
              removeCartItem(cart?.id, auth?.user?.userId);
              setCart((prevCart) => {
                const updatedCartIds = prevCart.cart_ids.filter(
                  (id) => id !== cart?.id
                );
                const removedItemPrice =
                  prevCart?.price > 0
                    ? (cart?.product?.price - cart?.product?.discount_price) *
                      cart?.qty
                    : 0;

                return {
                  cart_ids: updatedCartIds,
                  price: prevCart.price - removedItemPrice,
                };
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
        )
      ) : !isEmptyArray(cart?.product?.product_weights) &&
        cart?.weight_id !== null ? (
        cart?.product?.product_weights.map(
          (product_weight) =>
            product_weight?.weight_id === cart?.weight_id && (
              <Fragment key={product_weight?.weight_id}>
                <button
                  type="button"
                  className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                  onClick={() => {
                    removeCartItem(cart?.id, auth?.user?.userId);
                    setCart((prevCart) => {
                      const updatedCartIds = prevCart.cart_ids.filter(
                        (id) => id !== cart?.id
                      );
                      const removedItemPrice =
                        prevCart?.price > 0
                          ? product_weight?.price * cart?.qty
                          : 0;

                      return {
                        cart_ids: updatedCartIds,
                        price: prevCart.price - removedItemPrice,
                      };
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
              </Fragment>
            )
        )
      ) : !isEmptyArray(cart?.product?.product_sizes) &&
        cart?.size_id !== null ? (
        cart?.product?.product_sizes.map(
          (product_size) =>
            product_size?.size_id === cart?.size_id && (
              <Fragment key={product_size?.size_id}>
                <button
                  type="button"
                  className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                  onClick={() => {
                    removeCartItem(cart?.id, auth?.user?.userId);
                    setCart((prevCart) => {
                      const updatedCartIds = prevCart.cart_ids.filter(
                        (id) => id !== cart?.id
                      );
                      const removedItemPrice =
                        prevCart?.price > 0
                          ? product_size?.price * cart?.qty
                          : 0;

                      return {
                        cart_ids: updatedCartIds,
                        price: prevCart.price - removedItemPrice,
                      };
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
              </Fragment>
            )
        )
      ) : !isEmptyArray(cart?.product?.product_size_numbers) &&
        cart?.size_number_id !== null ? (
        cart?.product?.product_size_numbers.map(
          (product_size_number) =>
            product_size_number?.size_number_id === cart?.size_number_id && (
              <Fragment key={product_size_number?.size_number_id}>
                <button
                  type="button"
                  className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                  onClick={() => {
                    removeCartItem(cart?.id, auth?.user?.userId);
                    setCart((prevCart) => {
                      const updatedCartIds = prevCart.cart_ids.filter(
                        (id) => id !== cart?.id
                      );
                      const removedItemPrice =
                        prevCart?.price > 0
                          ? product_size_number?.price * cart?.qty
                          : 0;

                      return {
                        cart_ids: updatedCartIds,
                        price: prevCart.price - removedItemPrice,
                      };
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
              </Fragment>
            )
        )
      ) : (
        <Fragment>
          <button
            type="button"
            className=" text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
            onClick={() => {
              removeCartItem(cart?.id, auth?.user?.userId);
              setCart((prevCart) => {
                const updatedCartIds = prevCart.cart_ids.filter(
                  (id) => id !== cart?.id
                );
                const removedItemPrice =
                  prevCart?.price > 0 ? cart?.product?.price * cart?.qty : 0;

                return {
                  cart_ids: updatedCartIds,
                  price: prevCart.price - removedItemPrice,
                };
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
        </Fragment>
      )}
    </div>
  );
}
