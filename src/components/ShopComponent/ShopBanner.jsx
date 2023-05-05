import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ShopBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EADED7",
        height: 190,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          //   border: "solid red",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{}}>
          Home / Shop
        </Typography>
      </Container>
    </Box>
  );
};

export default ShopBanner;
