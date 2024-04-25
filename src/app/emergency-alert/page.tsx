import EarthQuakeData from "@/components/features/emergency/earthquake-data";
import ListEarthQuake from "@/components/features/emergency/list-earthquake";
import { RefreshCache } from "@/components/refresh-cache";
import Banner from "@/components/ui/layout/banner";
import { Gempa } from "@/types/gempa.type";
import Image from "next/image";

type Props = {};
export const getDataGempa = async () => {
  const response = await fetch(
    "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.Infogempa.gempa as Gempa;
};

const EmergencyAlert = async () => {
  const data = await getDataGempa();

  return (
    <div>
      <RefreshCache />
      <Banner
        image="/assets/images/feature4.png"
        bg="#FECBCE"
        title="Emergency Alert Warning"
        subtitle="Stay informed and take immediate action during emergencies with our alert warning system. Receive timely notifications about potential threats in your area and follow recommended safety measures."
      />
      <div className="container">
        <h2 className="text-4xl font-bold text-balance text-center leading-snug mt-8">
          Latest Earthquake Alert
        </h2>
        <div className="flex items-center flex-wrap">
          <Image
            src={"https://data.bmkg.go.id/DataMKG/TEWS/" + data.Shakemap}
            alt="Emergency Alert"
            width={500}
            height={500}
          />
          <EarthQuakeData data={data} />
        </div>
        <ListEarthQuake />
      </div>
    </div>
  );
};

export default EmergencyAlert;
