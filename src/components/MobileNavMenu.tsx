"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const MobileNavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden relative overflow-hidden">
      <button
        className="relative z-20 p-2 focus:outline-none transition-all"
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-10 h-screen flex flex-col items-center justify-center bg-white transition-transform duration-300",
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
          <button className="mt-8 px-4 py-2 bg-brand-red text-white rounded-md">
            Download
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavMenu;
