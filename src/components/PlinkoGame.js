import React, { useState } from "react";
import BackButton from "./BackButton";

export default function PlinkoGame() {
  const [result, setResult] = useState(null);

  const dropBall = () => {
    const slots = ["1x", "2x", "5x", "10x", "2x", "1x"];
    const landed = slots[Math.floor(Math.random() * slots.length)];
    setResult(landed);
  };

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h2 className="text-2xl font-bold mt-4">🎯 Plinko Game</h2>
      <button
        onClick={dropBall}
        className="mt-4 bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Drop Ball
      </button>
      {result && <p className="mt-4 text-xl">You landed on: {result}</p>}
    </div>
  );
}
