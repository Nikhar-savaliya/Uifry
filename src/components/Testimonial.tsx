import Image from "next/image";
import React from "react";

import testimonial_image from "@/assets/Group 1000002331.png";
import ellipse from "@/assets/ellipse.svg";
import { Avatar, AvatarImage } from "./ui/avatar";

const Testimonial = () => {
  return (
    <div className="mt-24">
      <span className="text-center">
        <p className="uppercase tracking-widest text-accent-foreground">
          Testimonial
        </p>
        <p className="text-5xl max-w-md mx-auto font-bold mb-8 mt-1 capitalize">
          what our users say about us?
        </p>
        <div
          className="mt-48 h-full w-full grid grid-cols-2 items-start"
          id="features"
        >
          <div className="relative col-span-1">
            <Image
              src={testimonial_image}
              className=""
              alt={"App Mockup image"}
            />
            <Image
              src={ellipse}
              className="absolute -top-12 -left-12 -z-50"
              alt={"App Mockup image"}
            />
          </div>
          <div className="col-span-1 px-8 flex flex-col justify-center mt-16">
            <h1 className="text-[28px] max-w-md text-start font-bold mb-8 mt-1 capitalize">
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
            <p className="text-start font-bold">Nick Jonas</p>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Testimonial;
