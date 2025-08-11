import React, { useState } from "react";
import BackButton from "./BackButton";

export default function LimboGame() {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState(null);

  const play = () => {
    const actual = (Math.random() * 10 + 1).toFixed(2); // 1x–11x
    setResult({ guess, actual, win: parseFloat(actual) >= parseFloat(guess) });
  };

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h2 className="text-2xl font-bold mt-4">🎰 Limbo Game</h2>
      <input
        type="number"
        placeholder="Enter multiplier guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border px-2 py-1 rounded mt-4"
      />
      <button
        onClick={play}
        className="ml-2 bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition"
      >
        Play
      </button>
      {result && (
        <p className="mt-4 text-xl">
          Actual: {result.actual}x — {result.win ? "You Win!" : "You Lose"}
        </p>
      )}
    </div>
  );
}
