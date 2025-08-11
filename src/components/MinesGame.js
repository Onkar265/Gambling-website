import React, { useState } from "react";
import BackButton from "./BackButton";

export default function MinesGame() {
  const size = 5;
  const [grid, setGrid] = useState(() =>
    Array(size * size)
      .fill(null)
      .map(() => (Math.random() < 0.2 ? "💣" : "⬜"))
  );
  const [revealed, setRevealed] = useState(Array(size * size).fill(false));

  const revealTile = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);
  };

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h2 className="text-2xl font-bold mt-4">💣 Mines Game</h2>
      <div
        className="grid gap-2 mt-4"
        style={{ gridTemplateColumns: `repeat(${size}, 50px)` }}
      >
        {grid.map((tile, idx) => (
          <button
            key={idx}
            onClick={() => revealTile(idx)}
            className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center"
          >
            {revealed[idx] ? tile : ""}
          </button>
        ))}
      </div>
    </div>
  );
}
