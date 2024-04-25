"use server";

import { revalidatePath } from "next/cache";
import { getDataGempa } from "./page";

export async function checkIfDataChange(currentDateTime: Date) {
  const checkNewData = await getDataGempa();
  const newDateTime = new Date(checkNewData.DateTime);
  const didChange = newDateTime.getTime() !== currentDateTime.getTime();
  console.log(
    "didChange",
    didChange,

    new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(new Date(Date.now()))
  );
  if (didChange) {
    revalidatePath("/emergency-alert");
  }
}
