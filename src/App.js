import React, { useState } from "react";

export default function App() {
  const [showGames, setShowGames] = useState(false);
  
  const sidebarOptions = [
    "My Profile",
    "Wager",
    "Referral",
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
      link: "http://localhost:5173/",
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
      link: "http://127.0.0.1:8080",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex font-sans">
      {/* LEFT SIDEBAR updated */}
      <aside className="w-60 bg-gradient-to-b from-gray-800 to-gray-900 p-4 border-r border-gray-700 hidden md:block">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Menu</h2>
        <ul className="space-y-2">
          {sidebarOptions.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* TOP NAV BAR (simplified, removed menu button) */}
        <header className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800">
          <h1 className="text-2xl font-extrabold tracking-wider text-yellow-400">
            🎰 LuckySpin
          </h1>

          <div className="space-x-4">
            <button className="px-4 py-2 bg-purple-600 rounded-full">Login</button>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto">
          {!showGames ? (
            <>
              {/* Hero Banner */}
              <section
                className="h-72 md:h-96 bg-cover bg-center flex flex-col justify-center items-center text-center"
                style={{
                  backgroundImage:
                    "url('https://via.placeholder.com/1200x400?text=Weekly+Cashback')",
                }}
              >
                <h2 className="text-4xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
                  Weekly Cashback
                </h2>
                <p className="text-lg max-w-lg text-gray-200">
                  Every Monday 10-15% up to €500!
                </p>
              </section>

              {/* Play Now Section */}
              <section className="py-12 text-center">
                <h2 className="text-3xl mb-4 font-bold text-yellow-300">
                  Feeling Lucky Today?
                </h2>
                <button
                  onClick={() => setShowGames(true)}
                  className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold text-black shadow-lg transition"
                >
                  Play Now
                </button>
              </section>
            </>
          ) : (
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
                  <a key={idx} href={g.link || "#"}>
                    <div
                      className={`rounded-xl shadow-lg bg-gradient-to-br ${g.bg} p-6 flex flex-col items-center text-center hover:scale-105 transform transition`}
                    >
                      <div className="text-5xl mb-4">{g.img}</div>
                      <h4 className="text-xl font-bold">{g.name}</h4>
                      <p className="text-sm text-gray-200">{g.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* FOOTER */}
        <footer className="text-center py-4 bg-gray-900 border-t border-gray-800 text-gray-500">
          © {new Date().getFullYear()} LuckySpin — Gamble Responsibly
        </footer>
      </div>
    </div>
  );
}