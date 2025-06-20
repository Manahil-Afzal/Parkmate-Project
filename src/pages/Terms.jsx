import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-green-50 p-6 flex justify-center items-start">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Terms & Conditions</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <strong>ParkMate</strong>. By accessing or using this app, you agree to the following
          terms and conditions. Please read them carefully.
        </p>

        {/* 1. App Usage */}
        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">1. App Usage</h2>
        <p className="text-gray-700 mb-4">
          ParkMate is a frontend-only web application that helps users discover public parks
          in their area. This app is intended for informational purposes only and does not
          provide real-time data or user-generated content at this time.
        </p>

        {/* 2. Data Disclaimer */}
        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">2. Data Disclaimer</h2>
        <p className="text-gray-700 mb-4">
          All park data used in this app is dummy or static data for development and demo
          purposes only. It may not reflect real park locations, features, or details. Users
          should verify information independently before visiting any park.
        </p>

        {/* 3. Location Services */}
        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">3. Location Services</h2>
        <p className="text-gray-700 mb-4">
          ParkMate may request access to your location to show nearby parks. This is
          completely optional, and the app can still be used without enabling location
          services.
        </p>

        {/* 4. Favorites & Preferences */}
        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">4. Favorites & Preferences</h2>
        <p className="text-gray-700 mb-4">
          ParkMate allows you to mark parks as favorites and choose settings like theme,
          language, and notifications. These preferences are saved locally in your browser
          using <code>localStorage</code> and are not shared with any third party.
        </p>

        {/* 5. Future Updates */}
        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">5. Future Features</h2>
        <p className="text-gray-700 mb-4">
          In future versions, ParkMate may include admin functionality and real-time backend
          support. Terms may be updated accordingly when new features are introduced.
        </p>

        {/* 6. Limitation of Liability */}
        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">6. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          ParkMate and its creators are not responsible for the accuracy of park information,
          nor for any incidents that may occur at parks listed in the app. Use the app at your
          own discretion.
        </p>

        {/* 7. Contact */}
        <h2 className="text-xl font-semibold text-green-600 mt-6 mb-2">7. Contact</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these terms, please reach out to the developer via
          the project repository or demo link.
        </p>

        {/* Last Line */}
        <p className="text-sm text-gray-500 mt-8">
          Last updated: June 20, 2025
        </p>
      </div>
    </div>
  );
}
