import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="off"
      disableGutters
      sx={{
        minHeight: "100vh",
        background: "#684B3B",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        padding: { xs: 5, md: 10, lg: 20 },
      }}
    >
      <Grid container spacing={2} sx={{ alignSelf: "center", maxWidth: 900 }}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            textAlign={"center"}
            sx={{ fontSize: { xs: 50, md: 60, lg: 80 } }}
            color="primary"
          >
            LOADING...
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loading;
