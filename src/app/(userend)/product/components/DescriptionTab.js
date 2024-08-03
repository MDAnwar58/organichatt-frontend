import React from "react";

export default function DescriptionTab() {
  return (
    <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This is some placeholder content the
        <strong className="font-medium text-gray-800 dark:text-white">
          Profile associated content
        </strong>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </p>
    </div>
  );
}
