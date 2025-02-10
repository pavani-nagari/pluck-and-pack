import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';

const Dashboard = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth) // Sign out from Firebase
      .then(() => {
        localStorage.removeItem("user");  // Clear local storage
        navigate("/");  // Redirect to login page
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#3F51B5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pluck and Pack 🛒
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content Area */}
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};

export default Dashboard;
