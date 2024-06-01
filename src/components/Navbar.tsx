import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-center mt-[40px]">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center  h-full">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" />
          </Link>
          <ul className="flex items-center gap-x-6 ml-9 font-medium text-xl">
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
        <Button className="h-full rounded-sm px-12 text-md">Download</Button>
      </div>
    </div>
  );
};

export default Navbar;
