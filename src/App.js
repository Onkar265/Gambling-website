import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rouletteImg from "./images/Roulette.jpg";
import minesImg from "./images/Mines.jpg";
import plinkoImg from "./images/Plinko.jpg";
import crashImg from "./images/Crash.png";
import blackjackImg from "./images/Blackjack.jpg";
import limboImg from "./images/Limbo.jpg";


export default function App() {
  const [showGames, setShowGames] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navigate=useNavigate();

  function navWallet(){
    navigate("/wallet");
  }
  function navAboutUs(){
    navigate("/aboutus");}

  function navLogin(){
    navigate("/login");
  } 
  function navMyProfile(){
    navigate("/myprofile");
  }
  const sidebarOptions = [
    {
      name:"My Profile",
      func:navMyProfile
    },
    {
      name:"About Us",
      func:navAboutUs,
    },
  ];

  const games = [
    {
      name: "ROULETTE",
      sub: "LUCKYSPIN ORIGINALS",
      players: 2299,
      bg: "from-purple-500 to-indigo-500",
      img: rouletteImg
    },
    {
      name: "MINES",
      sub: "LUCKYSPIN ORIGINALS",
      players: 3035,
      bg: "from-green-500 to-cyan-500",
      img: minesImg,
      link: ""
    },
    {
      name: "PLINKO",
      sub: "LUCKYSPIN ORIGINALS",
      players: 1804,
      bg: "from-pink-500 to-orange-400",
      img: plinkoImg
    },
    {
      name: "CRASH",
      sub: "LUCKYSPIN ORIGINALS",
      players: 1146,
      bg: "from-blue-400 to-yellow-400",
      img: crashImg,
      link: "http://127.0.0.1:8080",
    },
    {
      name: "BLACKJACK",
      sub: "LUCKYSPIN ORIGINALS",
      players: 1804,
      bg: "from-pink-500 to-orange-400",
      img: blackjackImg,
    },
    {
      name: "LIMBO",
      sub: "LUCKYSPIN ORIGINALS",
      players: 1689,
      bg: "from-orange-400 to-red-400",
      img: limboImg,
    },
  ];

  const balance = 0.00;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex font-sans">
      {/* COLLAPSIBLE SIDEBAR */}
      <aside
        className={`${
          collapsed ? "w-14" : "w-60"
        } bg-gradient-to-b from-gray-800 to-gray-900 p-4 border-r border-gray-700 hidden md:flex flex-col justify-between transition-all duration-300`}
      >
        <div>
          {/* 3-dot button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mb-6 text-gray-400 text-4xl font-bold"
          >
            ≡
          </button>

          {!collapsed && (
            <>
              <h2 className="text-3xl font-extrabold mb-6 text-yellow-400 tracking-wide">
                Menu
              </h2>
              <ul className="space-y-2">
                {sidebarOptions.map((option,index) => (
                  <li
                    key={index}
                    className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
                  >
                    <button onClick={option.func}>{option.name}</button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {!collapsed && (
          <div className="text-gray-500 text-xs text-center mt-8">
            © 2025 LuckySpin
          </div>
        )}
      </aside>

      <div className="flex-1 flex flex-col">
        {/* TOP NAV BAR */}
        <header className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800">
          <h1 className="text-2xl font-extrabold tracking-wider text-yellow-400">
            🎰 LuckySpin
          </h1>

          {/* Balance + Wallet */}
          <div className="flex items-center">
            <div className="flex items-center bg-gray-800 px-6 py-3 rounded-l-lg text-lg font-semibold">
              <span className="mr-1">₹ {balance.toLocaleString()}</span>
              {/* <span className="text-gray-400">▼</span> */}
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-lg font-semibold border-2 border-blue-700" onClick={navWallet}>
              Wallet
            </button>
          </div>

          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg transition rounded-full" onClick={navLogin}>Login</button>
          
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
                  "Feeling Lucky Today"
                </h2>
                <p className="text-lg max-w-lg text-gray-200">
                 Welcome to LuckySpin - where every click is a chance, and every chance is a story.
                </p>

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

              <div className="grid grid-cols-3 gap-20">
  {games.map((g, idx) => (
    <a key={idx} href={g.link || "#"}>
      <div
        className={`rounded-xl shadow-lg bg-gradient-to-br ${g.bg} 
                    p-4 flex flex-col text-center hover:scale-105 
                    transform transition h-72`}
      >
        <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg mb-3">
          <img 
            src={g.img} 
            alt={g.name} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* <h4 className="text-lg font-bold">{g.name}</h4> */}
        <p className="text-sm text-gray-200">{g.sub}</p>
      </div>
    </a>
  ))}
</div>


                
            </section>
          )}
        </main>

        {/* Footer only in home */}
        {!showGames && (
          <footer className="text-center py-12 bg-gray-900 border-t border-gray-800">
            <div className="space-y-3 text-yellow-400 italic text-lg mb-6">
              <p>
                “The only way to win at gambling is to quit while you're ahead.”
              </p>
              <p>
                “Luck always seems to be against the man who depends on it.” –
                Anonymous
              </p>
              <p>“You can't beat the house, but you can enjoy the game.”</p>
            </div>
            {/* <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LuckySpin — Gamble Responsibly
            </div> */}
          </footer>
        )}
      </div>
    </div>
  );
}