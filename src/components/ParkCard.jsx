// Inside ParkCard.jsx
import React from "react";

function ParkCard({ park }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-green-700">{park.name}</h3>
      <p className="text-sm text-gray-600">{park.description}</p>
    </div>
  );
}

export default ParkCard; // ✅ This is required
