import React, { useState } from "react";
import BackButton from "./BackButton";

export default function DiceGame() {
  const [roll, setRoll] = useState(null);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRoll(result);
  };

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h2 className="text-2xl font-bold mt-4">🎲 Dice Game</h2>
      <button
        onClick={rollDice}
        className="mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Roll Dice
      </button>
      {roll && <p className="mt-4 text-xl">You rolled: {roll}</p>}
    </div>
  );
}
