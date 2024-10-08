import React from "react";

export default function EmailInput({ useRef, error }) {
  return (
    <div className={error ? "mb-2" : "mb-4"}>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none w-full focus:ring-0"
          type="text"
          ref={useRef}
          placeholder="Full Name"
        />
      </div>
      {error && <strong className="text-red-500 text-xs ps-5">{error}</strong>}
    </div>
  );
}
