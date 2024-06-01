import React from "react";

import mockup from "@/assets/download_background_image.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const DownloadApp = () => {
  return (
    <div className="relative mt-48 h-full w-full grid grid-cols-2 text-primary-foreground aspect-video">
      <div className="col-span-1 px-8 flex flex-col mt-24 ml-8">
        <p className="uppercase tracking-widest text-brand-red">Download</p>
        <h1 className="text-5xl font-bold mb-8 mt-1 capitalize">
          ready to get started?
        </h1>
        <p className="text-muted-foreground max-w-lg text-[18px] mb-4">
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
      <Image
        src={mockup}
        className="absolute w-full -z-50"
        alt={"App Mockup image"}
      />
    </div>
  );
};

export default DownloadApp;
