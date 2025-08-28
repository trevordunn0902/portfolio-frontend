import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from './pages/Experience';
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("adminUser");
    const savedPass = localStorage.getItem("adminPass");

    if (savedUser && savedPass) {
      setAuth({ username: savedUser, password: savedPass });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    localStorage.removeItem("adminPass");
    setAuth(null);
  };

  return (
    <Router>
      <Navbar auth={auth} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              !auth ? (
                <AdminLogin onLoginSuccess={(username, password) => setAuth({ username, password })} />
              ) : (
                <Navigate to="/admin/dashboard" />
              )
            }
          />
          <Route
            path="/admin/dashboard"
            element={auth ? <AdminDashboard auth={auth} /> : <Navigate to="/admin" />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
