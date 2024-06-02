import React from "react";

import mockup from "@/assets/download_img.png";
import Image from "next/image";
import star from "@/assets/Star.svg";
import gradient from "@/assets/gradient1.svg";

import { Button } from "./ui/button";
import { Download } from "lucide-react";

const DownloadApp = () => {
  return (
    <div className="relative md:my-48 md:py-24 h-full w-full grid grid-cols-1 md:grid-cols-2 md:rounded-xl max-md:bg-black text-primary-foreground max-md:place-content-start download-background p-8">
      {/* gradient */}
      <Image
        src={gradient}
        alt="gradient design"
        className="absolute -z-[101] -left-44 -top-44 max-md:left-3 max-md:top-3"
      />
      <Image
        src={star}
        alt="star design"
        className="absolute w-16 -right-28 -top-28 rotate-[25deg] dark:invert"
      />
      <Image
        src={star}
        alt="star design"
        className="absolute w-12 -left-24 top-28 dark:invert"
      />
      <div className="col-span-1 md:px-8 flex flex-col  md:ml-8">
        <p className="uppercase tracking-widest text-brand-red">Download</p>
        <h1 className="text-4xl dark:text-primary md:text-5xl font-bold mb-8 mt-1 capitalize">
          ready to get started?
        </h1>
        <p className="text-muted-foreground max-w-lg text-[18px] mb-4 tracking-wide">
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
        <Button
          size={"lg"}
          className="w-fit bg-white text-black hover:bg-white/80 h-16 px-10 flex items-center gap-2 text-[18px]"
        >
          <Download />
          Download
        </Button>
      </div>
    </div>
  );
};

export default DownloadApp;
