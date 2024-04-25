"use client";

import { checkIfDataChange } from "@/app/emergency-alert/actions";
import { useInterval } from "interval-hooks";
import { useEffect, useState } from "react";

export function RefreshCache() {
  const check = () => checkIfDataChange(new Date());
  const [shouldRun, setShouldRun] = useState(
    typeof document !== "undefined" && document.hasFocus()
  );

  useEffect(() => {
    const onFocus = () => {
      check();
      setShouldRun(true);
    };
    const onBlur = () => setShouldRun(false);

    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, [check]);

  useInterval(check, shouldRun ? 10000 : null);

  return null;
}
