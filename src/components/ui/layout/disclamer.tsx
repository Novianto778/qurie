import { TriangleAlert } from "lucide-react";
import React from "react";

type Props = {};

const Disclamer = (props: Props) => {
  return (
    // make red line on the left side of the disclaimer
    <div className="container">
      <div
        className="p-4 flex flex-col gap-2 bg-gray-100 border-l-4 border-red-500 rounded-lg shadow-md
      "
      >
        <div className="flex gap-4 items-center">
          <TriangleAlert className="w-12 h-12 text-red-500" />
          <p className="text-red-500 font-bold text-lg">Disclaimer:</p>
        </div>
        <p className="text-muted-foreground text-sm">
          Please note that while this guide provides valuable first aid
          information, it is not a substitute for professional medical advice.
          Always seek medical attention for serious injuries or emergencies.
        </p>
      </div>
    </div>
  );
};

export default Disclamer;
