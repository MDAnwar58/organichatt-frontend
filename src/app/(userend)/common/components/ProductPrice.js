import React, { Fragment } from "react";

export default function ProductPrice({ product, weight, size, sizeNumber }) {
  const isEmptyObject = (obj) => Object.keys(obj).length === 0;
  const isValidWeight = weight && !isEmptyObject(weight);
  const isValidSize = size && !isEmptyObject(size);
  const isValidSizeNumber = sizeNumber && !isEmptyObject(sizeNumber);
  function isEmpty(arr) {
    return !arr || arr.length === 0;
  }
  return (
    <Fragment>
      <div className="flex items-center">
        <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
          {/* TODO:- when product offers access then this area price */}
          {product?.offers?.length > 0 ? (
            product?.offers.map((offer, index) => (
              <Fragment key={index}>
                <span>
                  {isValidWeight === true ? (
                    <Fragment>
                      <span>
                        {Math.round(
                          weight?.price - (weight?.price * offer.percents) / 100
                        )}
                      </span>
                      <span className="ms-3 line-through text-gray-300 text-lg">
                        {weight?.price}TK
                      </span>
                    </Fragment>
                  ) : isValidSize === true ? (
                    <Fragment>
                      <span>
                        {Math.round(
                          size?.price - (size?.price * offer.percents) / 100
                        )}
                      </span>
                      <span className="ms-3 line-through text-gray-300 text-lg">
                        {size?.price}TK
                      </span>
                    </Fragment>
                  ) : isValidSizeNumber === true ? (
                    <Fragment>
                      <span>
                        {Math.round(
                          sizeNumber?.price -
                            (sizeNumber?.price * offer.percents) / 100
                        )}
                      </span>
                      <span className="ms-3 line-through text-gray-300 text-lg">
                        {sizeNumber?.price}TK
                      </span>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <span>
                        {Math.round(
                          product?.price -
                            (product?.price * offer.percents) / 100
                        )}
                        TK
                      </span>
                      <span className="ms-3 line-through text-gray-300 text-lg">
                        {product?.price}TK
                      </span>
                    </Fragment>
                  )}
                </span>
              </Fragment>
            ))
          ) : product?.brand?.offers?.length > 0 ? (
            product?.brand?.offers.map((offer, index) => (
              <Fragment key={index}>
                {isValidWeight === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        weight?.price - (weight?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {weight?.price}TK
                    </span>
                  </Fragment>
                ) : isValidSize === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        size?.price - (size?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {size?.price}TK
                    </span>
                  </Fragment>
                ) : isValidSizeNumber === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        sizeNumber?.price -
                          (sizeNumber?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {sizeNumber?.price}TK
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>
                      {Math.round(
                        product?.price - (product?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {product?.price}TK
                    </span>
                  </Fragment>
                )}
              </Fragment>
            ))
          ) : product?.category?.offers?.length > 0 ? (
            product?.category?.offers.map((offer, index) => (
              <Fragment key={index}>
                {isValidWeight === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        weight?.price - (weight?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {weight?.price}TK
                    </span>
                  </Fragment>
                ) : isValidSize === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        size?.price - (size?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {size?.price}TK
                    </span>
                  </Fragment>
                ) : isValidSizeNumber === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        sizeNumber?.price -
                          (sizeNumber?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {sizeNumber?.price}TK
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>
                      {Math.round(
                        product?.price - (product?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {product?.price}TK
                    </span>
                  </Fragment>
                )}
              </Fragment>
            ))
          ) : product?.sub_category?.offers?.length > 0 ? (
            product?.sub_category?.offers.map((offer, index) => (
              <Fragment key={index}>
                {isValidWeight === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        weight?.price - (weight?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {weight?.price}TK
                    </span>
                  </Fragment>
                ) : isValidSize === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        size?.price - (size?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {size?.price}TK
                    </span>
                  </Fragment>
                ) : isValidSizeNumber === true ? (
                  <Fragment>
                    <span>
                      {Math.round(
                        sizeNumber?.price -
                          (sizeNumber?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {sizeNumber?.price}TK
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>
                      {Math.round(
                        product?.price - (product?.price * offer.percents) / 100
                      )}
                      TK
                    </span>
                    <span className="ms-3 line-through text-gray-300 text-lg">
                      {product?.price}TK
                    </span>
                  </Fragment>
                )}
              </Fragment>
            ))
          ) : !product?.discount_price && isValidWeight === true ? (
            <span>
              {Math.round(weight?.price)}
              TK
            </span>
          ) : !product?.discount_price && isValidSize === true ? (
            <span>
              {Math.round(size?.price)}
              TK
            </span>
          ) : !product?.discount_price && isValidSizeNumber === true ? (
            <span>
              {Math.round(sizeNumber?.price)}
              TK
            </span>
          ) : (
            !product?.discount_price && (
              <span>
                {Math.round(product?.price)}
                TK
              </span>
            )
          )}
          {/* TODO:- when product offers access then this area price */}

          {/* TODO:- when product brand offers access then this area price start */}
          {}
          {/* TODO:- when product brand offers access then this area price end */}
          {/* TODO:- when product category offers access then this area price start */}
          {}
          {/* TODO:- when product category offers access then this area price end */}
          {/* TODO:- when product category offers access then this area price start */}
          {}
          {/* TODO:- when product category offers access then this area price end */}

          {/* TODO: price and discount show here start */}
          {isEmpty(product?.sub_category?.offers) === true &&
            isEmpty(product?.category?.offers) === true &&
            isEmpty(product?.brand?.offers) === true &&
            isEmpty(product?.offers) === true &&
            isValidWeight === false &&
            isValidSize === false &&
            isValidSizeNumber === false &&
            product?.discount_price && (
              <Fragment>
                <span>{product?.price - product?.discount_price}TK</span>
                <span className="ms-3 line-through text-gray-300 text-lg">
                  {product?.price}TK
                </span>
              </Fragment>
            )}
          {isEmpty(product?.offers) === true &&
            isEmpty(product?.brand?.offers) === true &&
            isEmpty(product?.category?.offers) === true &&
            isEmpty(product?.sub_category?.offers) === true &&
            product?.discount_price &&
            weight?.discount_price && (
              <Fragment>
                <span>{weight?.price - weight?.discount_price}TK</span>
                <span className="ms-3 line-through text-gray-300 text-lg">
                  {weight?.price}TK
                </span>
              </Fragment>
            )}
          {isEmpty(product?.offers) === true &&
            isEmpty(product?.brand?.offers) === true &&
            isEmpty(product?.category?.offers) === true &&
            isEmpty(product?.sub_category?.offers) === true &&
            product?.discount_price &&
            size?.discount_price && (
              <Fragment>
                <span>{size?.price - size?.discount_price}TK</span>
                <span className="ms-3 line-through text-gray-300 text-lg">
                  {size?.price}TK
                </span>
              </Fragment>
            )}
          {isEmpty(product?.offers) === true &&
            isEmpty(product?.brand?.offers) === true &&
            isEmpty(product?.category?.offers) === true &&
            isEmpty(product?.sub_category?.offers) === true &&
            product?.discount_price &&
            sizeNumber?.discount_price && (
              <Fragment>
                <span>{sizeNumber?.price - sizeNumber?.discount_price}TK</span>
                <span className="ms-3 line-through text-gray-300 text-lg">
                  {sizeNumber?.price}TK
                </span>
              </Fragment>
            )}
          {/* TODO: price and discount show here end */}
        </h5>
        {product?.offers?.length > 0
          ? product?.offers.map((offer, index) => (
              <span
                key={index}
                className="ml-3 font-semibold text-lg text-green-600"
              >
                {offer.percents}% off
              </span>
            ))
          : product?.brand?.offers?.length > 0
          ? product?.brand?.offers.map((offer, index) => (
              <span
                key={index}
                className="ml-3 font-semibold text-lg text-green-600"
              >
                {offer.percents}% off
              </span>
            ))
          : product?.category?.offers?.length > 0
          ? product?.category?.offers.map((offer, index) => (
              <span
                key={index}
                className="ml-3 font-semibold text-lg text-green-600"
              >
                {offer.percents}% off
              </span>
            ))
          : product?.sub_category?.offers?.length > 0 &&
            product?.sub_category?.offers.map((offer, index) => (
              <span
                key={index}
                className="ml-3 font-semibold text-lg text-green-600"
              >
                {offer.percents}% off
              </span>
            ))}
      </div>
      <svg
        className="mx-5 max-[400px]:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width={2}
        height={36}
        viewBox="0 0 2 36"
        fill="none"
      >
        <path d="M1 0V36" stroke="#E5E7EB" />
      </svg>
    </Fragment>
  );
}
