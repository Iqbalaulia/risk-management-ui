"use client";

import React from "react";

export const Footer = (props: {
  onContinueClick: any;
  handlePreviousClick: any;
}) => {
  const { onContinueClick, handlePreviousClick } = props;
  return (
    <div className="flex flex-wrap justify-between mt-6">
      <div>
        <button
          type="button"
          onClick={handlePreviousClick}
          className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Cancel
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={onContinueClick}
          className="text-blue-1 bg-primary-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
