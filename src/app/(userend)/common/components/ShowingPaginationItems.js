import React from "react";

export default function ShowingPaginationItems({ page, totalPage, length }) {
  return (
    <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing page{" "}
      <span className="font-semibold text-gray-900 dark:text-white">
        {page}
      </span>{" "}
      to{" "}
      <span className="font-semibold text-gray-900 dark:text-white">
        {totalPage}
      </span>{" "}
      of{" "}
      <span className="font-semibold text-gray-900 dark:text-white">
        {length}
      </span>{" "}
      item entries
    </span>
  );
}
