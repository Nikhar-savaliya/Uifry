import Image from "next/image";
import React from "react";

import mockup from "@/assets/iPhone-13-Pro-Front.svg";
import ellipse from "@/assets/ellipse.svg";
import strip from "@/assets/hero-strip.svg";
import data from "@/data.json";
import { Button } from "./ui/button";
import Link from "next/link";
import { CirclePlay, MoveRight } from "lucide-react";

import star from "@/assets/Star.svg";
import gradient from "@/assets/gradient1.svg";

const Hero = () => {
  const { headline, subheadline, ctaButtons } = data.hero;

  return (
    <div
      className="mt-4 w-full h-full grid grid-cols-1 md:grid-cols-2 relative "
      id="home"
    >
      {/* stars */}
      <Image
        src={star}
        alt="star design"
        className="absolute w-12 -left-24 top-6"
      />
      <Image
        src={star}
        alt="star design"
        className="absolute w-16 -right-28 -top-12 rotate-[25deg]"
      />

      {/* content */}
      <div className="col-span-1 mt-32 flex flex-col justify-center p-8 relative">
        {/* gradient */}
        <Image
          src={gradient}
          alt="star design"
          className="absolute -z-[101] left-28 -top-28 max-lg:left-20 max-lg:-top-24"
        />
        <Image
          src={star}
          alt="star design"
          className="absolute w-12 left-36 rotate-45 bottom-[340px] -z-50 max-md:left-16 max-md:-top-12"
        />
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
      <div className="max-md:hidden relative col-span-1">
        <Image
          src={star}
          alt="star design"
          className="absolute w-12 right-[440px] bottom-[260px]"
        />
        {/* gradient */}
        <Image
          src={gradient}
          alt="gradient design"
          className="absolute -z-[101] left-14 bottom-12 max-lg:bottom-56 max-lg:left-8"
        />
        <Image
          src={ellipse}
          className="absolute mt-4 ml-10"
          alt={"App Mockup image"}
        />
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
