import React from "react";
import Image from "../../common/components/Image";

export default function ShippingInformation() {
  return (
    <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
      <div className=" pb-8 border-b border-gray-300">
        <h2 className="font-manrope capitalize font-bold text-3xl leading-10 text-black">
          shipping information
        </h2>
      </div>
      <div className="pt-5">
        <div className=" grid grid-cols-2 gap-x-5 gap-y-2">
          <div>
            <div className=" flex items-center">
              <label
                htmlFor=""
                className="text-lg font-light uppercase text-gray-700"
              >
                Full Name
              </label>
              <div className="text-red-500 ps-1">*</div>
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg placeholder-gray-40 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <div className=" flex items-center">
              <label
                htmlFor=""
                className="text-lg font-light uppercase text-gray-700"
              >
                Email
              </label>
              <div className="text-red-500 ps-1">*</div>
            </div>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg placeholder-gray-40 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <div className=" flex items-center">
              <label
                htmlFor=""
                className="text-lg font-light uppercase text-gray-700"
              >
                Phone number
              </label>
              <div className="text-red-500 ps-1">*</div>
            </div>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg placeholder-gray-40 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <div className=" flex items-center">
              <label
                htmlFor=""
                className="text-lg font-light uppercase text-gray-700"
              >
                City/Town
              </label>
              <div className="text-red-500 ps-1">*</div>
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg placeholder-gray-40 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        <div className="mt-3">
          <div className=" flex items-center">
            <label
              htmlFor=""
              className="text-lg font-light uppercase text-gray-700"
            >
              Present Address
            </label>
            <div className="text-red-500 ps-1">*</div>
          </div>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg placeholder-gray-40 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mt-3">
          <div className=" flex items-center">
            <label
              htmlFor=""
              className="text-lg font-light uppercase text-gray-700"
            >
              Address
            </label>
            <div className="text-red-500 ps-1">*</div>
          </div>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg placeholder-gray-40 focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>
    </div>
  );
}
