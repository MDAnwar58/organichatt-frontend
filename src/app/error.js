"use client";
import React from "react";

export default function ErrorBoundary({ error, reset }) {
  return (
    <div>
      {error.message} <br />
      <button
        type="button"
        onClick={reset}
        className=" bg-red-500 text-white rounded-lg px-5 py-1"
      >
        Try again
      </button>
    </div>
  );
}
