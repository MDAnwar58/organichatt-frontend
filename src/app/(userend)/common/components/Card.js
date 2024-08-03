import React from "react";

export default function Card({ children }) {
  return (
    <div className="flex justify-center items-center p-[100px] m-[10px] shadow-lg border border-1 border-[#ddd]">
      {children}
    </div>
  );
}
