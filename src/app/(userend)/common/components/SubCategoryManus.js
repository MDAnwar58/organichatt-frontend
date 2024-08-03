import React from "react";
import NavLink from "./NavLink";

export default function SubCategoryManus({ sub_categories }) {
  return (
    <nav className=" absolute top-0 left-[113%] bg-white rounded-sm drop-shadow-sm">
      <ul>
        {sub_categories.length > 0 ? (
          sub_categories.map((sub_category) => (
            <li key={sub_category.id}>
              <NavLink
                href={`/products/?sub_category_slug=${sub_category.slug}`}
              >
                <div className="w-72 px-5 py-3 hover:bg-gray-100">
                  {sub_category.name}
                </div>
              </NavLink>
            </li>
          ))
        ) : (
          <li>
            <div className="w-72 px-5 py-3 hover:bg-gray-100 text-center">
              data not found
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}
