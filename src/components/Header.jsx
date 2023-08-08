import React, { useState, useEffect } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleTheme = () => {
    var is_theme = theme === "light" ? "dark" : "light";
    setTheme(is_theme);
  };
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", theme);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return (
    <div className="w-full h-20 fixed top-0 z-10 bg-white  dark:bg-gray-900 shadow-lg shadow-slate-100/90 dark:shadow-black/10">
      <div className="max-w-7xl px-5 h-20 items-center  mx-auto flex justify-between">
        <div className="">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <ul className="flex gap-10 text-sm font-semibold tracking-wider invisible lg:visible">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>Sign In</li>
          <li>Cart</li>
          <li>
            <button
              className="bg-gray-300 dark:bg-slate-600 px-5 dark:text-gray-200 rounded-lg cursor-pointer"
              onClick={handleTheme}
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
