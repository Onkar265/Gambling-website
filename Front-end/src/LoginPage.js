import React from "react";
import "./LoginPage.css"; // animations for glow & chips

export default function LoginPage() {
  // dynamic import handler — dev/demo only
  const handleDynamicImport = async () => {
    try {
      const mod = await import("./LoginPage");
      // mod.default is the component — we just show a quick confirmation
      console.log("Dynamically loaded LoginPage module:", mod.default);
      alert("LoginPage module dynamically imported (check console).");
    } catch (err) {
      console.error("Failed to dynamically import LoginPage:", err);
      alert("Dynamic import failed — see console.");
    }
  };

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
            🎰 LuckySpin
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
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 py-2 rounded-lg bg-yellow-400 text-black font-semibold tracking-wide hover:bg-yellow-300 transition-all duration-200"
            >
              Login
            </button>

            {/* Small dev/demo button to dynamically import the module */}
            <button
              type="button"
              onClick={handleDynamicImport}
              className="px-3 py-2 rounded-lg bg-gray-700 text-sm text-gray-100 hover:bg-gray-600 transition"
              title="Dynamically import the LoginPage module (dev only)"
            >
              Sign-Up
            </button>
          </div>
        </form>

       
      </div>
    </div>
  );
}
