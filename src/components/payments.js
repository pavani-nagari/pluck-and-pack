// PaymentPage.js
import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount } = location.state || {};

  const handlePayment = () => {
    alert(`Payment of $${totalAmount} successful!`);
    navigate("/"); // Redirect to home or main page
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f5f5f5",
        height: "90vh", // Ensure the height is 100% of the viewport
        overflow: "hidden", // Prevent unnecessary scroll
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Complete Your Payment
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Total Amount: ${totalAmount.toFixed(2)}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Pay with Credit/Debit Card
            </Typography>
            <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handlePayment}>
              Pay Now
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Pay with PayPal
            </Typography>
            <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handlePayment}>
              Pay with PayPal
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Pay with Google Pay
            </Typography>
            <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handlePayment}>
              Pay with Google Pay
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Button variant="outlined" color="secondary" sx={{ mt: 4 }} onClick={() => navigate("/")}>
        Cancel Payment
      </Button>
    </Box>
  );
};

export default PaymentPage;
