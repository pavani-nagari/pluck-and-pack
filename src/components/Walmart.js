import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Card, CardContent, CardActions, Button, Typography, Grid, IconButton, Badge, Avatar } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


// Example images for Walmart items
const itemImages = {
  "Great Value Whole Milk": "wholemilk.jpeg",
  "Fresh Chicken Breast": "cbreast.jpg",
  "Organic Baby Spinach": "spinach.jpeg",
  "Nature Valley Granola Bars": "granola.jpg",
  "Folgers Classic Roast Coffee": "coffee.jpg",
  "Bounty Paper Towels": "bounty.jpg",
  "Colgate Toothpaste": "colgate.jpg",
  "Tyson Chicken Nuggets": "chickennuggets.jpg",
  "Quaker Oats": "quakeroats.jpg",
  "Dove Body Wash": "dove.jpg",
};

const Walmart = () => {
  const items = [
    { id: 1, name: "Great Value Whole Milk", price: 3.29 },
    { id: 2, name: "Fresh Chicken Breast", price: 5.99 },
    { id: 3, name: "Organic Baby Spinach", price: 3.49 },
    { id: 4, name: "Nature Valley Granola Bars", price: 2.88 },
    { id: 5, name: "Folgers Classic Roast Coffee", price: 6.99 },
    { id: 6, name: "Bounty Paper Towels", price: 8.99 },
    { id: 7, name: "Colgate Toothpaste", price: 2.79 },
    { id: 8, name: "Tyson Chicken Nuggets", price: 7.49 },
    { id: 9, name: "Quaker Oats", price: 4.99 },
    { id: 10, name: "Dove Body Wash", price: 5.99 },
  ]

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
      if (item) {
        return total + quantity * item.price;
      }
      return total;
    }, 0);
  };

  const handleCheckout = () => {
    navigate("/payment", { state: { totalAmount: calculateTotal() } });
  };

  return ReactDOM.createPortal(
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5", height: "100%" }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Walmart - Shopping Cart
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

export default Walmart;
