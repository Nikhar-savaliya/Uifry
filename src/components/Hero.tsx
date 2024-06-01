import Image from "next/image";
import React from "react";

import mockup from "@/assets/iPhone-13-Pro-Front.svg";
import strip from "@/assets/hero-strip.svg";
import data from "@/data.json";
import { Button } from "./ui/button";
import Link from "next/link";
import { CirclePlay, MoveRight } from "lucide-react";

const Hero = () => {
  const { headline, subheadline, ctaButtons } = data.hero;

  return (
    <div
      className="mt-4 w-full h-full grid grid-cols-1 md:grid-cols-2"
      id="home"
    >
      <div className="col-span-1 mt-32 flex flex-col justify-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 capitalize">
          {headline}
        </h1>
        <p className=" md:text-xl mb-6 capitalize text-muted-foreground tracking-wide">
          {subheadline}
        </p>
        <div className="flex max-md:flex-col max-md:items-start items-center justify-start gap-6">
          <Button className="rounded-sm flex items-center gap-2 h-14 px-8 text-lg">
            <Link href={ctaButtons[0].link}>{ctaButtons[0].text}</Link>
            <MoveRight />
          </Button>
          <Button
            className="rounded-sm flex items-center gap-2 h-14 px-8 text-lg hover:bg-secondary hover:text-secondary-foreground"
            variant={"outline"}
          >
            <CirclePlay />
            <Link href={ctaButtons[1].link}>{ctaButtons[1].text}</Link>
          </Button>
        </div>
        <Image src={strip} alt="hero strip image" className="max-md:hidden" />
      </div>
      <div className="max-md:hidden relative col-span-1 ">
        <Image
          src={mockup}
          className="absolute mt-40 ml-40"
          alt={"App Mockup image"}
        />
        <Image
          src={mockup}
          className="absolute mt-20 ml-20"
          alt={"App Mockup image"}
        />
        <Image
          src={mockup}
          className="absolute mt-0 ml-0"
          alt={"App Mockup image"}
        />
      </div>
    </div>
  );
};

export default Hero;
