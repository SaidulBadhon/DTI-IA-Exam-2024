import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../lib/utils";

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky backdrop-blur-sm top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link to="/">Saidul Badhon</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className={({ isActive }) =>
                cn(
                  "font-semibold hover:text-blue-500",
                  isActive ? "text-blue-500" : "text-gray-700"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white top-0 min-h-screen flex flex-col items-center justify-center space-y-6"
          style={{
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className="text-2xl text-gray-700 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
