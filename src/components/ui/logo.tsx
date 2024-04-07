import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  height?: number;
};

const Logo = ({ className = "", height = 60 }: Props) => {
  const width = (height * 4) / 3;
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Qurie Logo"
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default Logo;
