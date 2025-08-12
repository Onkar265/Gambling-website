import React, { useState } from "react";
import { Menu, User, HelpCircle, Info } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGames, setShowGames] = useState(false);

  const quotes = [
    "“The only way to win at gambling is to quit while you're ahead.”",
    "“Luck always seems to be against the man who depends on it.” – Anonymous",
    "“You can't beat the house, but you can enjoy the game.”",
  ];

  const games = [
    {
      name: "DICE",
      sub: "STAKE ORIGINALS",
      players: 2299,
      bg: "from-purple-500 to-indigo-500",
      img: "🎲",
    },
    {
      name: "MINES",
      sub: "STAKE ORIGINALS",
      players: 3035,
      bg: "from-green-500 to-cyan-500",
      img: "💎",
    },
    {
      name: "PLINKO",
      sub: "STAKE ORIGINALS",
      players: 1804,
      bg: "from-pink-500 to-orange-400",
      img: "⚪",
    },
    {
      name: "CRASH",
      sub: "STAKE ORIGINALS",
      players: 1146,
      bg: "from-blue-400 to-yellow-400",
      img: "🚀",
    },
    {
      name: "LIMBO",
      sub: "STAKE ORIGINALS",
      players: 1689,
      bg: "from-orange-400 to-red-400",
      img: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center space-x-2 hover:text-yellow-400 transition"
        >
          <Menu />
          <span className="font-bold">Menu</span>
        </button>
        <h1 className="text-2xl font-extrabold tracking-wider text-yellow-400">
          🎰 LuckySpin
        </h1>
      </header>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-4 bg-gray-800 rounded-lg shadow-lg w-48 border border-gray-700 z-10">
          <ul className="flex flex-col">
            <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
              <User className="mr-2" size={18} /> Profile
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
              <HelpCircle className="mr-2" size={18} /> Help
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
              <Info className="mr-2" size={18} /> About
            </li>
          </ul>
        </div>
      )}

      {/* Conditional View */}
      {!showGames ? (
        <>
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-20 px-6">
            <h2 className="text-4xl font-bold mb-6 text-yellow-300 drop-shadow-lg">
              “Feeling Lucky Today?”
            </h2>
            <p className="max-w-xl text-lg text-gray-300">
              Welcome to <span className="text-yellow-400">LuckySpin</span> —
              where every click is a chance, and every chance is a story.
            </p>
            <button
              onClick={() => setShowGames(true)}
              className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold text-black shadow-lg transition"
            >
              Play Now
            </button>
          </section>

          {/* Quotes Section */}
          <section className="bg-gray-800 py-12 px-6">
            <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center">
              Quotes on Gambling
            </h3>
            <div className="space-y-6 max-w-2xl mx-auto">
              {quotes.map((quote, idx) => (
                <blockquote
                  key={idx}
                  className="border-l-4 border-yellow-400 pl-4 italic text-gray-300"
                >
                  {quote}
                </blockquote>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* Games Grid */
        <section className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-yellow-400">
              Choose Your Game
            </h3>
            <button
              onClick={() => setShowGames(false)}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white shadow transition"
            >
              ← Back
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {games.map((g, idx) => (
              <a href=" http://localhost:4173/"><div
                key={idx}
                className={`rounded-xl shadow-lg bg-gradient-to-br ${g.bg} p-6 flex flex-col items-center text-center hover:scale-105 transform transition`}
              >
                <div className="text-5xl mb-4">{g.img}</div>
                <h4 className="text-xl font-bold">{g.name}</h4>
                <p className="text-sm text-gray-200">{g.sub}</p>
              </div></a>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} LuckySpin — Gamble Responsibly
      </footer>
    </div>
  );
}
