import { featureList } from "@/config/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Feature = (props: Props) => {
  return (
    <section className="py-10 bg-ternary" id="feature">
      <div className="container">
        <h2 className="text-4xl font-bold text-balance text-center leading-snug">
          Everything You Need <br /> in One Place
        </h2>
        <div className="grid grid-cols-12 max-w-[900px] mx-auto gap-4 mt-4">
          {featureList.map((feature, index) => (
            <Link
              href={feature.href}
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4 justify-self-center rounded-lg"
            >
              <div className="flex items-center gap-8 mt-8 flex-col bg-white h-60 w-60 p-4 shadow-md">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="h-32 w-40 object-contain bg-cover"
                />
                <h3 className="text-xl font-bold text-balance">
                  {feature.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
