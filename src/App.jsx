import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./styles/style.css";
import "./styles/style-switcher.css";
import "./styles/skins/color-1.css";
import "./styles/skins/color-2.css";
import "./styles/skins/color-3.css";
import "./styles/skins/color-4.css";
import "./styles/skins/color-5.css";

function App() {
  const [theme, setTheme] = useState("color-1");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--skin-color",
      getComputedStyle(document.documentElement).getPropertyValue(`--${theme}`)
    );
  }, [theme]);

  return (
    <div className="main-container">
      <Header />
      <div className="main-content">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
      <ThemeSwitcher setTheme={setTheme} />
    </div>
  );
}

export default App;
