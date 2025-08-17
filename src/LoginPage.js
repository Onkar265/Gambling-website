import React from "react";
import "./LoginPage.css"; // animations for glow & chips

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Floating poker chips */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="chip chip1"></div>
        <div className="chip chip2"></div>
        <div className="chip chip3"></div>
      </div>

      {/* Login Box with Neon Glow */}
      <div className="relative w-full max-w-md bg-gray-900/80 rounded-2xl p-8 shadow-2xl border border-yellow-400/30 neon-glow z-10">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-yellow-300 tracking-wide">
            🎰 HighRoller
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Sign in to place your bets
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-300"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-300"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold tracking-wide hover:bg-yellow-300 transition-all duration-200"
          >
            Login
          </button>
        </form>

        {/* Extras */}
        <div className="text-center mt-5 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <a className="text-yellow-300 hover:text-yellow-200 underline" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
