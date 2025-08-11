import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">🎰 Welcome to LuckySpin</h1>
      <p className="max-w-xl text-center mb-6 italic text-gray-300">
        "Gambling is not about how well you play the games, it’s really about how well you handle your money."
      </p>
      <Link
        to="/play"
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
      >
        Play Now
      </Link>
    </div>
  );
}
