import React from "react";
import { FaHome, FaUser, FaBriefcase, FaImage, FaEnvelope } from "react-icons/fa";
import "../styles/style.css";

const Header = () => {
  return (
    <aside className="aside">
      {/* Logo Section */}
      <div className="logo">
        <a href="#">
          <span className="logo-text">S</span>hailesh
        </a>
        <div className="corner-border top-left"></div>
        <div className="corner-border bottom-right"></div>
      </div>

      {/* Navigation Menu */}
      <div className="nav">
        <ul>
          <li>
            <a href="#home">
              <FaHome className="nav-icon" /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FaUser className="nav-icon" /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FaBriefcase className="nav-icon" /> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FaImage className="nav-icon" /> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope className="nav-icon" /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Header;
