"use client";
import React, { useState } from "react";
import Image from "./Image";
// import "../assets/css/product.css";

export default function ProductColor({ product }) {
  const [selectColorId, setSelectColorId] = useState(null);
  const getColorCode = (code, isSelect) => {
    if (isSelect === true) {
      return "#31c48d";
    } else {
      return code;
    }
  };

  return (
    <div className="grid md:grid-cols-4 grid-cols-5 gap-3 mb-6 md:max-w-sm w-full">
      {product?.colors?.length > 0 &&
        product?.colors.map((color, index) => (
          <div key={index} className="color-box group">
            <div>
              <div
                style={{
                  border: `5px solid ${getColorCode(
                    color.code,
                    color.id === selectColorId
                  )}`,
                }}
                className={`relative border-[5px] hover:border-green-300 rounded-xl`}
                onClick={() => setSelectColorId(color.id)}
              >
                <Image
                  src={product?.image_url}
                  alt="Product Image Color"
                  className={` image-effect w-full h-full aspect-square transition-all duration-500 rounded-xl`}
                />
                {/* <div class="absolute inset-0 bg-red-900 mix-blend-color"></div> */}
              </div>

              <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-green-600 ">
                {color?.name}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
