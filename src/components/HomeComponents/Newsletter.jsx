import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ckucjed");
    const timeout = 2000;
    setTimeout(() => {
      setEmail("");
    }, timeout);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        color: "black",
        pt: { md: 15, xs: 10 },
        pb: { md: 15, xs: 10 },
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{ display: "flex", flexDirection: { md: "row", xs: "column" } }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={4}>
              <Typography
                variant='h4'
                sx={{ textAlign: { md: "left", xs: "center" } }}
                color='primary'
              >
                Join our newsletter to get amazing news on current trends!
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <form>
                <TextField
                  id='outlined-controlled'
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  label='E-mail Address'
                  sx={{ width: "100%" }}
                  variant='outlined'
                  color='primary'
                  type='email'
                  value={email}
                />
              </form>
              <Button
                variant='contained'
                disableElevation
                sx={{ mt: 1, float: "right" }}
                color='primary'
                onClick={handleSubmit}
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
