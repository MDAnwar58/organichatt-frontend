"use client";
import React, { Fragment, useEffect, useState } from "react";
import { CloseIcon } from "./icons";
import { useSelector } from "react-redux";
import NavLink from "./NavLink";
import Img from "./Image";

export default function MobileScreenCategoryManus({
  isMobileCategoryManusOpen,
  setIsMobileCategoryManusOpen,
}) {
  const [accordion, setAccordion] = useState(null);
  useEffect(() => {
    if (isMobileCategoryManusOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up function to reset the style when the component unmounts or isMobileCategoryManusOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileCategoryManusOpen]);
  const categories = useSelector((state) => state.commonData.categories);
  // console.log(categories);
  return (
    <div
      className={`${
        isMobileCategoryManusOpen === false && "hidden"
      } fixed top-0 bg-white h-full w-full z-[9999]`}
    >
      <div className="manu-header p-5 flex justify-between items-center">
        <span className=" text-2xl font-bold text-gray-500">
          All Categories
        </span>
        <button
          type="button"
          className=" bg-gray-100 text-gray-700 border border-1 border-gray-300 hover:bg-red-300 hover:text-white transition-all shadow-sm text-2xl p-1 rounded-lg"
          onClick={() => setIsMobileCategoryManusOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="menu-body overflow-y-auto overflow-x-hidden h-[calc(100%-60px)]">
        <div className="h-full">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <Fragment key={index + 1}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  >
                    <span className={`flex items-center`}>
                      <Img
                        src={category.icon_image_url}
                        alt={category.name}
                        className="w-7 h-7 me-3"
                      />
                      <NavLink href="">{category.name}</NavLink>
                    </span>
                    <span
                      onClick={() =>
                        setAccordion((prev) =>
                          prev === category.id ? null : category.id
                        )
                      }
                      className={`icon-rotate  ${
                        accordion !== category.id && "open"
                      } hover:bg-green-500 hover:text-white p-2 text-xl rounded-full border border-gray-300 text-gray-400`}
                    >
                      <svg
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div className={`${accordion !== category.id && "hidden"}`}>
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <ul className="mb-2 text-gray-500 dark:text-gray-400">
                      {category.sub_categories.length > 0 ? (
                        category.sub_categories.map((sub_category) => (
                          <li
                            key={sub_category.id}
                            className=" hover:bg-green-400 hover:text-white hover:font-semibold"
                          >
                            <NavLink href="">
                              <div className="p-3">{sub_category.name}</div>
                            </NavLink>
                          </li>
                        ))
                      ) : (
                        <li className=" hover:bg-green-400 hover:text-white hover:font-semibold">
                          <div className="p-3">Not found</div>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
