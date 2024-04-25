import { Gempa } from "@/types/gempa.type";
import { NextResponse } from "next/server";

export async function GET() {
  const getDataGempa = async () => {
    const response = await fetch(
      "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json",
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data.Infogempa.gempa as Gempa;
  };

  // check if current time is more than last update time and it within 5 minutes
  // if not, fetch new data and send push notification
  const data = await getDataGempa();
  const timeDiff = new Date().getTime() - new Date(data.Tanggal).getTime();
  const minutes = Math.floor(timeDiff / 60000);

  if (timeDiff > 0 && minutes < 5) {
    const newData = await getDataGempa();
   
  }
}
