// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        About
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;