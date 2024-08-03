// "use client";
// import React, { Fragment, useEffect, useState } from "react";
// import AppHeader from "../components/AppHeader";
// import AppNavBar from "../components/AppNavBar";
// import AppManus from "../components/AppManus";
// import AppMobileFooterBar from "../components/AppMobileFooterBar";
// import AppFooterBar from "../components/AppFooterBar";
// import { Toaster } from "react-hot-toast";
// import useCommonContext from "./(userend)/root_api/_context/CommonContext";
// import { getToken } from "../services/token";
// import "../assets/css/category-items.css";

// export default function MainLayout({ children }) {
//   const auth = getToken("auth_user_token");
//   const { cartProductCount, favoriteProductCount } = useCommonContext();
//   useEffect(() => {
//     cartProductCount(auth?.user?.userId);
//     favoriteProductCount(auth?.user?.userId);
//   }, []);
//   //   const [pathname, setPathname] = useState("");
//   //   useEffect(() => {
//   //     // how to set pathname
//   //     setPathname(window.location.pathname);
//   //     const handleRouteChange = () => {
//   //       setPathname(window.location.pathname);
//   //     };
//   //     console.log(window.location.pathname);
//   //     // Initial pathname set
//   //     handleRouteChange();
//   //     // Listen for popstate event to handle browser navigation
//   //     window.addEventListener("popstate", handleRouteChange);
//   //     // Return cleanup function
//   //     return () => {
//   //       window.removeEventListener("popstate", handleRouteChange);
//   //     };
//   //   }, []);
//   return (
//     <Fragment>
//       <AppHeader />
//       <div className=" sticky top-0 z-30">
//         <AppNavBar />
//         <AppManus />
//       </div>
//       {children}
//       {/* app mobile screen footer bar */}
//       <AppMobileFooterBar />
//       <AppFooterBar />
//       {/* <footer className=" text-center">Web Footer</footer> */}

//       <Toaster />
//     </Fragment>
//   );
// }
