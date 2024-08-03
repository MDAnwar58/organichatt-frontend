"use client";
import React, { Fragment } from "react";
import NavBarLink from "./NavBarLink";

export default function AppManus() {
  return (
    <Fragment>
      <nav className=" bg-green-400 dark:bg-green-500 md:block hidden shadow-md">
        <div className="px-20 py-3">
          <div className="flex items-center justify-end">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavBarLink
                  href="/"
                  className={` text-lg font-semibold hover:text-white hover:underline text-[1.13rem`}
                  exact
                >
                  Home
                </NavBarLink>
              </li>
              <li>
                <NavBarLink
                  href="/products"
                  className={` text-lg font-semibold hover:text-white hover:underline text-[1.13rem`}
                >
                  Products
                </NavBarLink>
              </li>
              <li>
                <NavBarLink
                  href="/offers"
                  className={` text-lg font-semibold hover:text-white hover:underline text-[1.13rem`}
                >
                  Offers
                </NavBarLink>
              </li>
              <li>
                <NavBarLink
                  href="/contact"
                  className={` text-lg font-semibold hover:text-white hover:underline text-[1.13rem`}
                >
                  Contact
                </NavBarLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
