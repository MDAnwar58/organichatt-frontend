import React from "react";
import { Fragment } from "react";
import Image from "../common/components/Image";
import { useSelector } from "react-redux";
import { Tooltip } from "flowbite-react";
import NavLink from "../common/components/NavLink";

export default function OurCategory() {
  const categories = useSelector((state) => state.home.categories);

  return (
    <Fragment>
      <h2 className="text-3xl font-bold text-gray-500 p-0 text-center pb-5">
        Our Category
      </h2>
      <div
        className={` grid ${
          categories.length > 0
            ? "xl:grid-cols-7 lg:grid-cols-6 2md:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 4xs:grid-cols-2 grid-cols-1 sm:gap-x-7 sm:gap-y-5 gap-3"
            : "grid-cols-1"
        }  pb-5`}
      >
        {categories.length > 0 ? (
          categories.map((category) => (
            <NavLink
              href={`/products/?category_slug=${category.slug}`}
              key={category.id}
              className="flex justify-center bg-green-100 rounded-md px-1 shadow-md border border-gray-200 py-5 w-full"
            >
              <Tooltip
                content={category.name}
                arrow={false}
                className=" bg-green-400"
              >
                <Image
                  src={category.image_url}
                  className="h-[90px] w-[90px] rounded-t-md mx-auto scale-100 hover:scale-150"
                  alt={category.slug}
                />
              </Tooltip>
            </NavLink>
          ))
        ) : (
          <div className="text-center font-semibold text-xl text-gray-300">
            Data not found
          </div>
        )}
      </div>
    </Fragment>
  );
}
