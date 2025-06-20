import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import ListView from "./pages/ListView";
import Favourite from "./pages/Favourite";
import Settings from "./pages/Settings";
import Terms from "./pages/Terms"; // if created

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/terms" element={<Terms />} /> {/* optional */}
      </Routes>
    </Router>
  );
}
