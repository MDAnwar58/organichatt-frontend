"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";

const UserDropdown = dynamic(() => import("./UserDropdown"), { ssr: false });

export default function AppNavBarItems({
  auth,
  setIsOpenFavorite,
  setIsOpenCart,
}) {
  const router = useRouter();

  const cartCount = useSelector((state) => state.commonData.cart_count);
  const favoriteCount = useSelector((state) => state.commonData.favorite_count);
  // console.log(favoriteCount);
  return (
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <ul className="flex items-center">
        <NavItem
          className={`${
            auth ? "md:me-3 xs:me-5 me-3" : "md:me-3 xs:me-5 me-3"
          } pt-[.65rem]`}
        >
          <button
            type="button"
            className="relative inline-flex items-center p-[0.1rem] text-sm font-bold text-center text-gray-700 focus:outline-none cursor-pointer"
            onClick={() => {
              if (auth !== null) {
                setIsOpenFavorite(true);
              } else {
                router.push("/sign-in");
              }
            }}
          >
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z"
                fillRule="nonzero"
              />
            </svg>

            <span className="sr-only">Favorite</span>
            <div
              style={{ fontSize: 10, lineHeight: "1rem" }}
              className={`absolute inline-flex items-center justify-center py-[0.05rem] ${
                favoriteCount > 9 ? "px-[0.23rem]" : "px-[0.35rem]"
              } font-bold text-white bg-green-400 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900`}
            >
              {favoriteCount}
            </div>
          </button>
        </NavItem>
        <NavItem
          className={`md:block hidden ${
            auth ? "5md:me-5 2md:me-3 me-5" : "5md:me-5 me-3"
          } pt-[.65rem]`}
        >
          <button
            type="button"
            className="relative inline-flex
                  items-center p-[0.1rem] 4xs:text-sm text-xs font-medium text-center text-gray-700 focus:outline-none"
            onClick={() => {
              if (auth !== null) {
                setIsOpenCart(true);
              } else {
                router.push("/sign-in");
              }
            }}
          >
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
              style={{ fontSize: 10, lineHeight: "1rem" }}
              className={`absolute inline-flex items-center justify-center py-[0.05rem] ${
                cartCount > 9 ? "px-[0.23rem]" : "px-[0.35rem]"
              } font-bold text-white bg-green-400 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900`}
            >
              {cartCount}
            </div>
          </button>
        </NavItem>
        <NavItem>
          <UserDropdown auth={auth} />
        </NavItem>
      </ul>
    </div>
  );
}
