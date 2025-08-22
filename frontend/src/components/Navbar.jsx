import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold tracking-wide">My App</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link
            to="/create"
            className="hover:text-yellow-400 transition duration-300"
          >
            Create Post
          </Link>
          <Link
            to="/posts"
            className="hover:text-yellow-400 transition duration-300"
          >
            View Post
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">&#x2715;</span> // Close (X)
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/create"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Create Post
          </Link>
          <Link
            to="/posts"
            className="hover:text-yellow-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            View Post
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
