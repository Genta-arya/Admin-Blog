import React, { useEffect, useRef } from "react";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { menuItems, Text } from "../constants/Constants";

const Sidebar = ({ isMenuOpen, toggleMenu, setMenu }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  const isActive = (path) =>
    location.pathname === path
      ? "dark:bg-gray-700 dark:text-white bg-gray-300  px-4 rounded-md"
      : "";

  const handleMenuItemClick = () => {
    setMenu(false);
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 z-20 overflow-auto  w-56 h-full border-r bg-white dark:bg-gray-800 dark:text-white p-1 transition-transform duration-300 transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <button onClick={() => setMenu(false)} className="mt-4 ml-3">
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="mt-6">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                onClick={handleMenuItemClick}
                to={item.path}
                className={`flex  items-center py-2 `}
              >
                <div
                  className={`flex w-full py-1 items-center gap-4 hover:dark:bg-gray-700 hover:dark:text-white hover:bg-gray-300 rounded-md  hover:transition-all hover:duration-300 px-4  ${isActive(
                    item.path
                  )}`}
                >
                  <item.icon size={20} />
                  <div className={Text}>{item.name}</div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t-2 mb-3">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 hover:transition-all hover:duration-300 rounded-md px-4 w-full mt-4"
          >
            <FaSignOutAlt size={20} />
            <div className={Text}>Sign Out</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
