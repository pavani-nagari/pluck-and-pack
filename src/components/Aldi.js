import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Box, Card, CardContent, CardActions, Button, Typography, Grid, IconButton, Badge, Avatar } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Example images for the items
const itemImages = {
  "L'oven Fresh White Bread": "bread.jpeg",
  "Large Eggs": "eggs.jpeg",
  "Skim Milk": "skimmilk.jpeg",
  "Bananas": "banans.jpeg",
  "Happy Farms Cream Cheese": "cheese.jpeg",
  "Ground Beef": "beef.jpeg",
  "Millville Balance Cereal": "cereal.jpeg",
  "L'oven Fresh Hamburger Buns": "buns.jpeg",
  "Tuscan Garden Distilled White Vinegar": "vinegar.jpeg",
  "Kirkwood Frozen Ground Turkey": "turkey.jpeg",
  "Apples": "apples.jpeg",
  "Carrots": "carrots.jpeg",
  "Creamy Peanut Butter": "peanutbutter.jpeg",
  "Wheat Bread": "wheatbread.jpeg",
  "Shredded Cheese": "shreddedcheese.jpeg",
  "Spinach": "spinach.jpeg",
  "Butter": "butter.jpeg",
  "Macaroni & Cheese": "macroni.jpeg",
  "Spaghetti": "sphagetti.jpeg",
  "Park Street Deli Hummus": "hummus.jpeg",
};

const Aldi = () => {
  const items = [
    { id: 1, name: "L'oven Fresh White Bread", price: 1.55 },
    { id: 2, name: "Large Eggs", price: 0.46 },
    { id: 3, name: "Skim Milk", price: 2.05 },
    { id: 4, name: "Bananas", price: 0.40 },
    { id: 5, name: "Happy Farms Cream Cheese", price: 2.35 },
    { id: 6, name: "Ground Beef", price: 2.04 },
    { id: 7, name: "Millville Balance Cereal", price: 2.39 },
    { id: 8, name: "L'oven Fresh Hamburger Buns", price: 0.85 },
    { id: 9, name: "Tuscan Garden Distilled White Vinegar", price: 4.05 },
    { id: 10, name: "Kirkwood Frozen Ground Turkey", price: 2.75 },
    { id: 11, name: "Apples", price: 2.99 },
    { id: 12, name: "Carrots", price: 0.59 },
    { id: 13, name: "Creamy Peanut Butter", price: 2.99 },
    { id: 14, name: "Wheat Bread", price: 0.99 },
    { id: 15, name: "Shredded Cheese", price: 2.95 },
    { id: 16, name: "Spinach", price: 1.49 },
    { id: 17, name: "Butter", price: 2.29 },
    { id: 18, name: "Macaroni & Cheese", price: 0.33 },
    { id: 19, name: "Spaghetti", price: 0.73 },
    { id: 20, name: "Park Street Deli Hummus", price: 2.85 },
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
        Aldi - Shopping Cart
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

export default Aldi;
