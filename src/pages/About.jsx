// src/pages/About.jsx
import React, { useEffect, useState } from "react";

function About() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/skills") // adjust URL if needed
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json();
      })
      .then((data) => setSkills(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1>About Me</h1>
      <p>
        Hello! I'm Trevor, I'm 22 and a graduate of Algonquin College's Computer Engineering Technology course.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <h2>Skills</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {skills.length > 0 ? (
          <p>{skills.map((skill) => skill.name).join(", ")}</p>
        ) : (
          <p>No skills added yet.</p>
        )}
      </div>
    </section>
  );
}

export default About;
