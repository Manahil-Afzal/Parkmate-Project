import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaMapMarkedAlt } from "react-icons/fa";
import { useFavorites } from "../context/FavoriteContext";

export default function Favourite() {
  const { favoriteParks } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6 space-y-6 text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-green-700 flex justify-center items-center gap-2">
          <FaHeart className="text-green-600" />
          My Favorite Parks
        </h1>
        <p className="text-sm text-gray-600">Parks you've saved for quick access</p>

        {/* If no favorites */}
        {favoriteParks.length === 0 ? (
          <>
            <p className="text-lg text-gray-700 mt-4">No favorites yet</p>
            <p className="text-sm text-gray-500 mb-4">
              Mark parks as favorites to see them here
            </p>
            <button
              onClick={() => navigate("/home")}
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-green-700"
            >
              <FaMapMarkedAlt />
              Find Parks
            </button>
          </>
        ) : (
          <p className="text-sm text-gray-600">
            You have {favoriteParks.length} favorite parks
          </p>
        )}
      </div>
    </div>
  );
}
