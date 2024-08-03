"use client";
import React, { Fragment, useState } from "react";
import AppNavBarItems from "./AppNavBarItems";
import AppNavBarLogo from "./AppNavBarLogo";
import AppNavBarSearch from "./AppNavBarSearch";
import AppNavBarToggleManus from "./AppNavBarToggleManus";
import DrawerFavoriteList from "./DrawerFavoriteList";
import DrawerCartList from "./DrawerCartList";
import { getToken } from "../../../../services/token";
import ToggleManuBtn from "./ToggleManuBtn";
import MobileScreenCategoryManus from "./MobileScreenCategoryManus";

export default function AppNavBar() {
  const [isOpenFavorite, setIsOpenFavorite] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isMobileCategoryManusOpen, setIsMobileCategoryManusOpen] =
    useState(false);
  const auth = getToken("auth_user_token");

  return (
    <Fragment>
      <nav className="bg-gray-100/95 dark:bg-gray-900 md:shadow-none shadow-md md:border-b border-gray-300">
        <div className="flex flex-wrap items-center justify-between xl:px-20 lg:px-[5.5rem] 2md:px-[5.5rem] md:px-[3rem] sm:px-[1.5rem] 4xs:px-7 px-5 py-4">
          <div className="flex items-center">
            <ToggleManuBtn
              setIsMobileCategoryManusOpen={setIsMobileCategoryManusOpen}
            />
            <AppNavBarLogo />
          </div>
          <AppNavBarItems
            auth={auth}
            setIsOpenFavorite={setIsOpenFavorite}
            setIsOpenCart={setIsOpenCart}
          />
          <AppNavBarSearch />
          <AppNavBarToggleManus />
        </div>
        <MobileScreenCategoryManus
          isMobileCategoryManusOpen={isMobileCategoryManusOpen}
          setIsMobileCategoryManusOpen={setIsMobileCategoryManusOpen}
        />
      </nav>

      <DrawerFavoriteList
        isOpenFavorite={isOpenFavorite}
        setIsOpenFavorite={setIsOpenFavorite}
      />
      <DrawerCartList isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
    </Fragment>
  );
}
