import { howItWorksList } from "@/config/constant";
import React from "react";

type Props = {};

const How = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-4xl font-bold text-balance text-center leading-snug">
          How it Works
        </h2>
        <p className="text-center text-muted-foreground mt-2 max-w-3xl mx-auto text-balance">
          Qurie simplifies emergency response with intuitive features designed
          to keep you safe and informed
        </p>
        <div className="flex flex-wrap max-w-[980px] mx-auto gap-8 mt-4 justify-center">
          {howItWorksList.map((how, index) => (
            <div
              key={index}
              className="w-[300px] justify-self-center rounded-lg bg-white p-4 shadow"
            >
              <div className="flex items-center gap-8 mt-8 flex-col ">
                <img
                  src={how.src}
                  alt={how.alt}
                  className="h-32 w-40 object-contain bg-cover"
                />
                <h3 className="text-xl font-bold text-balance">
                  {index + 1}. {how.title}
                </h3>
                <p className="text-center text-muted-foreground mt-2 max-w-3xl mx-auto text-balance">
                  {how.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
