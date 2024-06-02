"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const MobileNavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden  overflow-hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 mr-4 p-4 text-xl flex flex-col items-center bg-background">
          <DropdownMenuItem className="px-4 py-2 text-lg">
            <Link href={"#home"} className="text-brand-red font-extrabold">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 text-lg">
            <Link href={"#aboutUs"}>About Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 text-lg">
            <Link href={"#pricing"}>Pricing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 text-lg">
            <Link href={"#features"}>Features</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavMenu;
