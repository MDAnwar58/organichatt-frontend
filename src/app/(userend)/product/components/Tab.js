import React from "react";

export default function Tab() {
  return (
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
      <li className="me-2">
        <button className="inline-block p-4 border-b-2 rounded-t-lg">
          Description
        </button>
      </li>
      <li className="me-2">
        <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
          Reviews
        </button>
      </li>
      <li className="me-2">
        <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
          Comments
        </button>
      </li>
    </ul>
  );
}
