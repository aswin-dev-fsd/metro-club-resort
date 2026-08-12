"use client";

import React, { useEffect, useState } from "react";
import { Cloud, Droplets, Eye, Gauge, Sunrise, Sunset, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import { resortInfo } from "@/data/resortInfo";

type WeatherResponse = {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_gusts_10m: number;
    cloud_cover: number;
    visibility: number;
    weather_code: number;
  };
  daily: { sunrise: string[]; sunset: string[] };
  hourly: { time: string[]; temperature_2m: number[]; precipitation_probability: number[] };
};

const CODES: Record<number, string> = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast clouds",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  80: "Rain showers",
  81: "Rain showers",
  82: "Violent showers",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
};

const url =
  `https://api.open-meteo.com/v1/forecast?latitude=${resortInfo.geo.latitude}&longitude=${resortInfo.geo.longitude}` +
  "&current=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure,wind_speed_10m,wind_gusts_10m,cloud_cover,visibility,weather_code" +
  "&hourly=temperature_2m,precipitation_probability&daily=sunrise,sunset&timezone=Asia%2FKolkata&forecast_days=1";

function time(iso: string) {
  return new Date(iso).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
}

export function WeatherPanel() {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Weather data unavailable");
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="h-72 w-full animate-pulse rounded-3xl bg-[#FCFBFA] border border-[#E8E3D9] flex items-center justify-center text-xs text-neutral-400 font-sans" aria-busy="true">
        Fetching live weather forecast...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-[#FCFBFA] border border-[#E8E3D9] rounded-3xl p-8 text-sm text-[#5e6660] font-sans">
        Live weather for {resortInfo.shortAddress} is momentarily unavailable. Expect warm days around
        30–34°C and pleasant evenings year round.
      </div>
    );
  }

  const c = data.current;
  const now = new Date();
  const upcoming = data.hourly.time
    .map((t, idx) => ({
      t,
      temp: data.hourly.temperature_2m[idx],
      rain: data.hourly.precipitation_probability[idx],
    }))
    .filter((h) => new Date(h.t) > now)
    .slice(0, 6);

  const stats = [
    { icon: Droplets, label: "Humidity", value: `${c.relative_humidity_2m}%` },
    { icon: Gauge, label: "Pressure", value: `${Math.round(c.surface_pressure)} mb` },
    { icon: Wind, label: "Wind", value: `${Math.round(c.wind_speed_10m)} km/h` },
    { icon: Wind, label: "Gusts", value: `${Math.round(c.wind_gusts_10m)} km/h` },
    { icon: Cloud, label: "Clouds", value: `${c.cloud_cover}%` },
    { icon: Eye, label: "Visibility", value: `${Math.round(c.visibility / 1000)} km` },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] font-sans">
      {/* Current Conditions */}
      <div className="bg-white border border-[#E8E3D9] rounded-3xl p-6 sm:p-8 shadow-sm">
        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#D48C00]">
          {resortInfo.shortAddress}
        </p>
        <div className="mt-5 flex items-end gap-4">
          <span className="font-serif text-6xl sm:text-7xl font-bold leading-none text-[#1B4332]">
            {Math.round(c.temperature_2m)}°
          </span>
          <div className="pb-2">
            <p className="text-sm font-bold text-[#1B4332]">
              {CODES[c.weather_code] ?? "Pleasant"}
            </p>
            <p className="text-xs text-[#5e6660]">
              Feels like {Math.round(c.apparent_temperature)}°C
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-[#FCFBFA] border border-[#E8E3D9]/60 p-4">
              <s.icon className="h-4 w-4 text-[#1B4332]" />
              <p className="mt-3 text-base font-bold text-[#1B4332]">{s.value}</p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#5e6660]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-6 text-xs text-[#5e6660] pt-4 border-t border-[#E8E3D9]/60">
          <span className="flex items-center gap-2">
            <Sunrise className="h-4 w-4 text-[#D48C00]" /> 
            <span>Sunrise {time(data.daily.sunrise[0])}</span>
          </span>
          <span className="flex items-center gap-2">
            <Sunset className="h-4 w-4 text-[#D48C00]" /> 
            <span>Sunset {time(data.daily.sunset[0])}</span>
          </span>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-white border border-[#E8E3D9] rounded-3xl p-6 sm:p-8 shadow-sm">
        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#D48C00]">
          Hourly Forecast
        </p>
        <ul className="mt-6 space-y-3">
          {upcoming.map((h) => (
            <li
              key={h.t}
              className="flex items-center justify-between rounded-2xl bg-[#FCFBFA] border border-[#E8E3D9]/60 px-5 py-3"
            >
              <span className="text-xs text-[#5e6660]">{time(h.t)}</span>
              <span className="text-xs font-semibold text-[#D48C00]">{h.rain}% rain</span>
              <span className="font-serif text-xl font-bold text-[#1B4332]">{Math.round(h.temp)}°</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[9px] font-bold uppercase tracking-wider text-neutral-400">
          Live data · Open-Meteo API
        </p>
      </div>
    </div>
  );
}
