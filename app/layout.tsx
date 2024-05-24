"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <html lang="en">
      <body>
        <Navbar mainNavigation={navigation} />
        <section className="p-4">
          <div className="flex flex-row ">
            <div className={`${showSidebar ? "basis-[34%]" : "basis-[4%]"}`}>
              <Sidebar
                onClick={() => setShowSidebar(!showSidebar)}
                showSidebar={showSidebar}
              />
            </div>
            <div className="basis-full">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}

export const navigation = {
  logo: "/image/sirlus.png",
  step: "1",
  stepCount: "4",
};
