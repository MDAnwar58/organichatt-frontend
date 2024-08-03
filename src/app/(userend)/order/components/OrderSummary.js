import React from "react";
import Image from "../../common/components/Image";
import { Checkbox, Label } from "flowbite-react";

export default function OrderSummary() {
  return (
    <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
      <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
        Order Summary
      </h2>
      <div className="mt-8">
        <form>
          <ul>
            <li className="flex items-center justify-between">
              <div className="flex">
                <Image
                  src="https://dummyimage.com/300x200/000/fff"
                  className="w-16 rounded-md"
                  alt="..."
                />
                <div className="ps-2">
                  <h4 className=" text-gray-700 text-md capitalize">
                    product name
                  </h4>
                  <h3 className=" text-gray-500 text-sm">2x</h3>
                </div>
              </div>
              <div>300tk</div>
            </li>
          </ul>
          {/* <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
            Promo Code
          </label>
          <div className="flex pb-4 w-full">
            <div className="relative w-full ">
              <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
              <input
                type="text"
                className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                placeholder="xxxx xxxx xxxx"
              />
              <button
                id="dropdown-button"
                data-target="dropdown"
                className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                type="button"
              >
                <svg
                  className="ml-2 my-auto"
                  width={12}
                  height={7}
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Shopping
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Images
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Finance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-200">
            <button className="rounded-full w-full bg-black py-3 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
              Apply
            </button>
          </div> */}
          <div className="flex items-center justify-between py-8">
            <p className="font-medium text-xl leading-8 text-black">3 Items</p>
            <p className="font-semibold text-xl leading-8 text-green-600">
              $485.00
            </p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Checkbox id="remember" defaultChecked />
            <Label htmlFor="remember" className=" uppercase">
              cash on delivery
            </Label>
          </div>
          <button className="w-full text-center bg-green-400 rounded-sm py-4 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-green-500">
            Order Place
          </button>
        </form>
      </div>
    </div>
  );
}
