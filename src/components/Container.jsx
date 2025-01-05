import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Text } from "../constants/Constants";
import Footer from "./Footer";
import Tools from "./Tools";

const Container = ({ children }) => {
  const location = useLocation(); // Untuk mendapatkan path saat ini

  const Title = "Dashboard";
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home - " + Title;
      case "/blog":
        return "Blog - " + Title;
      case "/category":
        return "Category - " + Title;
      case "/tags":
        return "Tags - " + Title;
      default:
        return Title; // Default title
    }
  };

  return (
    <>
      <Helmet>
        <title>{getTitle()}</title>
      </Helmet>

      <Navbar />

      <div
        className={`${Text} bg-light-bg dark:bg-dark-bg text-black dark:text-white
  flex flex-col min-h-screen px-4 py-8`}
      >
       
        {children}
      </div>

      <Footer />
    </>
  );
};

export default Container;
