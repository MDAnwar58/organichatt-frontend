"use client";
import React, { useEffect, useState } from "react";
import ProductInformation from "../../common/components/ProductInformation";
import Tab from "./Tab";
import DescriptionTab from "./DescriptionTab";
import ReviewTab from "./ReviewTab";
import CommentsTab from "./CommentsTab";
import Product from "../../common/components/Product";
import ProductDetailModal from "../../common/components/ProductDetailModal";
import ProductImageSiwper from "../../common/components/ProductImageSiwper";

export default function ProductDetailsContent() {
  const [productDetailsModalIsOpen, setProductDetailsModalIsOpen] =
    useState(false);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
            <ProductImageSiwper />
          </div>
          <ProductInformation />
        </div>
      </div>

      <div className="xl:px-20 lg:px-[5.5rem] 2md:px-[5.5rem] md:px-[3rem] sm:px-[1.5rem] 4xs:px-7 px-5 pt-20">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <Tab />
        </div>
        <div>
          <DescriptionTab />
          <ReviewTab />
          <CommentsTab />
        </div>

        <div className=" pt-10">
          <div className=" relative">
            <div className=" text-2xl text-gray-500 font-bold">
              Related Products
            </div>
            <span className=" w-[191px] h-[2px] bg-green-500 inline-flex absolute bottom-0 start-0"></span>
          </div>
          <div className="pt-5">
            <div className="owl-carousel owl-related-product-carousel owl-theme">
              <div className="item sm:block flex justify-center">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductDetailModal
        productDetailsModalIsOpen={productDetailsModalIsOpen}
        setProductDetailsModalIsOpen={setProductDetailsModalIsOpen}
      />
    </section>
  );
}
