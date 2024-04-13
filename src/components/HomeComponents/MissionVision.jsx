import { Avatar, Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HistoryIcon from "@mui/icons-material/History";
import DiamondIcon from "@mui/icons-material/Diamond";
const missionVision = [
  {
    title: "Mission",
    text: "To offer seamless online shopping experiences, connecting customers with quality products and exceptional service, all at their fingertips.",
    icon: <DiamondIcon sx={{ fontSize: 45, color: "#C5A491" }} />,
  },
  {
    title: "Vision",
    text: "To redefine online shopping with seamless tech, personalized experiences, and global accessibility",
    icon: <RemoveRedEyeIcon sx={{ fontSize: 45, color: "#C5A491" }} />,
  },
  {
    title: "History",
    text: "From vision to reality, we've shaped e-commerce with innovation and dedication, becoming a trusted destination for quality products and service.",
    icon: <HistoryIcon sx={{ fontSize: 45, color: "#C5A491" }} />,
  },
];
const missionItem = missionVision.map((item, id) => {
  return (
    <Grid item xs={12} md={4} key={id}>
      <Card
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 1,
          backgroundColor: "#C5A491",
          textAlign: "center",
          gap: 2,
          padding: 5,
          pt: 5,
          pb: 5,
          height: "250px",
        }}
      >
        <Avatar sx={{ padding: 1, backgroundColor: "#EADED7" }}>
          {item.icon}
        </Avatar>
        <Typography variant='h4' sx={{ fontWeight: 700, color: "#EADED7" }}>
          {item.title}
        </Typography>
        <Typography>{item.text}</Typography>
      </Card>
    </Grid>
  );
});
const MissionVision = () => {
  return (
    <Container
      maxWidth='off'
      disableGutters
      sx={{ backgroundColor: "#EADED7" }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ padding: "5rem 0" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              pb: 5,
            }}
          >
            <Typography variant='h4' sx={{ pr: { md: 10, lg: 20 } }}>
              Custom Utilities Just For you!
            </Typography>
            <Typography color='black'>
              Discover the perfect solutions crafted with care, designed to
              simplify your life. From innovative gadgets to essential aids,
              we've got you covered. Embrace efficiency, embrace ease, and let
              every task become a pleasure!
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {missionItem}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default MissionVision;
