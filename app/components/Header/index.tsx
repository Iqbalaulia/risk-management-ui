"use client";

import React from "react";
import { Button } from "flowbite-react";

export const Header = () => {
  return (
    <div className="flex items-center justify-between	mb-6">
      <label htmlFor="" className="text-xl font-semibold text-primary-black">
        Risks Identified
      </label>
      <Button color="light" className="border-b-2 rounded-none	border-r-0 border-l-0 border-t-0 border-primary-blue">
        <img src="/icon/ic_plus.svg" className="mr-1" alt="" />
        <span className="text-primary-black font-semibold text-sm	"> Add New Risk</span>
      </Button>
    </div>
  );
};
