import { Button } from "@/components/ui/button";
import { heroImageList } from "@/config/constant";
import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="container py-10 flex-col justify-center items-center">
      <h1 className="font-bold text-5xl text-center">
        Respond Rapidly, Staf Safe
      </h1>
      <p className="text-center text-lg text-muted-foreground mt-4">
        Stay prepared and connected in critical moments
      </p>
      <div className="flex mt-8 gap-8 justify-center">
        <Button className="rounded-full" size="lg">
          Get Started
        </Button>
        <Button variant="outline" className="rounded-full" size="lg">
          Learn More
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-8 max-w-[900px] mx-auto">
        {heroImageList.map((image, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full aspect-[3/4] object-cover rounded-lg"
              width={480}
              height={720}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
