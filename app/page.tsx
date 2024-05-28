"use client";

import "./globals.css";
import { useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Step } from "./pages/Step";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinueClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousClick = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div>
      <Navbar mainNavigation={navigation} currentStep={currentStep} />
      <section className="p-4">
        <div className="flex flex-row ">
          <div className={`${showSidebar ? "basis-[34%]" : "basis-[4%]"}`}>
            <Sidebar
              onClick={() => setShowSidebar(!showSidebar)}
              showSidebar={showSidebar}
            />
          </div>
          <div className="basis-full bg-white rounded-2xl px-6 py-7">
            <Header />
            <Step currentStep={currentStep} />
            <Footer
              onContinueClick={handleContinueClick}
              handlePreviousClick={handlePreviousClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export const navigation = {
  logo: "/image/sirlus.png",
  stepCount: "4",
};
