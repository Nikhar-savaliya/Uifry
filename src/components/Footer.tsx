import Image from "next/image";

import logo from "@/assets/logo.svg";
import LogoName from "@/assets/LogoName.svg";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const navigation = {
  links: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    { name: "Bookings", href: "/" },
    { name: "Blog", href: "/" },
  ],
  legal: [
    { name: "Terms Of Use", href: "/" },
    { name: "Privacy Policy", href: "/" },
    { name: "Cookie Policy", href: "/" },
  ],
  product: [
    { name: "Take Tour", href: "/" },
    { name: "Live Chart", href: "/" },
    { name: "Reviews", href: "/" },
  ],
  newsletter: [{ name: "Take Tour", href: "/" }],
};

const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="w-full max-w-7xl mx-auto max-md:mt-16 p-8"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl  px-2">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="flex flex-col mb-8 md:mb-0 gap-4 items-start mr-16">
            <Link href={"/"} className="flex items-end gap-2">
              <Image src={logo} alt="Logo" priority={true} />
              <Image
                src={LogoName}
                alt="Logo"
                priority={true}
                className="dark:invert"
              />
            </Link>
            <p className="text-md max-w-xs leading-6 text-muted-foreground flex items-center gap-2">
              <Mail className="text-brand-red " /> help@frybix.com
            </p>
            <p className="text-md text-nowrap max-w-xs leading-6 text-muted-foreground flex items-center gap-2">
              <Phone className="text-brand-red " /> +1 234 456 678 89
            </p>
          </div>

          {/* Navigations */}
          <div className="grid gap-6 md:gap-14 grid-cols-2 lg:grid-cols-4 mr-auto">
            <FooterLinkComponent
              title={"links"}
              linksArray={navigation.links}
            />
            <FooterLinkComponent
              title={"legal"}
              linksArray={navigation.legal}
            />
            <FooterLinkComponent
              title={"product"}
              linksArray={navigation.product}
            />
            <FooterLinkComponent
              title={"newsletter"}
              linksArray={navigation.newsletter}
            />
          </div>
        </div>
        <form className="max-w-xl mt-12 grid grid-cols-4 gap-4 items-end">
          <input
            type="text"
            placeholder="Email"
            className="border p-4 rounded col-span-3"
          />
          <Button className="col-span-1 h-full w-full px-8">Send</Button>
        </form>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24 ">
          <p className="max-md:text-xs leading-5 text-muted-foreground text-center mb-8">
            Copyright 2022 uifry.com all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

interface LinkItem {
  name: string;
  href: string;
}

const FooterLinkComponent = ({
  title,
  linksArray,
}: {
  title: string;
  linksArray: Array<LinkItem>;
}) => {
  return (
    <div className="md:mt-0">
      <h3 className="text-xl md:text-3xl capitalize font-semibold leading-6 tracking-wide">
        {title}
      </h3>
      <div className="mt-2 md:mt-6 space-y-2 md:space-y-4">
        {linksArray.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="leading-6"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
