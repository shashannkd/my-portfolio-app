import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const { navActive, setNavActive } = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
