import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth='off'
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
            variant='h1'
            textAlign={"center"}
            sx={{ fontSize: { xs: 50, md: 60, lg: 80 } }}
            color='primary'
          >
            404
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h4'
            color='primary'
            textAlign={"center"}
            sx={{ fontSize: { xs: 20, md: 30, lg: 60 } }}
          >
            Sorry, the page you tried cannot be found
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant='outlined' onClick={() => navigate("/")}>
            BACK HOME
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
