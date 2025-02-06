import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Card, CardContent, CardActions, Button, Typography, Grid, IconButton, Badge, Avatar } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Example images for Wendy's bakery items
const itemImages = {
  "Chocolate Chip Cookie": "chococookie.jpeg",
  "Blueberry Muffin": "bberrymuffin.jpeg",
  "Croissant": "crossiant.jpeg",
  "Cinnamon Roll": "cinnamonroll.jpeg",
  "Banana Bread": "bbread.jpeg",
  "Apple Pie": "applepie.jpeg",
  "Cheese Danish": "cheesedanish.jpeg",
  "Strawberry Shortcake": "strawberryshortcake.jpeg",
  "Brownie": "brownie.jpeg",
  "Lemon Tart": "lemontarts.jpeg",
};

const Wendys = () => {
  const items = [
    { id: 1, name: "Chocolate Chip Cookie", price: 1.99 },
    { id: 2, name: "Blueberry Muffin", price: 2.49 },
    { id: 3, name: "Croissant", price: 2.99 },
    { id: 4, name: "Cinnamon Roll", price: 3.49 },
    { id: 5, name: "Banana Bread", price: 2.89 },
    { id: 6, name: "Apple Pie", price: 3.99 },
    { id: 7, name: "Cheese Danish", price: 3.79 },
    { id: 8, name: "Strawberry Shortcake", price: 4.49 },
    { id: 9, name: "Brownie", price: 2.59 },
    { id: 10, name: "Lemon Tart", price: 3.29 },
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
        Wendy's - Bakery Menu
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

export default Wendys;
