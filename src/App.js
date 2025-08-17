// import React, { useState } from "react";

// export default function App() {
//   const [showGames, setShowGames] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const sidebarOptions = [
//     "My Profile",
//     "Wager",
//     "Referral",
//   ];

//   const games = [
//     {
//       name: "ROULETTE",
//       sub: "LUCKYSPIN ORIGINALS",
//       players: 2299,
//       bg: "from-purple-500 to-indigo-500",
//       img: "🎲",
//     },
//     {
//       name: "MINES",
//       sub: "LUCKYSPIN ORIGINALS",
//       players: 3035,
//       bg: "from-green-500 to-cyan-500",
//       img: "💎",
//       link: "http://localhost:5173/",
//     },
//     {
//       name: "PLINKO",
//       sub: "LUCKYSPIN ORIGINALS",
//       players: 1804,
//       bg: "from-pink-500 to-orange-400",
//       img: "⚪",
//     },
//     {
//       name: "CRASH",
//       sub: "LUCKYSPIN ORIGINALS",
//       players: 1146,
//       bg: "from-blue-400 to-yellow-400",
//       img: "🚀",
//       link: "http://127.0.0.1:8080",
//     },
//     {
//       name: "BLACKJACK",
//       sub: "LUCKYSPIN ORIGINALS",
//       players: 1804,
//       bg: "from-pink-500 to-orange-400",
//       img: "⚪",
//     },
//     {
//       name: "LIMBO",
//       sub: "LUCKYSPIN ORIGINALS",
//       players: 1689,
//       bg: "from-orange-400 to-red-400",
//       img: "🎯",
//     },
//   ];

//   const balance = 20000;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex font-sans">
//       {/* COLLAPSIBLE SIDEBAR */}
//       <aside
//         className={`${
//           collapsed ? "w-14" : "w-60"
//         } bg-gradient-to-b from-gray-800 to-gray-900 p-4 border-r border-gray-700 hidden md:flex flex-col justify-between transition-all duration-300`}
//       >
//         <div>
//           {/* 3-dot button */}
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="mb-6 text-gray-400 text-4xl font-bold"
//           >
//             ≡
//           </button>

//           {!collapsed && (
//             <>
//               <h2 className="text-3xl font-extrabold mb-6 text-yellow-400 tracking-wide">
//                 Menu
//               </h2>
//               <ul className="space-y-2">
//                 {sidebarOptions.map((option, index) => (
//                   <li
//                     key={index}
//                     className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>

//         {!collapsed && (
//           <div className="text-gray-500 text-xs text-center mt-8">
//             © 2025 LuckySpin
//           </div>
//         )}
//       </aside>

//       <div className="flex-1 flex flex-col">
//         {/* TOP NAV BAR */}
//         <header className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800">
//           <h1 className="text-2xl font-extrabold tracking-wider text-yellow-400">
//             🎰 LuckySpin
//           </h1>

//           {/* Balance + Wallet */}
//           <div className="flex items-center">
//             <div className="flex items-center bg-gray-800 px-6 py-3 rounded-l-lg text-lg font-semibold">
//               <span className="mr-1">₹ {balance.toLocaleString()}</span>
//               <span className="text-gray-400">▼</span>
//             </div>
//             <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-lg font-semibold border-2 border-blue-700">
//               Wallet
//             </button>
//           </div>

//           <button className="px-4 py-2 bg-purple-600 rounded-full">Login</button>
//         </header>

//         {/* MAIN CONTENT */}
//         <main className="flex-1 overflow-y-auto">
//           {!showGames ? (
//             <>
//               {/* Hero Banner */}
//               <section
//                 className="h-72 md:h-96 bg-cover bg-center flex flex-col justify-center items-center text-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://via.placeholder.com/1200x400?text=Weekly+Cashback')",
//                 }}
//               >
//                 <h2 className="text-4xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
//                   "Feeling Lucky Today"
//                 </h2>
//                 <p className="text-lg max-w-lg text-gray-200">
//                  Welcome to LuckySpin - where every click is a chance, and every chance is a story.
//                 </p>

//                 <button
//                   onClick={() => setShowGames(true)}
//                   className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold text-black shadow-lg transition"
//                 >
//                   Play Now
//                 </button>
//               </section>
//             </>
//           ) : (
//             <section className="p-8">
//               <div className="flex justify-between items-center mb-8">
//                 <h3 className="text-3xl font-bold text-yellow-400">
//                   Choose Your Game
//                 </h3>
//                 <button
//                   onClick={() => setShowGames(false)}
//                   className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white shadow transition"
//                 >
//                   ← Back
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                 {games.map((g, idx) => (
//                   <a key={idx} href={g.link || "#"}>
//                     <div
//                       className={`rounded-xl shadow-lg bg-gradient-to-br ${g.bg} p-6 flex flex-col items-center text-center hover:scale-105 transform transition`}
//                     >
//                       <div className="text-5xl mb-4">{g.img}</div>
//                       <h4 className="text-xl font-bold">{g.name}</h4>
//                       <p className="text-sm text-gray-200">{g.sub}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </section>
//           )}
//         </main>

//         {/* Footer only in home */}
//         {!showGames && (
//           <footer className="text-center py-12 bg-gray-900 border-t border-gray-800">
//             <div className="space-y-3 text-yellow-400 italic text-lg mb-6">
//               <p>
//                 “The only way to win at gambling is to quit while you're ahead.”
//               </p>
//               <p>
//                 “Luck always seems to be against the man who depends on it.” –
//                 Anonymous
//               </p>
//               <p>“You can't beat the house, but you can enjoy the game.”</p>
//             </div>
//             <div className="text-gray-500 text-sm">
//               © {new Date().getFullYear()} LuckySpin — Gamble Responsibly
//             </div>
//           </footer>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import placeholderImage from './image.png'; // Your placeholder image

const PaymentPage = () => {
  const [option, setOption] = useState('');
  const [upi, setUpi] = useState('');
  const [amount, setAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleOptionClick = (type) => {
    setOption(type);
    setUpi('');
    setAmount('');
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upi || !amount) {
      alert('Please fill all mandatory fields');
      return;
    }

    if (option === 'deposit') {
      setSuccessMessage(
        'Payment Successful! It may take 30 mins to process your transaction.'
      );
    } else if (option === 'withdraw') {
      setSuccessMessage(
        'Withdrawal Successful! It may take 30-45 mins to process your payment.'
      );
    }

    setOption('');
    setUpi('');
    setAmount('');
  };

  return (
    <div style={styles.fullScreen}>
      <div style={styles.container}>
        <h2 style={styles.title}>💰 Payment Portal</h2>

        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.optionButton, background: styles.gradient }}
            onClick={() => handleOptionClick('deposit')}
          >
            Deposit
          </button>
          <button
            style={{ ...styles.optionButton, background: styles.gradient }}
            onClick={() => handleOptionClick('withdraw')}
          >
            Withdrawal
          </button>
        </div>

        {option && !successMessage && (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>UPI ID (mandatory)</label>
              <input
                type="text"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Amount (mandatory)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                required
                style={styles.input}
              />
            </div>

            {option === 'deposit' && (
              <div style={styles.formGroup}>
                <label style={styles.label}>Attached Photo</label>
                <div style={styles.photoWrapper}>
                  <img
                    src={placeholderImage}
                    alt="Deposit"
                    style={styles.photo}
                  />
                </div>
              </div>
            )}

            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </form>
        )}

        {successMessage && (
          <div style={{ ...styles.successMessage, ...styles.fadeIn }}>
            <h3>{successMessage}</h3>
            <button
              style={{ ...styles.submitButton, marginTop: '15px' }}
              onClick={() => setSuccessMessage('')}
            >
              Make Another Transaction
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  fullScreen: {
    minHeight: '100vh',
    backgroundColor: '#0d0d0d', // full dark background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  container: {
    width: '100%',
    maxWidth: '450px',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: '#121212',
    color: '#FFD700',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '30px',
    textShadow: '2px 2px 10px #FFD700',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
  },
  gradient: 'linear-gradient(90deg, #FFD700, #FFA500)',
  optionButton: {
    flex: 1,
    margin: '0 8px',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    color: '#121212',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(255, 215, 0, 0.5)',
  },
  form: {
    marginTop: '10px',
  },
  formGroup: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#FFD700',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #555',
    backgroundColor: '#1e1e1e',
    color: '#FFD700',
    fontSize: '14px',
  },
  photoWrapper: {
    border: '2px solid #FFD700',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
  },
  photo: {
    width: '100%',
    display: 'block',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
    color: '#121212',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
    transition: 'all 0.3s ease',
  },
  successMessage: {
    marginTop: '25px',
    padding: '25px',
    borderRadius: '15px',
    backgroundColor: '#1e1e1e',
    textAlign: 'center',
    color: '#FFD700',
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
    opacity: 0,
  },
  fadeIn: {
    animation: 'fadeIn 0.8s forwards',
  },
};

// Add fadeIn animation keyframes
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default PaymentPage;
