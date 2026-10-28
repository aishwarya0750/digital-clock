
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <main className="container">Loading clock...</main>;
  }

  const hours = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    hour12: true,
  });

  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const ampm = time
    .toLocaleTimeString("en-US", { hour12: true })
    .slice(-2);

  const date = time.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="container">
      <div className="clock-card">
        <div className="clock-icon">◷</div>

        <p className="subtitle">YOUR PERSONAL TIMEKEEPER</p>
        <h1>Digital Clock</h1>

        <div className="time-display">
          <span>{hours.split(" ")[0]}</span>
          <span className="colon">:</span>
          <span>{minutes}</span>
          <span className="colon">:</span>
          <span>{seconds}</span>
          <span className="ampm">{ampm}</span>
        </div>

        <div className="date-display">{date}</div>

        <div className="status">
          <span className="live-dot"></span>
          LIVE TIME
        </div>

        <p className="footer-text">
          Every second is a new beginning.
        </p>
      </div>
    </main>
  );
}
