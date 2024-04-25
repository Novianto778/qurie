import { Gempa } from "@/types/gempa.type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getShakeMapImage(earthquake: Gempa) {
  const arrJam = earthquake.Jam.split(":");
  const hour = arrJam[0];
  const minute = arrJam[1];
  const second = arrJam[2].split(" ")[0];
  const arr = earthquake.Tanggal.split(" ");
  const day = arr[0];
  const monthInNum = new Date(Date.parse(arr[1] + " 1, 2022")).getMonth() + 1;
  const month = monthInNum < 10 ? "0" + monthInNum : monthInNum;
  const year = arr[2];

  const shakeMap = year + month + day + hour + minute + second + ".mmi.jpg";
  return shakeMap;
}
