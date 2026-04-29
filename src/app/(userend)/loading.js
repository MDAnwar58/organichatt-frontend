"use client";
import React from "react";
import { Spinner } from "flowbite-react";

export default function Loading() {
   return (
      <div
         className={` text-3xl font-bold h-screen w-full flex justify-center items-center`}
      >
         <Spinner color="success" aria-label="Success spinner example" />
      </div>
   );
}
