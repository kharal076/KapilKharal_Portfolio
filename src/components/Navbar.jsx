import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();  // Close menu when the window is resized to <= 500px
      }
    };
  
    // Call handleResize once when the component mounts
    handleResize();
  
    // Add the event listener for resizing
    window.addEventListener("resize", handleResize);
  
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 
  
    // Apply dark mode on load & toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/portfolio-logo.png" alt="Logo" />
      </div>
      <button className="nav__hamburger" onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
        {["Home", "Skills", "AboutMe", "Projects", "Experience","Contact"].map(
            (section) => (
          <li key={section}>
            <Link
              
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={section}
              className="navbar--content"
            >
              {section.replace(/([A-Z])/g, " $1").trim()}
             
            </Link>
          </li>
            )
        )}
        </ul>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded transition-all"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
  
    </nav>
      );
}

