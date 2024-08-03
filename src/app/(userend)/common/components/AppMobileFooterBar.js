"use client";
import React, { Fragment } from "react";
import NavLink from "./NavLink";
import usePathname from "./pathname";
import { useSelector } from "react-redux";

export default function AppMobileFooterBar() {
  const pathname = usePathname();

  const cartCount = useSelector((state) => state.commonData.cart_count);

  return (
    <Fragment>
      <nav className=" bg-gray-100 sticky bottom-0 pb-3 pt-4 md:hidden block sm:px-20 xs:px-16 px-5 z-20">
        <ul className="flex justify-between">
          <li>
            <NavLink
              href="/"
              className={` ${
                pathname === "/" ? "bg-green-400 text-white" : "text-gray-700"
              } hover:bg-green-400 hover:text-white  px-3  pb-[.20rem] pt-3 rounded-xl text-3xl`}
            >
              <i className="fi fi-bs-home" />
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/products"
              className={`${
                pathname === "/products/"
                  ? "bg-green-400 text-white"
                  : "text-gray-700"
              } hover:bg-green-400 hover:text-white px-3  pb-[.20rem] pt-3 rounded-xl  text-3xl`}
            >
              <i className="fi fi-bs-boxes" />
            </NavLink>
          </li>
          <li>
            <a
              href=""
              className=" absolute 4xs:top-[-35px] 5xs:top-[-40px] 6xs:top-[-45px] top-[-50px] left-1/2 bg-gray-200 hover:bg-gray-300 border-[3px] border-green-400 py-4 px-4 rounded-full"
              style={{ transform: "translateX(-50%)" }}
            >
              <div className=" relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z" />
                </svg>
                <span className="sr-only">Cart</span>
                <div
                  style={{ fontSize: "10px", lineHeight: "1rem" }}
                  className={`inline-flex absolute items-center justify-center py-[0.05rem] ${
                    cartCount > 9 ? "px-[0.23rem]" : "px-[0.35rem]"
                  } font-bold text-white bg-green-400 border-2 border-white rounded-full -top-2 -end-3 dark:border-gray-900`}
                >
                  {cartCount}
                </div>
              </div>
            </a>
          </li>
          <li>
            <NavLink
              href="/offers/"
              className={`${
                pathname === "/offers"
                  ? "bg-green-400 text-white"
                  : "text-gray-700"
              } hover:bg-green-400 hover:text-white px-3 pb-[.20rem] pt-3 rounded-xl  text-3xl`}
            >
              <i className="fi fi-bs-badge-percent" />
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/contact"
              className={`${
                pathname === "/contact/"
                  ? "bg-green-400 text-white"
                  : "text-gray-700"
              } hover:bg-green-400 hover:text-white px-3 pb-[.20rem] pt-3 rounded-xl  text-3xl`}
            >
              <i className="fi fi-bs-category" />
            </NavLink>
          </li>
        </ul>
        {/* <a
          href=""
          className=" absolute 2xs:top-[-40px] top-[-67px] left-1/2 bg-gray-200 hover:bg-gray-300 border-[3px] border-green-400 py-4 px-4 rounded-full"
          style={{ transform: "translateX(-50%)" }}
        >
          <div className=" relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z" />
            </svg>
            <span className="sr-only">Cart</span>
            <div
              style={{ fontSize: "10px", lineHeight: "1rem" }}
              className="inline-flex absolute items-center justify-center py-[0.05rem] px-[0.20rem] font-bold text-white bg-green-400 border-2 border-white rounded-full -top-2 -end-3 dark:border-gray-900"
            >
              20
            </div>
          </div>
        </a> */}
      </nav>
    </Fragment>
  );
}
