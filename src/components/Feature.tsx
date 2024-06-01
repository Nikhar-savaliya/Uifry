import React from "react";
import Image from "next/image";

import data from "@/data.json";
import mockup from "@/assets/iPhone-13-Pro-Front.svg";
import { Box, LucideIcon, Package2, Sparkle } from "lucide-react";

const Feature = () => {
  const featuresArray = data.features;
  return (
    <div className="mt-4 h-full w-full grid grid-cols-2" id="features">
      <div className="relative col-span-1 rotate-[14.5deg]">
        <Image src={mockup} className="absolute" alt={"App Mockup image"} />
      </div>
      <div className="col-span-1 flex flex-col justify-center mt-16">
        <p className="uppercase tracking-widest text-accent-foreground">
          features
        </p>
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
          <IconComponent className="w-6 h-6 text-accent-foreground" />
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
