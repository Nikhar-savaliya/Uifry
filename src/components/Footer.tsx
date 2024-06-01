import Image from "next/image";

import logo from "@/assets/logo.svg";
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
      className="font-inter w-full max-w-7xl"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col gap-4 items-start mr-16">
            <Image
              priority={true}
              unoptimized={true}
              width={100}
              height={40}
              src={logo}
              alt="logo"
              className="h-7 w-auto"
            />
            <p className="text-md max-w-xs leading-6 text-muted-foreground flex items-center gap-2">
              <Mail className="text-brand-red " /> help@frybix.com
            </p>
            <p className="text-md max-w-xs leading-6 text-muted-foreground flex items-center gap-2">
              <Phone className="text-brand-red " /> +1 234 456 678 89
            </p>
          </div>

          {/* Navigations */}
          <div className="grid gap-14 grid-cols-4 mr-auto">
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

          <form className="flex flex-col gap-4 items-end">
            <input
              type="text"
              placeholder="Email"
              className="border p-4 rounded"
            />
            <Button size={"lg"} className="w-fit">
              Send
            </Button>
          </form>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24 ">
          <p className=" leading-5 text-muted-foreground text-center mb-8">
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
      <h3 className="text-3xl capitalize font-semibold leading-6 tracking-tighter">
        {title}
      </h3>
      <div className="mt-6 space-y-4">
        {linksArray.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className=" leading-6 "
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
