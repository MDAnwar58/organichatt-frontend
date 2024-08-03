"use client";
import Link from "next/link";
import React from "react";
import Image from "./Image";
import { ImageUrl } from "../../../../services/ApiCalling";

export default function AppNavBarLogo() {
  const logo = ImageUrl("assets/images/organic-logo.png");
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src={logo} alt="Organichatt" className="h-12 w-24" />
    </Link>
  );
}
