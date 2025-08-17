import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-3xl bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-400 text-center">
          About Us – LuckySpin
        </h1>

        <p className="mb-4 text-lg leading-relaxed text-gray-300">
          <span className="font-bold text-yellow-300">Welcome to LuckySpin</span> — Where Every Spin Tells a Story! At LuckySpin, we’re passionate about delivering a thrilling, safe, and rewarding gaming experience to players around the world. Our platform is built for those who love excitement, strategy, and the rush of great wins — whether you’re a seasoned gamer or just beginning your lucky journey.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-gray-200">
          We pride ourselves on being more than just another gambling site. Here’s what makes LuckySpin special:
        </p>

        <ul className="space-y-3 text-lg text-gray-300">
          <li>
            ✅ <span className="text-yellow-300 font-semibold">Trusted & Transparent:</span> Our games are powered by certified algorithms to ensure fair and random outcomes.
          </li>
          <li>
            ✅ <span className="text-yellow-300 font-semibold">Fair Gaming:</span> Every game is tested for fairness, giving you genuine and exciting opportunities to win.
          </li>
          <li>
            ✅ <span className="text-yellow-300 font-semibold">Exciting Game Variety:</span> Enjoy classics like Dice, Mines, Crash, Plinko, and more — with new games added regularly.
          </li>
          <li>
            ✅ <span className="text-yellow-300 font-semibold">Fast Deposits & Withdrawals:</span> Secure payment processing for quick deposits and instant withdrawals.
          </li>
          <li>
            ✅ <span className="text-yellow-300 font-semibold">Rewarding Promotions:</span> Weekly cashback, referral bonuses, and more designed to boost your winnings.
          </li>
          <li>
            ✅ <span className="text-yellow-300 font-semibold">Safe & Responsible Gaming:</span> We prioritize responsible gambling and provide tools to keep your experience fun and safe.
          </li>
          <li>
            ✅ <span className="text-yellow-300 font-semibold">24/7 Customer Support:</span> Our support team is always ready to help you anytime, anywhere.
          </li>
        </ul>

        <p className="mt-6 text-center text-xl text-gray-300">
          Join thousands of players enjoying LuckySpin every day — where luck meets fairness and entertainment!
        </p>

        <div className="mt-10 text-center">
          <span className="block text-2xl font-bold text-yellow-400">
            QUERIES? CONTACT – work.luckyspin@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}