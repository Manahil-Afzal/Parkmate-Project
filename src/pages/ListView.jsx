import React from "react";
import {
  FaMapMarkedAlt,
  FaHeart,
  FaTree,
  FaRunning,
  FaChild,
  FaDog,
} from "react-icons/fa";
import greenValleyImage from "../assets/GreenValley.jpg";
import centralCityImage from "../assets/CentralCity.jpg";
import riverSideImage from "../assets/RiverSide.jpg";
import sunSetImage from "../assets/SunSet-Hills.jpg";
import oakTreeImage from "../assets/Oak-Tree.jpg";
import childrenParkImage from "../assets/Children-Park.jpg";
import sportsComplexImage from "../assets/Sports-Complex.jpg";
import heritageGardensImage from "../assets/Heritage-Gardens.jpg";
import { useFavorites } from "../context/FavoriteContext";

const parksData = [
  {
    image: greenValleyImage,
    name: "Green Valley Park",
    description:
      "A peaceful park with a small lake and walking tracks. Great for jogs and picnics.",
    features: ["Playground", "Jogging Track", "Seating Area"],
    address: "123 Valley Rd, Los Angeles, CA",
  },
  {
    image: centralCityImage,
    name: "City Central Park",
    description:
      "Located in the heart of the city with green fields. Great for sports and outdoor activities.",
    features: ["Open Field", "Dog Friendly"],
    address: "456 Central Ave, Los Angeles, CA",
  },
  {
    image: riverSideImage,
    name: "Riverside Park",
    description:
      "Beautiful park along the river with scenic views and plenty of shade. Popular for weekend gatherings.",
    features: ["Jogging Track", "Seating Area", "Dog Friendly"],
    address: "789 Riverside Dr, Los Angeles, CA",
  },
  {
    image: sunSetImage,
    name: "Sunset Hills Park",
    description:
      "Elevated park with stunning sunset views. Features modern playground equipment and spacious picnic areas.",
    features: ["Playground", "Open Field", "Seating Area"],
    address: "101 Sunset Blvd, Los Angeles, CA",
  },
  {
    image: oakTreeImage,
    name: "Oak Tree Commons",
    description:
      "Shaded park with mature oak trees and well-maintained gardens. Perfect for reading and relaxation.",
    features: ["Seating Area", "Dog Friendly"],
    address: "202 Oak St, Los Angeles, CA",
  },
  {
    image: childrenParkImage,
    name: "Children's Adventure Park",
    description:
      "Designed specifically for children with interactive play areas and educational installations.",
    features: ["Playground", "Seating Area"],
    address: "303 Kids Way, Los Angeles, CA",
  },
  {
    image: sportsComplexImage,
    name: "Sports Complex Park",
    description:
      "Large park with multiple sports fields and courts. Popular for organized sports and fitness activities.",
    features: ["Open Field", "Jogging Track"],
    address: "404 Sports Ave, Los Angeles, CA",
  },
  {
    image: heritageGardensImage,
    name: "Heritage Gardens",
    description:
      "Historical park with preserved gardens and monuments. Educational tours available on weekends.",
    features: ["Seating Area", "Dog Friendly"],
    address: "505 History Ln, Los Angeles, CA",
  },
];

export default function ListView() {
  const { favoriteParks, addToFavorites, removeFromFavorites } = useFavorites();

  const toggleFavorite = (park) => {
    if (favoriteParks.some((p) => p.name === park.name)) {
      removeFromFavorites(park.name);
    } else {
      addToFavorites(park);
    }
  };

  const openGoogleMaps = (address) => {
    const query = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-xl font-bold text-green-700 mb-4">Parks List View</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parksData.map((park) => (
          <div
            key={park.name}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <img
                src={park.image}
                alt={park.name}
                className="w-full h-40 object-cover"
              />
              {favoriteParks.some((p) => p.name === park.name) && (
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                  <FaHeart className="text-red-500 w-5 h-5" />
                </div>
              )}
            </div>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-green-800">{park.name}</h2>
              <p className="text-sm text-gray-700">{park.description}</p>

              <div className="flex flex-wrap gap-2 text-sm text-gray-700 mt-1">
                {park.features.includes("Playground") && (
                  <span className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                    <FaChild className="text-green-700" /> Playground
                  </span>
                )}
                {park.features.includes("Jogging Track") && (
                  <span className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                    <FaRunning className="text-green-700" /> Jogging Track
                  </span>
                )}
                {park.features.includes("Seating Area") && (
                  <span className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                    <FaTree className="text-green-700" /> Seating Area
                  </span>
                )}
                {park.features.includes("Open Field") && (
                  <span className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                    <FaTree className="text-green-700" /> Open Field
                  </span>
                )}
                {park.features.includes("Dog Friendly") && (
                  <span className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                    <FaDog className="text-green-700" /> Dog Friendly
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-600 mt-1">📍 {park.address}</p>

              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => openGoogleMaps(park.address)}
                  className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer text-sm"
                >
                  <FaMapMarkedAlt /> Get Directions
                </button>
                <button
                  onClick={() => toggleFavorite(park)}
                  className="flex items-center gap-2 border border-green-600 text-green-600 px-3 py-2 rounded-lg hover:bg-green-50 transition cursor-pointer text-sm"
                >
                  <FaHeart />
                  {favoriteParks.some((p) => p.name === park.name)
                    ? "Remove Favorite"
                    : "Add to Favorites"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
