import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`w-full text-white px-0 py-1 fixed top-0 left-0 flex items-center justify-between z-10 containers ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <img src={logo} alt="" className="w-[180px]" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
