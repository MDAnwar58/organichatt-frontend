"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const ReactOwlCarousel = ({ someProp, children, ...carouselProps }) => {
  const [internalState, setInternalState] = useState(someProp);

  // Update internal state when props change
  useEffect(() => {
    setInternalState(someProp);
  }, [someProp]);

  return (
    <OwlCarousel className="owl-theme" loop {...carouselProps}>
      {children}
    </OwlCarousel>
  );
};

export default ReactOwlCarousel;
