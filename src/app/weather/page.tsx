"use client";
import Banner from "@/components/ui/layout/banner";
import useGetLocation from "@/hooks/useGetLocation";
import { kelvinToCelcius } from "@/lib/utils";
import { CurrentWeatherDataResponse } from "@/types/weather.type";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {};

const Weather = (props: Props) => {
  const [weather, setWeather] = useState<CurrentWeatherDataResponse | null>(
    null
  );
  const [weatherForecast, setWeatherForecast] = useState<
    CurrentWeatherDataResponse[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useGetLocation();
  console.log(weatherForecast);

  useEffect(() => {
    if (!location) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchForecast = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?cnt=5&lat=${location.lat}&lon=${location.lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
        );
        const data = await response.json();
        setWeatherForecast(data.list);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    fetchForecast();
  }, [location]);

  if (isLoading) return <div>Loading...</div>;

  if (!weather || !weatherForecast) return <div>Weather data not found</div>;

  return (
    <div>
      <Banner
        bg="#B5D4E8"
        title="Today's Weather Forecast"
        image="/assets/images/feature6.png"
        subtitle="Stay ahead of the weather with our comprehensive forecast. Get up-to-date information on current conditions, hourly forecasts, and extended outlooks to plan your day with confidence."
      />
      <div className="mt-8 container">
        <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-6xl font-bold">
                {kelvinToCelcius(weather?.main?.temp)} °C
              </span>
              <span className="font-semibold mt-1 text-gray-500">
                {weather?.name}
              </span>
            </div>
            <Image
              src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`}
              alt="weather icon"
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-between mt-12">
            {weatherForecast?.map((forecast, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <span className="font-semibold text-lg">
                    {kelvinToCelcius(forecast.main.temp)} °C
                  </span>
                  <Image
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt="weather icon"
                    width={50}
                    height={50}
                  />
                  <span className="font-semibold mt-1 text-sm">
                    {new Date(forecast.dt_txt.split(" ")[0]).toLocaleDateString(
                      "id-ID",
                      {
                        dateStyle: "short",
                      }
                    )}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {forecast.dt_txt.split(" ")[1]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
