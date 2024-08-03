"use client";
import React from "react";
import Link from "next/link";

export default function NavLink({ href, className, children }) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
