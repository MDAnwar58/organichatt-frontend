"use client";
import React from "react";
import Link from "next/link";
import usePathname from "./pathname";

export default function NavBarLink({ href, exact, className, children }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`${isActive ? "text-white" : "text-gray-900"} ${className} `}
    >
      {children}
    </Link>
  );
}
