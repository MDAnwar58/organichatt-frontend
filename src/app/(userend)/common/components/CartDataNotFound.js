import React from "react";

export default function CartDataNotFound() {
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex justify-center w-full space-x-2 sm:space-x-4 relative text-2xl font-bold text-gray-500">
        Data not found
      </div>
    </li>
  );
}
