"use client";
import React from "react";
import Image from "../../../(userend)/common/components/Image";
import { ImageUrl } from "../../../../services/ApiCalling";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AuthLogo() {
  const logo = ImageUrl("assets/images/organic-logo.png");
  const pathname = usePathname();
  return (
    <Link href="/">
      <Image
        src={logo}
        className={`${
          pathname === "/sign-in" ? "h-[10vh]" : "h-[15vh]"
        } mx-auto mb-5`}
        alt="logo"
      />
    </Link>
  );
}
