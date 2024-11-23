import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => {
    mobile ? setMobile(false) : setMobile(true);
  };

  return (
    <nav
      className={`w-full text-white px-0 py-1 fixed top-0 left-0 flex items-center justify-between z-10 containers ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <img src={logo} alt="" className="w-[180px]" />
      <ul className={mobile ? "" : "hide-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            HomePage
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testi" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
