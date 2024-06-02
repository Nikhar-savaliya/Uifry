import Image from "next/image";
import React from "react";

import testimonial_image from "@/assets/Group 1000002331.png";
import ellipse from "@/assets/ellipse.svg";
import { Avatar, AvatarImage } from "./ui/avatar";
import star from "@/assets/Star.svg";

const Testimonial = () => {
  return (
    <div className="mt-24 p-8">
      <span className="md:text-center">
        <p className="uppercase tracking-widest text-brand-red">Testimonial</p>
        <p className="text-3xl md:text-5xl max-w-md mx-auto font-bold mb-8 mt-1 capitalize">
          what our users say about us?
        </p>
        <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-2 items-start">
          <div className="relative col-span-1 place-self-center">
            <Image
              src={testimonial_image}
              className="max-md:pl-8"
              alt={"App Mockup image"}
            />
            <Image
              src={ellipse}
              className="absolute -top-7 -left-5 pl-8 md:-top-12 md:-left-12 -z-50"
              alt={"App Mockup image"}
            />
          </div>
          <div className=" col-span-1 flex flex-col justify-center md:mt-16">
            <h1 className="text-xl md:text-[28px] max-w-md text-start font-bold md:mb-8 mt-1 capitalize">
              the best financial accounting app ever!
            </h1>
            <p className="text-muted-foreground mt-3 max-w-xl text-start">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <div className="flex items-center gap-2 py-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/50" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/50" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/50" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/50" />
              </Avatar>
            </div>
            <p className="text-start font-bold"> - Nick Jonas</p>
          </div>
          <Image
            src={star}
            alt="star design"
            className="absolute w-12 md:left-0 bottom-0 -z-50  max-md:right-8 max-md:-bottom-24"
          />
        </div>
      </span>
    </div>
  );
};

export default Testimonial;
