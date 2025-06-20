import React, { createContext, useContext, useState } from "react";

// Create Context
const FavoriteContext = createContext();

// Custom hook
export const useFavorites = () => useContext(FavoriteContext);

// Provider component
export const FavoriteProvider = ({ children }) => {
  const [favoriteParks, setFavoriteParks] = useState([]);

  const addToFavorites = (park) => {
    if (!favoriteParks.some((p) => p.name === park.name)) {
      setFavoriteParks((prev) => [...prev, park]);
    }
  };

  const removeFromFavorites = (parkName) => {
    setFavoriteParks((prev) => prev.filter((p) => p.name !== parkName));
  };

  return (
    <FavoriteContext.Provider value={{ favoriteParks, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
