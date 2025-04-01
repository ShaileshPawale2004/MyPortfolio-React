import React, { useEffect, useState } from "react";
import { FaCog, FaSun, FaMoon } from "react-icons/fa";
import "../styles/style-switcher.css";

const themes = [
  { name: "color-1", color: "#ec1839" },
  { name: "color-2", color: "#fa5b0f" },
  { name: "color-3", color: "#37b182" },
  { name: "color-4", color: "#1854b4" },
  { name: "color-5", color: "#f021b2" },
];

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme-mode") === "dark"
  );
  const [activeTheme, setActiveTheme] = useState(
    localStorage.getItem("theme-color") || "color-1"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme-mode", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--skin-color",
      themes.find((theme) => theme.name === activeTheme)?.color || themes[0].color
    );
    localStorage.setItem("theme-color", activeTheme);
  }, [activeTheme]);

  return (
    <div className={`style-switcher ${isOpen ? "open" : ""}`}>
      <div className="s-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaCog />
      </div>
      <div className="day-night" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {themes.map((theme) => (
          <span
            key={theme.name}
            className={theme.name}
            style={{ background: theme.color }}
            onClick={() => setActiveTheme(theme.name)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
