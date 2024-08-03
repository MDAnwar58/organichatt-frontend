import React, { Fragment } from "react";
import ProductFilterDrawer from "./ProductFilterDrawer";

export default function ProductFilter({
  productFilterDrawer,
  setProductFilterDrawer,
  productFilterDrawerRef,
}) {
  return (
    <Fragment>
      <div className="2lg:hidden block" ref={productFilterDrawerRef}>
        {/* drawer init and toggle */}
        <div className="text-center">
          <button
            className="text-white bg-green-400 hover:bg-green-500 px-[.6rem] pt-[.3rem] pb-[.1rem] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            onClick={() => setProductFilterDrawer(!productFilterDrawer)}
          >
            <i className="fi fi-bs-list" />
          </button>
        </div>

        <ProductFilterDrawer
          productFilterDrawer={productFilterDrawer}
          setProductFilterDrawer={setProductFilterDrawer}
        />
      </div>
    </Fragment>
  );
}
