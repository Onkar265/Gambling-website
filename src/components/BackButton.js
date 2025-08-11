import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/play")}
      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
    >
      ← Back
    </button>
  );
}
