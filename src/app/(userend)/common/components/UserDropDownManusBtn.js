"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "./Image";

export default function UserDropDownManusBtn() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle clicks outside of dropdown
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.pointerType !== "mouse"
    ) {
      setDropdown(false);
    }
  };
  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=" relative">
      <button
        type="button"
        className="flex text-sm bg-gray-800 border-2 border-green-500 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        onClick={() => setDropdown(!dropdown)}
        ref={dropdownRef}
      >
        <span className="sr-only">Open user menu</span>
        <Image
          src={
            "https://images.unsplash.com/flagged/photo-1556470234-36a5389f905a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="user photo"
          className="w-8 h-8 rounded-full"
        />
      </button>
      {/* Dropdown menu */}
      <div
        className={`z-50 ${
          dropdown === false && "hidden"
        } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-7 right-0`}
      >
        <div className="px-4 py-3 user">
          <span className="block text-sm font-semibold text-gray-900 dark:text-white">
            username
          </span>
          <span className="block text-sm  text-green-500 underline font-semibold truncate dark:text-gray-400">
            useremail@gmail.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href=""
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
