import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
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
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "#C5A491",
            }}
          >
            Home
          </NavLink>{" "}
          / About
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
