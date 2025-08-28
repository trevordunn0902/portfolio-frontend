import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      // Try hitting the secured /api/admin/check endpoint
      const response = await fetch("http://localhost:8080/api/admin/check", { headers });

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
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default AdminLogin;
