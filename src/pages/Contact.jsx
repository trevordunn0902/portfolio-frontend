// src/pages/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section style={{ maxWidth: "600px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Contact Me</h1>
      <p>Here is my contact information and a link to my repositories:</p>
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