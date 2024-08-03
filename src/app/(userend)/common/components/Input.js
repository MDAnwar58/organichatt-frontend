import React from "react";

export default function Input({ type, useRef, className, placeholder }) {
  return (
    <input
      type={type}
      ref={useRef}
      className={className}
      placeholder={placeholder}
    />
  );
}
