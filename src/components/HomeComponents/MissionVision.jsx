import { Avatar, Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HistoryIcon from "@mui/icons-material/History";
import DiamondIcon from "@mui/icons-material/Diamond";
const missionVision = [
  {
    title: "Mission",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque, rerum iure et eos esse reprehenderit id sunt sed officia cumque provident. Nihil, minima aspernatur.",
    icon: <DiamondIcon sx={{ fontSize: 45, color: "#C5A491" }} />,
  },
  {
    title: "Vision",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque, rerum iure et eos esse reprehenderit id sunt sed officia cumque provident. Nihil, minima aspernatur.",
    icon: <RemoveRedEyeIcon sx={{ fontSize: 45, color: "#C5A491" }} />,
  },
  {
    title: "History",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque, rerum iure et eos esse reprehenderit id sunt sed officia cumque provident. Nihil, minima aspernatur.",
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
        }}
      >
        <Avatar sx={{ padding: 1, backgroundColor: "#EADED7" }}>
          {item.icon}
        </Avatar>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#EADED7" }}>
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
      maxWidth="off"
      disableGutters
      sx={{ backgroundColor: "#EADED7" }}
    >
      <Container maxWidth="lg">
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
            <Typography variant="h4" sx={{ pr: { md: 10, lg: 20 } }}>
              Custom Utilities Just For you!
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              temporibus placeat vero deserunt adipisci impedit, reprehenderit
              esse, odio ab hic accusantium, blanditiis beatae nihil dolorem!
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
