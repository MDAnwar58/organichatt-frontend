import React, { Fragment } from "react";

export default function ProductSizeNumber({
  product,
  SizeNumber,
  setSizeNumber,
}) {
  return (
    <Fragment>
      {product?.product_size_numbers?.length > 0 && (
        <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-3 min-[400px]:mb-8">
          {product?.product_size_numbers.map((product_size_number, index) => (
            <button
              key={index}
              className={`border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 ${
                product_size_number?.size_number.id === SizeNumber.id &&
                "bg-gray-200"
              } hover:bg-gray-50 hover:shadow-gray-300`}
              onClick={() => {
                setSizeNumber((prev) =>
                  prev.id === product_size_number?.size_number?.id
                    ? {}
                    : {
                        id: product_size_number.size_number.id,
                        price: product_size_number.price,
                        discount_price: product_size_number.discount_price,
                      }
                );
              }}
            >
              {product_size_number?.size_number?.name}
            </button>
          ))}
        </div>
      )}
    </Fragment>
  );
}
