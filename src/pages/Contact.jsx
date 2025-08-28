// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const text = await response.text();
        setStatus(`Failed to send message: ${text}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to server.");
    }
  };

  return (
    <section>
      <h1>Contact Me</h1>
      {status && (
        <p className={`contact-status ${status.includes("success") ? "success" : "error"}`}>
          {status}
        </p>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
