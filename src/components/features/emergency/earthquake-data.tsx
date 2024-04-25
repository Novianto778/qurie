import { Gempa } from "@/types/gempa.type";
import { Activity, AudioLines, Earth, MapPin, Radar } from "lucide-react";

type Props = {
  data: Gempa;
};

const EarthQuakeData = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-balance leading-snug">
        {data.Tanggal} - {data.Jam}
      </h2>
      <div className="flex gap-4 items-center">
        <Activity size={32} className="text-red-600" />
        <div>
          <p className="font-semibold">Magnitude</p>
          <h2 className="text-lg font-medium text-balance leading-snug">
            {data.Magnitude}
          </h2>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Radar size={32} className="text-green-500" />
        <div>
          <p className="font-semibold">Kedalaman</p>
          <h2 className="text-lg font-medium text-balance leading-snug">
            {data.Kedalaman}
          </h2>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <MapPin size={32} className="text-orange-500" />
        <div>
          <p className="font-semibold">Lokasi</p>
          <h2 className="text-lg font-medium text-balance leading-snug">
            {data.Lintang} - {data.Bujur}
          </h2>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Earth size={32} className="text-red-500" />
        <div>
          <p className="font-semibold">Kedalaman</p>
          <h2 className="text-lg font-medium text-balance leading-snug">
            {data.Wilayah}
          </h2>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <AudioLines size={32} className="text-orange-500" />
        <div>
          <p className="font-semibold">Dirasakan</p>
          <h2 className="text-lg font-medium text-balance leading-snug">
            {data.Dirasakan}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EarthQuakeData;
