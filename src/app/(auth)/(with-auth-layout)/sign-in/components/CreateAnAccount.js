import Link from "next/link";
import React from "react";

export default function CreateAnAccount() {
  return (
    <div className=" text-center mt-3">
      <span className="text-sm ml-2 text-gray-500">
        Create an account?
        <Link
          href="/sign-up"
          className="ms-1 text-green-400 hover:text-green-500 group/sign-up"
        >
          Sign Up
          <span className="hidden group-hover/sign-up:inline-flex group-hover/sign-up:transform group-hover/sign-up:translate-x-0.5 group-hover/sign-up:text-green-500">
            →
          </span>
        </Link>
      </span>
    </div>
  );
}
