"use client";

import { useEffect, useState } from "react";
import "@/app/page.css";

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const minuteDeg = (minute * 360) / 60;
  const hourDeg = ((hour % 12) * 360) / 12 + minuteDeg / 12;
  const secondDeg = (second * 360) / 60;

  return (
    <main>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="rounded-full border-4 border-gray-300 h-64 w-64  md:h-96 md:w-96  lg:h-120 lg:w-120">
          <div
            className="stick bg-gray-400 h-16 md:h-36 lg:h-36 w-4  "
            style={{ transform: `rotate(${hourDeg}deg)` }}
          ></div>
          <div
            className="stick bg-gray-400 h-22 md:h-42 lg:h-44 w-1.5 "
            style={{ transform: `rotate(${minuteDeg}deg)` }}
          ></div>
          <div
            className="stick bg-red-200 h-26 md:h-44 lg:h-48 w-1"
            style={{ transform: `rotate(${secondDeg}deg)` }}
          ></div>
        </div>
      </div>
    </main>
  );
}
