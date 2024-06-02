import React from "react";
import Image from "next/image";

import data from "@/data.json";
import mockup from "@/assets/advantages_image.png";
import mockup2 from "@/assets/advantages_image2.png";
import ellipse from "@/assets/ellipse.svg";
import { Bell, Sparkle } from "lucide-react";
import star from "@/assets/Star.svg";
import gradient from "@/assets/gradient1.svg";

const Advantage = () => {
  const advantagesArray = data.advantages;
  return (
    <>
      <div className="md:mt-48 relative h-full w-full grid grid-cols-1 md:grid-cols-2">
        <Image
          src={star}
          alt="star design"
          className="absolute w-16 -right-28 top-28 rotate-[25deg] dark:invert"
        />
        <div className="col-span-1 px-8 flex flex-col justify-center mt-16">
          <p className="uppercase tracking-widest text-brand-red">Advantages</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-1 capitalize">
            Why Choose Uifry?
          </h1>
          <AdvantageItem {...advantagesArray[0]} />
        </div>
        <div className="relative col-span-1">
          {/* gradient */}
          <Image
            src={gradient}
            alt="gradient design"
            className="absolute -z-[101] left-0 bottom-4"
          />
          <Image
            src={ellipse}
            className="absolute top-0 -left-6 -z-10 dark:invert"
            alt={"App Mockup image"}
            priority={true}
          />
          <Image
            src={mockup}
            priority={true}
            className="w-fit ml-auto"
            alt={"App Mockup image"}
          />
        </div>
      </div>
      <div className="relative h-full w-full grid -grid-cols-1 md:grid-cols-2">
        <Image
          src={star}
          alt="star design"
          className="absolute w-12 left-1/2 -translate-x-1/2 max-md:left-1/4 max-md:-top-24 dark:invert"
        />
        <div className="relative max-md:order-2">
          {/* gradient */}
          <Image
            src={gradient}
            alt="gradient design"
            className="absolute -z-[101] right-0 bottom-4"
          />
          <Image
            src={ellipse}
            className="absolute top-0 left-0 -z-10 dark:invert"
            alt={"App Mockup image"}
            priority={true}
          />
          <Image
            src={mockup2}
            priority={true}
            className="w-fit ml-auto"
            alt={"App Mockup image"}
          />
        </div>
        <div className="col-span-1 p-8 flex flex-col justify-center md:mb-24">
          <AdvantageItem {...advantagesArray[1]} />
        </div>
        <Image
          src={star}
          alt="star design"
          className="absolute w-16 right-16 bottom-28 rotate-[25deg] -z-50 max-lg:bottom-0 dark:invert"
        />
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
          <IconComponent className="w-10 h-10 aspect-square p-2.5 rounded-full text-primary-foreground bg-brand-red" />
        ) : (
          <Image src={icon} width={24} height={24} alt="feature icon" />
        )}
        <p className="text-xl md:text-[28px] font-bold ">{title}</p>
      </span>
      <p className="text-muted-foreground mt-3 max-w-xl tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default Advantage;
