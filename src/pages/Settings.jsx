import React, { useState } from "react";
import {
  FaCog,
  FaPalette,
  FaLanguage,
  FaBell,
  FaSyncAlt,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

export default function Settings() {
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleReset = () => {
    setTheme("Light");
    setLanguage("English");
    setNotificationsEnabled(false);
  };

  return (
<div className="min-h-screen bg-green-50 flex justify-center items-center px-2">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-4 space-y-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-green-700 flex items-center justify-center gap-2">
            <FaCog className="text-green-600" />
            Settings
          </h1>
          <p className="text-sm text-gray-600">Customize your ParkMate experience</p>
        </div>

        {/* Appearance Section */}
        <div>
          <h2 className="text-green-700 font-semibold text-sm mb-1 flex items-center gap-2">
            <FaPalette className="text-green-600" />
            Appearance
          </h2>
          <select
            className="w-full border border-green-300 rounded px-3 py-2 text-sm"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="System">System Default</option>
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
          </select>
        </div>

        {/* Language Section */}
        <div>
          <h2 className="text-green-700 font-semibold text-sm mb-1 flex items-center gap-2">
            <FaLanguage className="text-green-600" />
            Language
          </h2>
          <select
            className="w-full border border-green-300 rounded px-3 py-2 text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>

        {/* Notifications Section */}
        <div>
          <h2 className="text-green-700 font-semibold text-sm mb-1 flex items-center gap-2">
            <FaBell className="text-green-600" />
            Notifications
          </h2>
          <button
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            className={`flex items-center gap-2 px-4 py-2 rounded w-full text-sm justify-center ${
              notificationsEnabled
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {notificationsEnabled ? <FaToggleOff /> : <FaToggleOn />}
            {notificationsEnabled ? "Disable Notifications" : "Enable Notifications"}
          </button>
          <p className="text-xs text-gray-600 mt-1 text-center">
            Receive notifications about new parks and features
          </p>
        </div>

        {/* Reset Button */}
        <div className="pt-2">
          <button
            onClick={handleReset}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm flex items-center justify-center gap-2"
          >
            <FaSyncAlt />
            Reset All Settings
          </button>
        </div>
      </div>
    </div>
  );
}
