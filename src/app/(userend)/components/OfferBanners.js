"use client";
import React, { useEffect } from "react";
import Image from "../../components/Image";
import { ImageUrl } from "../../services/ApiCalling";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const ReactOwlCarousel = dynamic(() => import("./ReactOwlCarousel"), {
  ssr: false,
});

export default function OfferBanners(props) {
  const offerBanner = ImageUrl("assets/images/offer-banner.png");

  // Ensure jQuery is loaded before using OwlCarousel
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);

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
    <div className="py-5">
      <ReactOwlCarousel someProp={props.someValue} {...options}>
        <div className="offer-item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="offer-item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="offer-item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="offer-item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="offer-item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
        <div className="item">
          <Image
            src={offerBanner}
            className="h-[40vh] rounded-2xl"
            alt="offer Image"
          />
        </div>
      </ReactOwlCarousel>
    </div>
  );
}
