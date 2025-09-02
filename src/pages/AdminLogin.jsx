import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("adminUser");
    const savedPass = localStorage.getItem("adminPass");

    if (savedUser && savedPass) {
      onLoginSuccess(savedUser, savedPass);
      navigate("/admin/dashboard");
    }
  }, [navigate, onLoginSuccess]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(`${username}:${password}`));

    try {
      const response = await fetch("http://localhost:8080/api/admin/check", {
        headers,
      });

      if (response.ok) {
        localStorage.setItem("adminUser", username);
        localStorage.setItem("adminPass", password);
        setError("");
        onLoginSuccess(username, password);
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Error connecting to server");
    }
  };

  return (
    <section>
      <h1>Admin Login</h1>
      <div className="login-form-wrapper">
        {error && <p className="login-status error">{error}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;
