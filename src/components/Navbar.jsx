import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";


function Navbar({ auth, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (onLogout) onLogout();
    navigate("/");
  };

  return (
    <nav>
    <div className="nav-links">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>Expereince</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>

      {!auth && (
        <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>Admin Login</NavLink>
      )}

      {auth && (
        <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Admin Dashboard</NavLink>
      )}
    </div>

    {auth && (
    <div className="nav-logout">
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
    )}
</nav>
  );
}

export default Navbar;
