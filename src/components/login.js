import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, FormControlLabel, Checkbox, Paper } from "@mui/material";
import { auth } from "../firebase"; // Assuming firebase.js is in the src folder
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { keyframes } from "@mui/system";

// Fading and Scaling Animation
const fadeInAndScale = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Login = ({ onLogin }) => {  // Receiving onLogin function from App.js
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission for login or signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        // Sign up new user
        await createUserWithEmailAndPassword(auth, email, password);
        onLogin();  // Call onLogin after successful signup
        navigate("/dashboard"); // Redirect to dashboard after signup
      } else {
        // Login existing user
        await signInWithEmailAndPassword(auth, email, password);
        onLogin();  // Call onLogin after successful login
        navigate("/dashboard"); // Redirect to dashboard after login
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container component="main" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f3e5f5, #fff)', // Light pastel gradient background
    }}>
      {/* Left Section with Animated Comment */}
      <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: `${fadeInAndScale} 2s ease-out`,
        flexDirection: 'column',
        textAlign: 'center',
        padding: 3
      }}>
        <Typography variant="h5" sx={{
          fontWeight: 'bold',
          color: '#2c3e50',
          marginBottom: 2,
          fontSize: '2rem',
          animation: `${fadeInAndScale} 2.5s ease-out`
        }}>
          Welcome to Pluck and Pack
        </Typography>
        <Typography variant="subtitle1" sx={{
          color: '#7f8c8d',
          marginBottom: 3,
          fontStyle: 'italic',
          animation: `${fadeInAndScale} 3s ease-out`
        }}>
          Experience shopping like never before.
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{
          fontStyle: 'italic',
          animation: `${fadeInAndScale} 3.5s ease-out`
        }}>
          Powered by Pluck and Pack
        </Typography>
      </Box>

      {/* Right Section with Login Form */}
      <Paper sx={{
        flex: 1,
        padding: 4,
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: '100%',
        width: '100%',
        backgroundColor: '#fff',
        animation: `${fadeInAndScale} 1s ease-out`, // Animation for the form
      }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" sx={{
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: 2,
            animation: `${fadeInAndScale} 1.5s ease-out` // Title animation
          }}>
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <Typography variant="subtitle1" sx={{
            color: '#7f8c8d',
            marginBottom: 3,
            textAlign: 'center',
            fontStyle: 'italic',
            animation: `${fadeInAndScale} 2s ease-out` // Subtitle animation
          }}>
            Welcome to the Pluck and Pack website! Your online shopping experience just got easier.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              required
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              variant="outlined"
              sx={{
                mb: 2,
                animation: `${fadeInAndScale} 2s ease-out` // Input animation
              }}
            />
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              variant="outlined"
              sx={{
                mb: 2,
                animation: `${fadeInAndScale} 2.2s ease-out` // Input animation
              }}
            />
            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1, animation: `${fadeInAndScale} 2.5s ease-out` }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#3498db",
                '&:hover': {
                  backgroundColor: "#2980b9",
                },
                animation: `${fadeInAndScale} 2.5s ease-out` // Button animation
              }}
            >
              {isSignup ? "Sign Up" : "Login"}
            </Button>
          </Box>
          <FormControlLabel
            control={<Checkbox checked={isSignup} onChange={() => setIsSignup(!isSignup)} />}
            label="Don't have an account? Sign Up"
            sx={{ mt: 2 }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
