import { useEffect, useState } from "react";

type Location = {
  lat: number;
  lon: number;
};

const useGetLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // request location
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      console.log("geolocation not available");
    }
  }, []);

  return location;
};

export default useGetLocation;
