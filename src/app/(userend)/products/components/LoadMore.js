import { any } from "prop-types";
import React from "react";

export default function LoadMore({ onLoadMore }) {
  return (
    <div className=" text-center mt-10">
      <button
        type="button"
        className=" bg-green-400 text-white md:text-lg text-md font-semibold px-10 py-3 rounded-xl"
        onClick={() => onLoadMore(3)}
      >
        Load More
      </button>
    </div>
  );
}
