import { Button } from "@/components/ui/button";
import { Gempa } from "@/types/gempa.type";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EarthQuakeData from "./earthquake-data";
import Image from "next/image";
import { getShakeMapImage } from "@/lib/utils";

type Props = {};

const getListEarthQuake = async () => {
  const response = await fetch(
    "https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data.Infogempa.gempa as Gempa[];
};

const ListEarthQuake = async (props: Props) => {
  const data = await getListEarthQuake();
  return (
    // render latest 5 earthquake data with simple list like date time, location and with detail button
    <div className="container">
      <h2 className="text-4xl font-bold text-balance text-center leading-snug mt-8">
        5 Latest Earthquake
      </h2>
      <div className="flex flex-col gap-8 mt-8">
        {data.slice(0, 5).map((earthquake, index) => {
          const shakeMap = getShakeMapImage(earthquake);

          return (
            <div
              key={index}
              className="flex flex-col bg-white p-4 shadow rounded-lg"
            >
              <p className="font-semibold">
                {earthquake.Tanggal} - {earthquake.Jam}
              </p>
              <p className="font-medium">
                {earthquake.Lintang} - {earthquake.Bujur}
              </p>
              <p className="font-medium">{earthquake.Wilayah}</p>
              <p className="font-medium">
                Magnitude{" "}
                <span className="font-bold">{earthquake.Magnitude} SR</span>
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="max-w-max mt-4" variant="secondary">
                    Detail
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full">
                  <div className="flex items-center">
                    <Image
                      src={"https://data.bmkg.go.id/DataMKG/TEWS/" + shakeMap}
                      alt="Emergency Alert"
                      width={500}
                      height={500}
                    />
                    <EarthQuakeData data={earthquake} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListEarthQuake;
