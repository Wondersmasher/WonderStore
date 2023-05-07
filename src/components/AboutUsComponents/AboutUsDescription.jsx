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
        maxWidth="lg"
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
        <AboutUsDescriptionImage src="/image/try3.jpg" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h3">Our Story</Typography>
          <Typography sx={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            voluptatibus dolorum, facere tempore reprehenderit rerum quas dolor
            aliquid perspiciatis eaque harum sint dolores quisquam iusto modi,
            doloremque pariatur consequuntur nemo exercitationem aut laudantium
            odit. Et, sed. Non molestiae, eaque suscipit nobis magnam cum est,
            quod ex, commodi dolorem inventore rem?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsDescription;
