// src/pages/About.jsx
import React, { useEffect, useState } from "react";
import "./About.css";

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
    <section>
      <h1>About Me</h1>
      <p>
        Hello! I'm Trevor, I'm 22 and a graduate of Algonquin College's Computer Engineering Technology course.
      </p>

      <div>
        <h2>Skills</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {skills.length > 0 ? (
          <p className="skills-list">
            {skills.map((skill) => <span key={skill.id}>{skill.name}</span>)}
          </p>
        ) : (
          <p>No skills added yet.</p>
        )}
      </div>
    </section>
  );
}

export default About;
