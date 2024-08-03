"use client";
import React from "react";
import Link from "next/link";

export default function AlreadyHaveAnAccount() {
  return (
    <div className=" text-center mt-3">
      <span className="text-sm ml-2 text-gray-500">
        Already have an account?
        <Link
          href="/sign-in"
          className="ms-1  text-green-400 hover:text-green-500 group/sign-in"
        >
          Sign In
          <span className="hidden group-hover/sign-in:inline-flex group-hover/sign-in:transform group-hover/sign-in:translate-x-0.5 group-hover/sign-in:text-green-500">
            →
          </span>
        </Link>
      </span>
    </div>
  );
}
