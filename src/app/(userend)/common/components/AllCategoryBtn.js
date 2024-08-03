"use client";
import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { ArrowBackIcon } from "./icons";
import NavLink from "./NavLink";
import SubCategoryManus from "./SubCategoryManus";
import Image from "../components/Image";

export default function AllCategoryBtn({ categories }) {
  const [dropdownBtnCategoryId, setDropdownBtnCategoryId] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  const allCategoryBtn = (
    <span className="w-48 h-full flex-shrink-0 z-10 inline-flex items-center justify-center text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
      All Categories
    </span>
  );
  return (
    <Dropdown label={allCategoryBtn} inline arrowIcon={false}>
      {categories.length > 0
        ? categories.map((category) => (
            <Dropdown.Header key={category.id}>
              <div className=" relative flex justify-between items-center">
                <NavLink
                  href={`/products/?category_slug=${category.slug}`}
                  className="me-5 flex items-center"
                >
                  <div>
                    <Image
                      src={category.icon_image_url}
                      alt={category.name}
                      className="w-7 h-7"
                    />
                  </div>
                  <span className="ms-3">{category.name}</span>
                </NavLink>
                <span
                  className={`text-gray-500 border border-1 border-gray-400 p-[0.15rem] rounded-full icon-rotate ${
                    category.id === dropdownBtnCategoryId ? "open" : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setDropdown(!dropdown);
                    }, 300);
                    if (dropdownBtnCategoryId === null) {
                      setDropdownBtnCategoryId(category.id);
                      return;
                    } else {
                      setDropdownBtnCategoryId(null);
                      return;
                    }
                  }}
                >
                  <ArrowBackIcon />
                </span>

                {dropdown === true && category.id === dropdownBtnCategoryId && (
                  <SubCategoryManus sub_categories={category.sub_categories} />
                )}
              </div>
            </Dropdown.Header>
          ))
        : null}
    </Dropdown>
  );
}
