// src/pages/Contact.jsx
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        body: JSON.stringify({ name, email, message }),
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
      <div className="contact-container">
        {/* Contact Info Bubble */}
        <aside className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: <a href="mailto:dunntb2002@gmail.com">dunntb2002@gmail.com</a></p>
          <p>Phone: <a href="tel:6138058738">(613) 805-8738</a></p>
          <div className="contact-socials">
            <a href="https://github.com/trevordunn0902" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/trevor-dunn-6a00932a7" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} />
            </a>
          </div>
        </aside>

        {/* Form */}
        <div className="contact-form-wrapper">
          {status && (
            <p className={`contact-status ${status.includes("success") ? "success" : "error"}`}>
              {status}
            </p>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
