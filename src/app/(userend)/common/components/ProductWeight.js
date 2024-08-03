import React, { Fragment } from "react";

export default function ProductWeight({ product, Weight, setWeight }) {
  return (
    <Fragment>
      {product?.weights?.length > 0 && (
        <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-3 min-[768px]:mb-8">
          {product?.weights.map((weight, index) => (
            <button
              key={index}
              className={`border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 
                ${weight?.weight?.id === Weight.id && "bg-gray-200"}
                 hover:bg-gray-200 hover:shadow-gray-300`}
              onClick={() => {
                setWeight((prev) =>
                  prev.id === weight?.weight?.id
                    ? {}
                    : {
                        id: weight.weight.id,
                        price: weight.price,
                        discount_price: weight.discount_price,
                      }
                );
              }}
            >
              {weight?.weight?.number}
              {weight?.weight?.weight}
            </button>
          ))}
        </div>
      )}
    </Fragment>
  );
}
