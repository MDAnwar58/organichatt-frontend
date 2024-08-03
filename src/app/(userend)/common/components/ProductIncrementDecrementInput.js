"use client";
import React from "react";
import { SvgMinusIcon, SvgPlusIcon } from "./svg-icons";

export default function ProductIncrementDecrementInput({
  product,
  qty,
  setQty,
  inputRef,
}) {
  const handleDecrement = () => {
    setQty((prev) => {
      const newQty = prev > 1 ? prev - 1 : prev;
      inputRef.current.value = newQty;
      return newQty;
    });
  };

  const handleIncrement = () => {
    setQty((prev) => {
      const newQty = prev < product?.available_quantity ? prev + 1 : prev;
      inputRef.current.value = newQty;
      return newQty;
    });
  };

  const handleInputChange = (e) => {
    const newQty = parseInt(e.target.value, 10) || 0;
    if (newQty >= 1 && newQty <= product?.available_quantity) {
      setQty(newQty);
    } else {
      inputRef.current.value = qty;
    }
  };

  return (
    <div className="flex items-center justify-center border border-gray-400 rounded-full">
      <button
        type="button"
        className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"
        onClick={handleDecrement}
      >
        <SvgMinusIcon className="stroke-black group-hover:stroke-black" />
      </button>
      <input
        type="text"
        ref={inputRef}
        className="font-semibold text-gray-700 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-500 text-center hover:text-green-600 outline-0 hover:placeholder:text-green-600 focus:border-green-500 focus:ring-green-500"
        defaultValue={qty}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"
        onClick={handleIncrement}
      >
        <SvgPlusIcon className="stroke-black group-hover:stroke-black" />
      </button>
    </div>
  );
}
