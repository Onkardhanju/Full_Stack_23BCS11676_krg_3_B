import React, { useState } from "react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, body };

    try {
      const response = await fetch("/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Data submitted successfully!");
        setTitle("");
        setBody("");
      } else {
        setMessage("Failed to submit data.");
      }
    } catch (error) {
      setMessage("Error submitting data.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a Post</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          style={styles.textarea}
          required
        ></textarea>

        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#444",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
  },
  textarea: {
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    background: "#0066ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "bold",
    color: "green",
  },
};       