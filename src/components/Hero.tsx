import Image from "next/image";
import React from "react";

import mockup from "@/assets/iPhone-13-Pro-Front.svg";
import strip from "@/assets/hero-strip.svg";
import landingPageData from "@/data.json";
import { Button } from "./ui/button";
import Link from "next/link";
import { CirclePlay, MoveRight } from "lucide-react";

const Hero = () => {
  const { headline, subheadline, ctaButtons } = landingPageData.hero;

  return (
    <div className="mt-4 h-full w-full grid grid-cols-2" id="home">
      <div className="col-span-1 mt-32 flex flex-col justify-center p-8">
        <h1 className="text-6xl font-bold mb-4 capitalize">{headline}</h1>
        <p className="text-xl mb-6 capitalize">{subheadline}</p>
        <div className="flex items-center gap-6 ">
          <Button className="rounded-sm flex items-center gap-2 h-14 px-8 text-lg">
            <Link href={ctaButtons[0].link}>{ctaButtons[0].text}</Link>
            <MoveRight />
          </Button>
          <Button
            className="rounded-sm flex items-center gap-2 h-14 px-8 text-lg"
            variant={"ghost"}
          >
            <CirclePlay />
            <Link href={ctaButtons[1].link}>{ctaButtons[1].text}</Link>
          </Button>
        </div>
        <Image src={strip} alt="hero strip image" />
      </div>
      <div className="relative col-span-1">
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
