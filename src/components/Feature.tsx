import React from "react";
import Image from "next/image";

import data from "@/data.json";
import mockup from "@/assets/feature_image1.png";
import star from "@/assets/Star.svg";
import { Box, Package2, Sparkle } from "lucide-react";
import gradient from "@/assets/gradient1.svg";

const Feature = () => {
  const featuresArray = data.features;
  return (
    <div
      className="mt-4 h-full w-full grid grid-cols-1 md:grid-cols-2 relative "
      id="features"
    >
      <div className="relative">
        {/* stars */}
        <Image
          src={star}
          alt="star design"
          className="absolute w-12 -left-24 top-1/4"
        />
        {/* gradient */}
        <Image
          src={gradient}
          alt="star design"
          className="absolute -z-[101] lg:left-10 top-0"
        />

        <Image
          src={mockup}
          className="col-span-1 place-self-center"
          alt={"App Mockup image"}
        />
      </div>
      <div className="relative col-span-1 flex flex-col justify-center md:mt-16 p-8">
        <p className="uppercase tracking-widest text-brand-red">features</p>
        <h1 className="text-5xl font-bold mb-8 mt-1 capitalize">
          uifry premium
        </h1>
        <div className="flex flex-col gap-8 ">
          {featuresArray.map((feat) => {
            return <FeatureItem {...feat} />;
          })}
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) => {
  const iconMap: any = {
    sparkle: Sparkle,
    box: Box,
    package: Package2,
  };

  const IconComponent = iconMap[icon];

  return (
    <div>
      <span className="flex gap-2 items-center">
        {IconComponent ? (
          <IconComponent className="w-6 h-6 text-brand-red" />
        ) : (
          <Image src={icon} width={24} height={24} alt="feature icon " />
        )}
        <p className="text-[18px] font-bold">{title}</p>
      </span>
      <p className="text-muted-foreground mt-3 max-w-xl">{description}</p>
    </div>
  );
};

export default Feature;
