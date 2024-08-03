import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: true,
});

export default function Slider() {
  // Ensure jQuery is loaded before using OwlCarousel
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div>
      <h1>Owl Carousel in Next.js</h1>
      <OwlCarousel className="owl-theme" loop {...options}>
        <div className="item">
          <h4>1</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
        <div className="item">
          <h4>6</h4>
        </div>
      </OwlCarousel>
    </div>
  );
}
