"use client";
import React, { Fragment, useEffect } from "react";
import AppHeader from "./common/components/AppHeader";
import AppNavBar from "./common/components/AppNavBar";
import AppManus from "./common/components/AppManus";
import AppMobileFooterBar from "./common/components/AppMobileFooterBar";
import AppFooterBar from "./common/components/AppFooterBar";
import { Toaster } from "react-hot-toast";
import useCommonContext from "./common/_context/CommonContext";
import { getToken } from "../../services/token";
import "../../assets/css/category-items.css";
import usePathname from "./common/components/pathname";

export default function UserEndTemplate({ children }) {
  const auth = getToken("auth_user_token");
  const { cartProductCount, favoriteProductCount, getCarts, getFavorites } =
    useCommonContext();

  useEffect(() => {
    if (localStorage.getItem("page") === null) {
      localStorage.setItem("page", 1);
    }
    cartProductCount(auth?.user?.userId);
    favoriteProductCount(auth?.user?.userId);
    getFavorites(auth?.user?.userId);
    getCarts(auth?.user?.userId);
  }, []);

  return (
    <Fragment>
      <AppHeader />
      <div className=" sticky top-0 z-30">
        <AppNavBar />
        <AppManus />
      </div>
      {children}
      {/* app mobile screen footer bar */}
      <AppMobileFooterBar />
      <AppFooterBar />
      {/* <footer className=" text-center">Web Footer</footer> */}

      <Toaster />
    </Fragment>
  );
}
