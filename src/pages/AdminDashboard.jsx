// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";

function AdminDashboard({ auth }) {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [error, setError] = useState("");

  // Use environment variable for backend URL
  const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(`${auth.username}:${auth.password}`));
  headers.set("Content-Type", "application/json");

  // Fetch all skills
  const fetchSkills = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/skills`, { headers });
      if (!response.ok) throw new Error("Failed to fetch skills");
      const data = await response.json();
      setSkills(data);
    } catch {
      setError("Error fetching skills");
      setSkills([]);
    }
  };

  // Add a new skill
  const addSkill = async () => {
    if (!newSkill.trim()) return;
    try {
      const response = await fetch(`${BACKEND_URL}/api/skills`, {
        method: "POST",
        headers,
        body: JSON.stringify({ name: newSkill.trim() }),
      });
      if (!response.ok) throw new Error("Failed to add skill");
      setNewSkill("");
      fetchSkills(); // refresh skills list
    } catch {
      setError("Error adding skill");
    }
  };

  // Delete a skill
  const deleteSkill = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/skills/${id}`, {
        method: "DELETE",
        headers,
      });
      if (!response.ok) throw new Error("Failed to delete skill");
      fetchSkills(); // refresh skills list
    } catch {
      setError("Error deleting skill");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1>Admin Dashboard</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginBottom: "1rem" }}>
        <input
          placeholder="New skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>

      <h2>Existing Skills</h2>
      {skills.length === 0 ? (
        <p>No skills found</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill.id} style={{ marginBottom: "0.5rem" }}>
              {skill.name}{" "}
              <button onClick={() => deleteSkill(skill.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AdminDashboard;
