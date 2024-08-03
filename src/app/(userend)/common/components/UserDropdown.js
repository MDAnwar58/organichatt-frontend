"use client";
import { useState, useEffect, useRef, Fragment } from "react";
import NavLink from "./NavLink";
import Image from "./Image";
import { removeToken } from "../../../../services/token";
import { useRouter } from "next/navigation";

const UserDropdown = ({ auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      ref={dropdownRef}
    >
      {auth ? (
        <Fragment>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <span className="flex text-sm bg-gray-800 border-[2.5px] border-green-500 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <Image
                src={
                  "https://images.unsplash.com/flagged/photo-1556470234-36a5389f905a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="user photo"
                className="md:w-9 w-10 md:h-9 h-10 rounded-full"
              />
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-9 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm font-semibold text-green-500 dark:text-white">
                  {auth.user.userName}
                </span>
                <span className="block text-sm text-gray-400 truncate dark:text-gray-400 underline">
                  {auth.user.userEmail}
                </span>
              </div>
              <ul className="py-2" onClick={() => setIsOpen(false)}>
                <li>
                  <NavLink
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    className=" cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-green-400 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={() => {
                      const token = removeToken("auth_user_token");
                      if (token !== null) {
                        router.push("/sign-in");
                      }
                    }}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <NavLink
            href="/sign-in"
            className=" text-green-500 border-2 border-green-300 hover:bg-green-300 hover:text-white 5md:px-5 3/4xs:px-2 7xs:px-3 px-1 5md:py-2 7xs:py-1 py-[.05rem] rounded-xl transition-all"
          >
            Sign In
          </NavLink>
        </Fragment>
      )}
    </div>
  );
};

export default UserDropdown;
