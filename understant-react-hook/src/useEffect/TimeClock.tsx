import React, { useEffect, useState } from "react";

const TimeClock = () => {
  const [time, setTime] = useState<Date>(new Date());

  const formattedDateNumeric = time.toLocaleDateString("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const formattedDateWithName = time.toLocaleDateString("th-TH", {
    weekday: "short", // "อ." หรือ "อังคาร"
    day: "2-digit",
    month: "short", // "ส.ค."
    year: "2-digit", // 25
  });

  const formattedDateLong = time.toLocaleDateString("en-US", {
    weekday: "long", // "วันอังคาร"
    day: "2-digit",
    month: "long", // "สิงหาคม"
    year: "numeric", // 2025
  });

  const formattedTime = time.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedTimeAMPM = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="container bg-[#27F5B0]">
      <div className="section-container">
        <h1>Date-Time</h1>
        <div className="flex flex-col text-left w-fit font-mono mt-4">
          <div className="flex">
            <span className="w-32">Date number:</span>
            <span>{formattedDateNumeric}</span>
          </div>
          <div className="flex">
            <span className="w-32">Date short:</span>
            <span>{formattedDateWithName}</span>
          </div>
          <div className="flex">
            <span className="w-32">Date long:</span>
            <span>{formattedDateLong}</span>
          </div>
          <div className="flex">
            <span className="w-32">Time 24 HR:</span>
            <span>{formattedTime}</span>
          </div>
          <div className="flex">
            <span className="w-32">Time 12 HR:</span>
            <span>{formattedTimeAMPM}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeClock;
