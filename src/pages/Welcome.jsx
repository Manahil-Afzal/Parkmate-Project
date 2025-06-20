import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaInfoCircle,
  FaWindowClose,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Welcome() {
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        {/* Logo and Title */}
        <img src={logo} alt="ParkMate Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-green-800 mb-2">ParkMate</h1>
        <p className="text-lg text-green-700 mb-6">
          Discover parks near you with ease
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md flex items-center justify-center gap-2"
          >
            <FaMapMarkedAlt />
            Find Parks Near Me
          </button>

          <button
            onClick={() => setShowInfo(true)}
            className="bg-gray-200 hover:bg-gray-300 text-green-800 font-semibold py-3 px-6 rounded-2xl shadow-sm flex items-center justify-center gap-2"
          >
            <FaInfoCircle />
            How It Works
          </button>
        </div>

        {/* Terms & Conditions */}
        <p className="mt-6 text-sm text-green-600 underline cursor-pointer hover:text-green-800"
           onClick={() => setShowTerms(true)}>
          Terms & Conditions
        </p>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full p-6 rounded-xl shadow-lg overflow-y-auto max-h-[90vh] relative">
            <button
              className="absolute top-3 right-4 text-red-600 text-xl"
              onClick={() => setShowTerms(false)}
            >
              <FaWindowClose />
            </button>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Terms & Conditions</h2>
            <div className="text-gray-700 text-sm space-y-4">
              <p><strong>ParkMate</strong> is a park discovery app using map pins, list view, and filters. It's a demo frontend-only project with static data.</p>
              <p><strong>Location Access:</strong> You may allow location access to find nearby parks. It's optional.</p>
              <p><strong>Dummy Data:</strong> All parks are hardcoded for testing purposes only and may not represent real locations.</p>
              <p><strong>Favorites & Preferences:</strong> Theme, language, and favorite parks are stored in your browser using localStorage. No backend is connected.</p>
              <p><strong>Future Plans:</strong> Admin features and live data may be added later. This will be updated in the terms.</p>
              <p><strong>Liability:</strong> ParkMate creators are not responsible for data accuracy or any issues at listed parks.</p>
              <p className="text-xs text-gray-500">Last updated: June 20, 2025</p>
            </div>
          </div>
        </div>
      )}

      {/* How It Works Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl max-w-md shadow-lg text-left relative">
            <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <FaInfoCircle className="text-green-600" />
              How ParkMate Works
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>Find parks near you using map pins.</li>
              <li>Search parks by name or area.</li>
              <li>Use filters like "playground", "jogging track", etc.</li>
              <li>Save favorite parks for later.</li>
              <li>Get directions via Google Maps.</li>
            </ul>

            <button
              onClick={() => setShowInfo(false)}
              className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
