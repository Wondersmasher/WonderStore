import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Newsletter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        color: "black",
        pt: { md: 15, xs: 10 },
        pb: { md: 15, xs: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={4}>
              <Typography
                variant="h4"
                sx={{ textAlign: { md: "left", xs: "center" } }}
                color="primary"
              >
                Join our newsletter and get 20% off !
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <form>
                <TextField
                  sx={{ width: "100%" }}
                  variant="outlined"
                  label="E-mail"
                  color="primary"
                />
              </form>
              <Button
                variant="contained"
                disableElevation
                sx={{ mt: 1, float: "right" }}
                color="primary"
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
