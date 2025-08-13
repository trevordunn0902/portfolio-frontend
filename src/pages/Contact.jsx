// src/pages/Contact.jsx
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa(`${import.meta.env.VITE_API_USER}:${import.meta.env.VITE_API_PASSWORD}`)
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section style={{ maxWidth: "600px", margin: "2rem auto", padding: "0 1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", fontSize: "1rem" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: "0.5rem", fontSize: "1rem", minHeight: "120px" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.75rem", fontSize: "1rem", cursor: "pointer" }}>
          Send
        </button>
      </form>

      {status && <p style={{ fontWeight: "bold" }}>{status}</p>}

      <h2>Other Contact Info</h2>
      <ul>
        <li>Email: <a href="mailto:dunntb2002@gmail.com">dunntb2002@gmail.com</a></li>
        <li>Phone: (613)-805-8738</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/trevor-dunn-6a00932a7" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/trevordunn0902" target="_blank" rel="noreferrer">Github</a></li>
      </ul>
    </section>
  );
}

export default Contact;
