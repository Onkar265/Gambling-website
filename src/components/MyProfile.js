import React, { useState } from "react";

export default function MyProfilePage() {
  const [openTransactions, setOpenTransactions] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-8 text-white"
      style={{
        background:
          "linear-gradient(135deg, #1f1f2e 0%, #141418 50%, #000000 100%)",
      }}
    >
      <div className="w-full max-w-2xl bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-lg mt-16">
        {/* Greeting */}
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Hello, AMAN KUMAR</h1>

        {/* Info Lines */}
        <p className="text-lg mb-2">
          <span className="font-semibold text-gray-300">Username:</span> amankumar
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold text-gray-300">Email:</span> aman@gmail.com
        </p>
        <p className="text-lg mb-6">
          <span className="font-semibold text-gray-300">Referral Code:</span> xyz
        </p>

        {/* Transactions Dropdown */}
        <div className="border border-gray-700 rounded-lg">
          <button
            onClick={() => setOpenTransactions(!openTransactions)}
            className="w-full flex justify-between items-center px-4 py-3 text-xl font-semibold bg-gray-900 hover:bg-gray-700 transition"
          >
            Transactions
            <span>{openTransactions ? "▲" : "▼"}</span>
          </button>

          {openTransactions && (
            <div className="bg-gray-900">
              <div className="px-4 py-3 border-t border-gray-700 flex justify-between">
                <span>Deposit</span>
                <span className="text-green-400">+Rs. 500</span>
              </div>
              <div className="px-4 py-3 border-t border-gray-700 flex justify-between">
                <span>Withdrawal</span>
                <span className="text-red-500">-Rs. 1000</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
