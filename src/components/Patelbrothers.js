import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Card, CardContent, CardActions, Button, Typography, Grid, IconButton, Badge, Avatar } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Example images for Patel Brothers items
const itemImages = {
  "Tata Tea": "tatatea.jpg",
  "Amul Butter": "amul.jpg",
  "Basmati Rice": "basmati.jpg",
  "Haldiram's Bhujia": "bhujia.jpg",
  "Kissan Ketchup": "ketchup.jpg",
  "Parle-G Biscuits": "parleg.jpg",
  "Patanjali Aloe Vera Gel": "patanjali.jpg",
  "MTR Sambar Powder": "mtr_sambhar.jpg",
  "Everest Garam Masala": "masala.jpg",
  "Maggi Instant Noodles": "maggi.jpg",
};

const PatelBrothers = () => {
  const items = [
    { id: 1, name: "Tata Tea", price: 3.99 },
    { id: 2, name: "Amul Butter", price: 4.79 },
    { id: 3, name: "Basmati Rice", price: 6.49 },
    { id: 4, name: "Haldiram's Bhujia", price: 5.99 },
    { id: 5, name: "Kissan Ketchup", price: 2.49 },
    { id: 6, name: "Parle-G Biscuits", price: 1.99 },
    { id: 7, name: "Patanjali Aloe Vera Gel", price: 4.29 },
    { id: 8, name: "MTR Sambar Powder", price: 3.59 },
    { id: 9, name: "Everest Garam Masala", price: 2.89 },
    { id: 10, name: "Maggi Instant Noodles", price: 0.99 },
  ];

  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart;
      const updatedCart = { ...prevCart };
      updatedCart[id] -= 1;
      if (updatedCart[id] <= 0) delete updatedCart[id];
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const item = items.find((item) => item.id === parseInt(id));
      return item ? total + quantity * item.price : total;
    }, 0);
  };

  const handleCheckout = () => {
    navigate("/payment", { state: { totalAmount: calculateTotal() } });
  };

  return ReactDOM.createPortal(
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", height: "100%" }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Patel Brothers - Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <CardContent>
                <Avatar
                  alt={item.name}
                  src={itemImages[item.name]}
                  sx={{ width: 56, height: 56, margin: "0 auto", mb: 2 }}
                />
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  ${item.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", gap: 2 }}>
                <IconButton color="primary" onClick={() => handleAddToCart(item.id)}>
                  <Add />
                </IconButton>
                <Badge badgeContent={cart[item.id] || 0} color="secondary" showZero />
                <IconButton
                  color="primary"
                  onClick={() => handleRemoveFromCart(item.id)}
                  disabled={!cart[item.id]}
                >
                  <Remove />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, p: 3, backgroundColor: "white", boxShadow: 2, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h5">
          Total Amount: ${calculateTotal().toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleCheckout}
          disabled={Object.keys(cart).length === 0}
        >
          Checkout
        </Button>
      </Box>
    </Box>,
    document.getElementById("portal-homepage")
  );
};

export default PatelBrothers;
