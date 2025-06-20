import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center py-4 text-sm text-gray-600 bg-green-50">
      <Link to="/terms" className="text-green-600 underline hover:text-green-800">
        Terms & Conditions
      </Link>
    </footer>
  );
}
