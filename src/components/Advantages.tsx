import React from "react";
import Image from "next/image";

import data from "@/data.json";
import mockup from "@/assets/advantages_image.svg";
import mockup2 from "@/assets/advantages_image2.svg";
import { Bell, Box, LucideIcon, Package2, Sparkle } from "lucide-react";

const Advantage = () => {
  const advantagesArray = data.advantages;
  return (
    <>
      <div className="mt-48 h-full w-full grid grid-cols-2">
        <div className="col-span-1 px-8 flex flex-col justify-center mt-16">
          <p className="uppercase tracking-widest text-brand-red">Advantages</p>
          <h1 className="text-5xl font-bold mb-8 mt-1 capitalize">
            Why Choose Uifry?
          </h1>
          <AdvantageItem {...advantagesArray[0]} />
        </div>
        <Image src={mockup} className="" alt={"App Mockup image"} />
      </div>
      <div className=" h-full w-full grid grid-cols-2">
        <Image src={mockup2} className="col-span-1" alt={"App Mockup image"} />
        <div className="col-span-1 flex flex-col justify-center mb-24">
          <AdvantageItem {...advantagesArray[1]} />
        </div>
      </div>
    </>
  );
};

const AdvantageItem = ({
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
    notification: Bell,
  };

  const IconComponent = iconMap[icon];

  return (
    <div>
      <span className="flex gap-2 items-center">
        {IconComponent ? (
          <IconComponent className="w-10 h-10 p-2.5 rounded-full text-primary-foreground bg-brand-red" />
        ) : (
          <Image src={icon} width={24} height={24} alt="feature icon " />
        )}
        <p className="text-[28px] font-bold">{title}</p>
      </span>
      <p className="text-muted-foreground mt-3 max-w-xl">{description}</p>
    </div>
  );
};

export default Advantage;
