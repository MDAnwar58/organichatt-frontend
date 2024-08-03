import React, { Fragment } from "react";

export default function ProductSize({ product, Size, setSize }) {
  return (
    <Fragment>
      {product?.product_sizes?.length > 0 && (
        <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-3 min-[768px]:mb-8">
          {product?.product_sizes.map((product_size, index) => (
            <button
              key={index}
              className={`border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 ${
                product_size?.size?.id === Size.id && "bg-gray-200"
              } hover:bg-gray-50 hover:shadow-gray-300`}
              onClick={() => {
                setSize((prev) =>
                  prev.id === product_size?.size?.id
                    ? {}
                    : {
                        id: product_size.size.id,
                        price: product_size.price,
                        discount_price: product_size.discount_price,
                      }
                );
              }}
            >
              {product_size?.size?.name}
            </button>
          ))}
        </div>
      )}
    </Fragment>
  );
}
