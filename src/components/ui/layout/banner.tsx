import { PLACEHOLDERIMAGE } from "@/config/constant";
import Image from "next/image";

type Props = {
  title: string;
  image?: string;
  subtitle: string;
  bg: string;
};

const Banner = ({ title, image, subtitle, bg }: Props) => {
  return (
    <div
      style={{
        backgroundColor: bg,
      }}
    >
      <div className="container grid grid-cols-12 gap-x-0 md:gap-x-8 gap-8 py-10 items-center">
        <div className="hidden md:block md:col-span-4">
          <Image
            src={image ? image : PLACEHOLDERIMAGE}
            alt="First Aid Guide"
            width={500}
            height={500}
            className="w-60"
          />
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-4xl font-bold text-balance leading-snug text-responsive-heading">
            {title}
          </h2>
          <p className="text-[#494949] mt-2 max-w-3xl text-balance">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
