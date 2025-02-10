import React from "react";
import { Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListShoppers = () => {
  const navigate = useNavigate();

  const stores = [
    { src: "/ALDI_2017.png", alt: "Aldi", route: "/aldi" },
    { src: "/Walgreens-Logo.png", alt: "Walgreens", route: "/walgreens"},
    { src: "/Wendy's_full_logo_2012.svg.png", alt: "Wendy's", route:"/wendys" },
    { src: "/Walmart-Logo.png", alt: "Walmart", route: "/walmart" },
    { src: "/patelbrothers.png", alt: "Indian Store",  route: "/patelbrothers" },
  ];

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f7f7f7",
      textAlign: "center",
      padding: "30px",
    },
    title: {
      fontSize: "2.5rem",
      color: "#3F51B5",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    description: {
      fontSize: "1.2rem",
      color: "#666",
      marginBottom: "30px",
    },
    gridContainer: {
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    storeCard: {
      cursor: "pointer",
      border: "2px solid #ddd",
      borderRadius: "12px",
      padding: "15px",
      textAlign: "center",
      backgroundColor: "white",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    storeImage: {
      width: "100%",
      height: "150px",
      objectFit: "contain",
      transition: "transform 0.3s ease-in-out",
    },
    storeCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>Welcome to the Shop! 🛍️</Typography>
      <Typography style={styles.description}>
        Explore our wide range of products and start shopping now!
      </Typography>

      <Grid container spacing={3} style={styles.gridContainer}>
        {stores.map((store, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <div
              style={styles.storeCard}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.storeCardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, styles.storeCard)
              }
              onClick={() => store.route && navigate(store.route)}
            >
              <img src={store.src} alt={store.alt} style={styles.storeImage} />
              <Typography variant="h6" sx={{ mt: 2, color: "#444" }}>
                {store.alt}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListShoppers;
