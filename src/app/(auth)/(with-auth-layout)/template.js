"use client";
import { useRouter } from "next/navigation";
import AuthBannerSvg from "./components/AuthBannerSvg";
import { getToken } from "../../../services/token";
import { useEffect, useState } from "react";
import "./auth.css";
import Providers from "./_api/Providers";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({ children }) {
  let auth = getToken("auth_user_token");
  const router = useRouter();
  const [content, setContent] = useState(true);
  useEffect(() => {
    if (auth !== null) {
      router.push("/");
      setContent(false);
    } else {
      setContent(true);
    }
  }, [auth, router, content]);

  return (
    content === true && (
      <div className="h-[100vh] sm:flex block sm:static relative">
        <AuthBannerSvg />
        <div className="auth-card xl:w-4/12 lg:w-5/12 sm:w-6/12 2xs:w-[27rem] 4xs:w-[90%] w-[95%] order-2 sm:bg-white bg-white/80 sm:py-0 py-5 sm:rounded-none rounded-md sm:shadow-none shadow-lg sm:border-0 border flex items-center sm:relative absolute sm:top-0 top-1/2 sm:left-0 left-1/2">
          <div className=" w-full lg:px-20 2md:px-16 md:px-10 px-5">
            <Providers>{children}</Providers>
          </div>
        </div>

        <Toaster />
      </div>
    )
  );
}
