import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";


const Welcome = ({ onStartShopping }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onStartShopping();
    navigate("/dashboard"); // ✅ Ensure navigation to the correct route
  };
  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(to right, #4CAF50, #3F51B5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      animation: "fadeIn 0.7s ease-in-out",
    },
    content: {
      background: "white",
      padding: "30px 40px",
      borderRadius: "12px",
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      width: "90%",
      maxWidth: "500px",
      transition: "transform 0.3s ease-in-out",
    },
    title: {
      fontSize: "2.5rem",
      color: "#3F51B5",
      marginBottom: "15px",
    },
    description: {
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "20px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "white",
      background: "#ff9800",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s",
    },
    buttonHover: {
      backgroundColor: "#e68900",
      transform: "scale(1.05)",
    },
  };

  return ReactDOM.createPortal(
    <div style={styles.container}>
      <div
        style={styles.content}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h1 style={styles.title}>Welcome to Pluck and Pack</h1>
        <p style={styles.description}>
          Discover fresh groceries at your fingertips!
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff9800")
          }
          onClick={onStartShopping}
        >
          Start Shopping 🛒
        </button>
      </div>
    </div>,
    document.getElementById("portal-homepage")
  );
};

export default Welcome;
