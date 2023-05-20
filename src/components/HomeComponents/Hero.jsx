import React from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const sx = {
    section: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "#FFFFFF",
      display: "flex",
      height: "60vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      px: 2,
    },
    description: {
      color: theme.palette.background.secondary,
    },
    primaryAction: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginRight: theme.spacing(0),
        marginBottom: theme.spacing(2),
      },
    },
    secondaryAction: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    title: {
      fontSize: {
        xs: 40,
        md: 70,
      },
    },
  };
  return (
    <Box sx={sx.section}>
      <Container maxWidth="md" disableGutters>
        <Box textAlign="center" color="">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography
              color="primary"
              variant="h2"
              component="span"
              sx={sx.title}
            >
              WonderStore,{" "}
            </Typography>
            <Typography sx={sx.title} variant="h2" component="span">
              A store for All
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography
              variant="subtitle1"
              paragraph={true}
              sx={sx.description}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
              dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Atque, illum?
            </Typography>
          </Container>
          <Box mt={3} mb={3}>
            <Button
              variant="contained"
              color="primary"
              sx={sx.primaryAction}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={sx.secondaryAction}
              onClick={() => navigate("/shop")}
            >
              Shop
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
