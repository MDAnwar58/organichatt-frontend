import React from "react";

export default function EmailInput({ useRef, error }) {
  return (
    <div className={error ? "mb-2" : "mb-4"}>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none w-full focus:ring-0"
          type="email"
          ref={useRef}
          placeholder="Email Address"
        />
      </div>
      {error && <strong className="text-red-500 text-xs ps-5">{error}</strong>}
    </div>
  );
}
