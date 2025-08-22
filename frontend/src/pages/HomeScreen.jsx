import React from "react";
import { useNavigate } from "react-router";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-yellow-400">My App</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed">
          A simple and elegant place where you can{" "}
          <span className="text-yellow-400 font-semibold">create</span> posts,
          share your thoughts, and{" "}
          <span className="text-yellow-400 font-semibold">explore</span> them
          anytime.
        </p>

        {/* Create Post Button */}
        <button
          onClick={() => navigate("/create")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base lg:text-lg"
        >
          🚀 Create Post
        </button>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-36 sm:w-56 h-36 sm:h-56 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HomeScreen;
