import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaBars, FaSearch, FaFilter, FaHome, FaHeart, FaCog, FaMapMarkedAlt, FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "leaflet/dist/leaflet.css";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const [showParkModal, setShowParkModal] = useState(false);

  const parks = [
    { id: 1, name: "Central Park", lat: 33.6844, lng: 73.0479, area: "Islamabad" },
    { id: 2, name: "Family Park", lat: 33.7000, lng: 73.0300, area: "F-9" },
  ];

  return (
    <div className="flex flex-col h-screen bg-green-50">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4 bg-white shadow relative">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="ParkMate Logo" className="w-8 h-8" />
          <span className="font-bold text-green-700 text-lg">ParkMate</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="border p-2 rounded-md"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars className="text-green-700" />
          </button>
        </div>

        {showMenu && (
          <div className="absolute top-16 right-4 bg-white border shadow-md rounded-md w-48 z-50">
            <ul className="text-sm text-green-800">
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-green-100 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <FaHome /> Home
              </li>
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-green-100 cursor-pointer"
                onClick={() => navigate("/favourite")}
              >
                <FaHeart /> Favourite
              </li>
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-green-100 cursor-pointer"
                onClick={() => navigate("/settings")}
              >
                <FaCog /> Settings
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="border-t border-gray-200"></div>

      {/* Search and Filter Bar */}
      <div className="p-4 bg-white shadow flex flex-col gap-3">
        <div className="flex items-center space-x-2">
          <div className="relative flex-grow">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search parks by name or area..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg"
            />
          </div>
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            <FaFilter />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-center space-x-4 mt-2">
          {/* Map View Button */}
          <button
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-100 hover:bg-green-200 cursor-pointer transition"
            onClick={() => {}}
          >
            <FaMapMarkedAlt className="text-green-700" />
            <span className="text-green-700 font-medium">Map View</span>
          </button>

          {/* List View Button */}
          <button
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
            onClick={() => navigate("/list")}
          >
            <FaListUl className="text-gray-700" />
            <span className="text-gray-700 font-medium">List View</span>
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-grow relative z-0">
        <MapContainer center={[33.6844, 73.0479]} zoom={13} className="h-full w-full z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {parks.map((park) => (
            <Marker key={park.id} position={[park.lat, park.lng]}>
              <Popup>
                <strong>{park.name}</strong>
                <br />
                {park.area}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">
              Filter Parks
            </h2>
            <p className="text-gray-700 text-sm mb-4 text-center">
              Select features to filter parks
            </p>
            <div className="space-y-4 text-sm text-gray-800">
              {["Playground", "Jogging Track", "Open Field", "Seating Area", "Dog Friendly"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-green-600" /> {item}
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6">
              <button className="text-red-500 text-sm hover:underline">Clear All</button>
              <div className="space-x-2">
                <button
                  onClick={() => setShowFilter(false)}
                  className="px-4 py-2 rounded bg-green-600 text-white text-sm"
                >
                  Apply Filters
                </button>
                <button
                  onClick={() => setShowFilter(false)}
                  className="px-4 py-2 rounded bg-gray-200 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
