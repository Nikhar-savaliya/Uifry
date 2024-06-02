import React, { useState } from "react";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const MobileNavMenu: React.FC = () => {
  return (
    <div className="md:hidden overflow-hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu className="h-[2.2rem] w-[2.2rem] scale-100" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 mr-4 p-4 text-xl flex flex-col items-center bg-background z-0">
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
