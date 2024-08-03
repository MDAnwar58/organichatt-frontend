"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function EmailInput({ useRef, error }) {
  const [inputType, setInputType] = useState(false);
  const pathname = usePathname();

  return (
    <div className={pathname === "/sign-in" ? "" : error ? "mb-2" : "mb-4"}>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none w-full focus:ring-0  focus:bg-white"
          type={inputType === true ? "text" : "password"}
          ref={useRef}
          placeholder={
            pathname === "reset-password" ? "New Password" : "Password"
          }
        />
        <button
          type="button"
          className=" text-gray-400 text-xl px-[0.20rem] pt-1"
          onClick={() => setInputType(!inputType)}
        >
          <span>
            {inputType === false ? (
              <i className="fi fi-bs-eye" />
            ) : (
              <i className="fi fi-bs-low-vision"></i>
            )}
          </span>
        </button>
      </div>
      {error && <strong className="text-red-500 text-xs ps-5">{error}</strong>}
    </div>
  );
}
