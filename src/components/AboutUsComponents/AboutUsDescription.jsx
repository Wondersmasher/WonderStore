import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
const AboutUsDescriptionImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: { md: "50%", xs: "100%" },
  height: { md: "50%", xs: "100%" },
  borderRadius: 5,
}));
const AboutUsDescription = () => {
  return (
    <Box
      sx={{ paddingTop: { lg: 15, xs: 10 }, paddingBottom: { lg: 15, xs: 10 } }}
    >
      <Container
        maxWidth='lg'
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: {
            lg: 15,
            xs: 2,
          },
        }}
      >
        <AboutUsDescriptionImage src='/image/shoe1.png' />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            variant='h3'
            color='black'
            sx={{
              textAlign: "center",
              fontSize: {
                lg: 50,
                md: 40,
                xs: 30,
              },
              fontWeight: 700,
              "::after": {
                content: '" "',
                width: { lg: "60px", xs: "5%" },
                height: "4px",
                position: "relative",
                left: { lg: "41%", xs: "47%" },
                // left: { lg: "45%", xs: "10%" },
                // top: "50%",
                display: "block",
                background: "#C5A491",
                mb: 1,
                borderRadius: 1,
                // transition: "3s width from left to right",
              },
            }}
          >
            Our Story
          </Typography>
          <Typography color='black' sx={{ textAlign: "justify" }}>
            Celebrating our journey of growth and evolution, we've established
            ourselves as a beacon of reliability and convenience in the realm of
            online shopping. With a passionate team driving our mission forward,
            we continue to redefine standards and exceed expectations, providing
            a seamless shopping experience for our valued customers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsDescription;
