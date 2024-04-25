"use client";
import { Location } from "@/types/weather.type";
import { useEffect, useState } from "react";

type Props = {};

const Geolocation = (props: Props) => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [locationName, setLocationName] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
      });
    }
  }, []);

  useEffect(() => {
    const getLocationName = async (lat: number, lon: number) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/reverse?appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&lat=${lat}&lon=${lon}&limit=1`
        );
        const data = await response.json();
        setLocationName(data[0] as Location);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (location) {
      getLocationName(location.latitude, location.longitude);
    }
  }, []);

  return (
    <div>
      {location ? (
        <div>
          {locationName && !isLoading ? (
            <p>
              Your current location is {locationName.name}, {locationName.state}
              , {locationName.country}
            </p>
          ) : (
            <p>
              Can't get location name, please make sure your location is turned
              on
            </p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Geolocation;
