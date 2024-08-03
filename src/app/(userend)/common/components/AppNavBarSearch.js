"use client";
import React, { useEffect, useState } from "react";
import AllCategoryBtn from "./AllCategoryBtn";
import useCommonContext from "../../common/_context/CommonContext";
import { useSelector } from "react-redux";
import usePathname from "./pathname";

export default function AppNavBarSearch() {
  const { getAllCategoryForManus } = useCommonContext();
  const pathname = usePathname();
  useEffect(() => {
    getAllCategoryForManus();
  }, []);

  const categories = useSelector((state) => state.commonData.categories);

  return (
    <div className="tems-center justify-between hidden md:flex w-full md:w-auto md:order-1">
      <form className="max-w-lg mx-auto">
        <div className="flex">
          {pathname !== "/products/" && (
            <AllCategoryBtn categories={categories} />
          )}
          <div className="relative lg:w-[600px] 2md:w-[250px] w-[220px]">
            <input
              type="search"
              id="search-dropdown"
              className={`block py-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  ${
                pathname !== "/products/"
                  ? "border-s-gray-50 rounded-e-lg px-2.5"
                  : "rounded-lg px-5"
              }  border-s-2 border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
              placeholder="Search Products..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-500 bg-gray-50 rounded-e-lg border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-green-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
