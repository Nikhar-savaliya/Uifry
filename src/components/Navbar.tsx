import React from "react";
import logo from "@/assets/logo.svg";
import logoName from "@/assets/LogoName.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNavMenu from "./MobileNavMenu";
import { ModeToggle } from "./ui/themeToggler";

const Navbar = () => {
  return (
    <div className="h-16 w-full flex items-center max-md:p-4">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center h-full">
          <Link href={"/"} className="flex items-end gap-2">
            <Image src={logo} alt="Logo" priority={true} />
            <Image
              src={logoName}
              alt="Logo"
              priority={true}
              className="dark:invert"
            />
          </Link>
          <ul className="max-md:hidden flex items-center gap-x-6 ml-9 tracking-wide font-medium text-xl">
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
        <div className="max-md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button className="h-full rounded-sm md:px-12 text-md">
            Download
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <MobileNavMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
