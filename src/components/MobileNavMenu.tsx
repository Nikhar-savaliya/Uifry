"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="relative z-20 p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="block w-8 h-1 bg-black mb-1"></span>
        <span className="block w-8 h-1 bg-black mb-1"></span>
        <span className="block w-8 h-1 bg-black"></span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-10 flex flex-col items-center justify-center bg-white transition-transform duration-300",
          { "translate-x-full": !isOpen }
        )}
      >
        <nav className="flex flex-col items-center space-y-4">
          <a href="#home" className="text-2xl font-medium">
            Home
          </a>
          <a href="#about" className="text-2xl font-medium">
            About Us
          </a>
          <a href="#pricing" className="text-2xl font-medium">
            Pricing
          </a>
          <a href="#features" className="text-2xl font-medium">
            Features
          </a>
          <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md">
            Download
          </button>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
