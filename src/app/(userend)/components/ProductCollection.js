"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Product from "../common/components/Product";
import dynamic from "next/dynamic";
import Link from "next/link";
import "../../../assets/css/collection-slider.css";
import { useSelector } from "react-redux";

// Dynamically import OwlCarousel to avoid SSR issues
const ReactOwlCarousel = dynamic(() => import("./ReactOwlCarousel"), {
  ssr: false,
});

export default function ProductCollection({
  someValue,
  setProductDetailsModalIsOpen,
  getProductForModal,
  productAddToCart,
  productAddToFavorite,
}) {
  // Ensure jQuery is loaded before using OwlCarousel
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);

  const collections = useSelector((state) => state.home.collections);

  const options = {
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      610: {
        items: 2,
      },
      1020: {
        items: 3,
      },
      1275: {
        items: 4,
      },
    },
  };
  const getTextWidth = (text, fontSize, fontWeight, fontFamily) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Construct the font string in the proper format
    context.font = `${fontWeight} ${fontSize} ${fontFamily}`;

    return context.measureText(text).width;
  };
  return (
    <Fragment>
      {collections.length > 0 &&
        collections.map(
          (collection, index) =>
            collection.products.length > 0 && (
              <div key={index} className="pt-5 md:pb-5 3xs:pb-10 pb-5">
                <div className="flex justify-between items-center">
                  <div className=" relative">
                    <div className=" text-2xl text-gray-500 font-bold capitalize">
                      {collection.name}
                    </div>
                    <span
                      style={{
                        width: `${getTextWidth(
                          collection.name,
                          "1.5rem",
                          "700",
                          "Arial"
                        )}px`,
                        height: "2px",
                      }}
                      className={` bg-green-500 inline-flex absolute bottom-0 start-0`}
                    />
                  </div>
                  <div className="3xs:block hidden">
                    <a
                      href="#"
                      className=" capitalize border-2 border-green-500 rounded-md text-green-500 hover:text-green-600 px-1"
                    >
                      view all
                    </a>
                  </div>
                </div>
                <div className=" py-5 owl-collection-carousel">
                  <ReactOwlCarousel someProp={someValue} {...options}>
                    {collection.products.map((product) => (
                      <div
                        key={product.id}
                        className="item sm:block flex justify-center"
                      >
                        <Product
                          setProductDetailsModalIsOpen={
                            setProductDetailsModalIsOpen
                          }
                          getProductForModal={getProductForModal}
                          product={product}
                          productAddToCart={productAddToCart}
                          productAddToFavorite={productAddToFavorite}
                        />
                      </div>
                    ))}
                  </ReactOwlCarousel>
                  <div className="text-center pt-5 pb-10 3xs:hidden block">
                    <Link
                      href="#"
                      className=" capitalize border-2 border-green-500 rounded-md text-green-500 hover:text-green-600 px-5 py-2"
                    >
                      view all
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
    </Fragment>
  );
}
