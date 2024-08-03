"use client";
import React, { Fragment, useEffect } from "react";
import ProductImageSiwper from "./ProductImageSiwper";
import ProductInformation from "./ProductInformation";
import { useDispatch, useSelector } from "react-redux";
import { remove_product_from_modal } from "../../common/_api/action";

export default function ProductDetailModal({
  productDetailsModalIsOpen,
  setProductDetailsModalIsOpen,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (productDetailsModalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [productDetailsModalIsOpen]);

  const removeModalProductDetails = (object) => {
    dispatch(remove_product_from_modal(object));
  };

  const product = useSelector((state) => state.commonData.product);
  // console.log(product);
  return (
    <Fragment>
      {productDetailsModalIsOpen === true && (
        <div
          className={`fixed top-0 right-0 left-0 overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center md:w-full max-w-full md:inset-0 md:h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative md:p-4 p-0 md:max-w-6xl max-w-full md:max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className=" sticky top-0 right-0 left-0 bg-white flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 z-30">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Product Information
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setProductDetailsModalIsOpen(false);
                    removeModalProductDetails({});
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <ProductImageSiwper product={product} />
                  <ProductInformation product={product} />
                </div>
              </div>
              {/* Modal footer */}
              <div className=" z-30 sticky bottom-0 right-0 left-0 bg-white flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-red-300/70 rounded-lg border border-gray-200 hover:bg-red-500/70 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => {
                    setProductDetailsModalIsOpen(false);
                    removeModalProductDetails({});
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {productDetailsModalIsOpen === true && (
        <div
          className="bg-gray-900/30 dark:bg-gray-900/60 fixed inset-0 z-30"
          onClick={() => setProductDetailsModalIsOpen(false)}
        />
      )}
    </Fragment>
  );
}
