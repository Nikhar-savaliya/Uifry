import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  return (
    <div className="h-16 w-full flex items-center max-md:p-4">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center h-full">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" />
          </Link>
          <ul className="max-md:hidden flex items-center gap-x-6 ml-9 font-medium text-xl">
            <li>
              <Link href={"#home"} className="text-brand-red font-extrabold">
                Home
              </Link>
            </li>
            <li>
              <Link href={"#aboutUs"}>About Us</Link>
            </li>
            <li>
              <Link href={"#pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"#features"}>Features</Link>
            </li>
          </ul>
        </div>
        <Button className="max-md:hidden h-full rounded-sm md:px-12 text-md">
          Download
        </Button>
        <MobileNavMenu />
      </div>
    </div>
  );
};

export default Navbar;
