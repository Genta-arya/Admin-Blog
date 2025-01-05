import React, { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-white p-2 border-b shadow-md dark:bg-dark-bg  text-black dark:text-white px-4 lg:px-8 ">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-10 ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <Sidebar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        setMenu={setIsMenuOpen}
      />

      <nav className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="">
              <button onClick={toggleMenu} className="" title="Menu">
                {isMenuOpen ? null: <FaBars size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              title="Theme"
              className=" p-2 rounded-full border-gray-300 dark:border-gray-600"
            >
              {isDarkMode ? <FaSun color="yellow" size={20} /> : <FaMoon color="#1D4ED8" />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
