import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PlayNow() {
  const navigate = useNavigate();

  const games = [
    { name: "🎲 Dice", path: "/dice" },
    { name: "💣 Mines", path: "/mines" },
    { name: "🔵 Plinko", path: "/plinko" },
    { name: "📈 Crash", path: "/crash" },
    { name: "🎯 Limbo", path: "/limbo" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-6 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
      >
        ⬅ Back
      </button>
      <h1 className="text-3xl font-bold mb-6">Choose a Game</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <Link
            key={game.name}
            to={game.path}
            className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition"
          >
            {game.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
