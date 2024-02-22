import "./Navbar.css";
import { FiHome } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { PiProjectorScreenChartThin } from "react-icons/pi";
import { PiCertificateBold } from "react-icons/pi";
import { FcDocument } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {};

  const handleScroll = (elementId) => {
    showNavbar();
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: "instant",
      });
    }
  };

  return (
    <header>
      <div
        className="logo"
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          className="d-flex navbar-brand"
          onClick={() => {
            handleScroll("/");
          }}
        >
          <h1 className="logo-text">yuvi</h1>
        </a>
      </div>
      <nav ref={navRef}>
        <div className="nav-item">
          <a
            className="nav-link"
            href="#home"
            onClick={() => {
              handleScroll("home");
            }}
          >
            <FiHome />
            <span className="intro">Home</span>
          </a>
        </div>
        <div className="nav-item">
          <a
            className="nav-link"
            href="#about"
            onClick={() => {
              handleScroll("about");
            }}
          >
            <BsFillPersonFill />
            <span className="intro">About</span>
          </a>
        </div>

        <div className="nav-item">
          <a
            className="nav-link"
            href="#projects"
            onClick={() => {
              handleScroll("projects");
            }}
          >
            <PiProjectorScreenChartThin />
            <span className="intro">Projects</span>
          </a>
        </div>

        <div className="nav-item">
          <a
            className="nav-link"
            href="https://drive.google.com/file/d/1zUr4eKzm6_xVPgWiDEnES-qA-NmpVKlk/view?usp=sharing"
          >
            <FcDocument />
            <span className="intro">Resume</span>
          </a>
        </div>
        <button
          type="button"
          onClick={showNavbar}
          className="nav-btn nav-close-btn"
        >
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
