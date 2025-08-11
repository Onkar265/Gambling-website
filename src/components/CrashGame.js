import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";

export default function CrashGame() {
  const [multiplier, setMultiplier] = useState(1.0);
  const [running, setRunning] = useState(false);
  const [crashPoint, setCrashPoint] = useState(null);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setMultiplier((m) => {
          if (m >= crashPoint) {
            setRunning(false);
            clearInterval(timer);
            return m;
          }
          return (m + 0.01).toFixed(2);
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [running, crashPoint]);

  const startGame = () => {
    setMultiplier(1.0);
    setCrashPoint((Math.random() * 5 + 1).toFixed(2)); // 1x–6x crash
    setRunning(true);
  };

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h2 className="text-2xl font-bold mt-4">🚀 Crash Game</h2>
      <p className="mt-4 text-xl">{multiplier}x</p>
      {!running && (
        <button
          onClick={startGame}
          className="mt-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Start
        </button>
      )}
      {running && <p className="text-gray-500 mt-2">Game running...</p>}
    </div>
  );
}
