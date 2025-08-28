// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";

function AdminDashboard({ auth }) {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [error, setError] = useState("");

  const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(`${auth.username}:${auth.password}`));
  headers.set("Content-Type", "application/json");

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
      fetchSkills();
    } catch {
      setError("Error adding skill");
    }
  };

  const deleteSkill = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/skills/${id}`, {
        method: "DELETE",
        headers,
      });
      if (!response.ok) throw new Error("Failed to delete skill");
      fetchSkills();
    } catch {
      setError("Error deleting skill");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section>
      <h1>Admin Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
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
            <li key={skill.id}>
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

