"use client";
import React, { useEffect } from "react";
import Image from "../common/components/Image";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

// Dynamically import OwlCarousel to avoid SSR issues
const ReactOwlCarousel = dynamic(() => import("./ReactOwlCarousel"), {
  ssr: false,
});

export default function OfferBanner(props) {
  // Ensure jQuery is loaded before using OwlCarousel
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);

  const offers = useSelector((state) => state.home.offers);

  const options = {
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    dots: false,
  };
  return (
    <div className=" py-10">
      <ReactOwlCarousel someProp={props.someValue} {...options}>
        {offers.length > 0
          ? offers.map((offer) => (
              <a key={offer.id} href="" className="offer-item">
                <Image
                  src={offer.image_url}
                  className="h-[40vh] rounded-2xl"
                  alt="offer Image"
                />
              </a>
            ))
          : null}
      </ReactOwlCarousel>
    </div>
  );
}
