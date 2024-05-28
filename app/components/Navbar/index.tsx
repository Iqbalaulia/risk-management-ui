"use client";

import React, { FC } from "react";

const getWidth = (step: any) => {
  switch (step) {
    case 1:
      return "w-[25%]";
    case 2:
      return "w-[50%]";
    case 3:
      return "w-[75%]";
    case 4:
      return "w-[100%]";
    default:
      return "w-[0%]";
  }
};
export const Navbar: FC<NavbarProps> = (props) => {
  const { mainNavigation, currentStep } = props;

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={mainNavigation.logo}
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <label className="font-semibold	text-xl mr-1" htmlFor="">
              Step
            </label>
            <span className="font-semibold text-xl">1</span>
            <span className="text-slate-400	 text-xl">/</span>
            <span className="text-slate-400	 text-xl">4</span>
          </div>
        </div>
        <div
          className={`indicator border-b-[6px] border-primary-orange ${getWidth(
            currentStep
          )}`}
        ></div>
      </nav>
    </div>
  );
};
