import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
const gridItemList = [
  {
    title: "24/7 Customer Service",
    text: "Always available for you",
    icon: <SupportAgentOutlinedIcon />,
  },
  {
    title: "Money Back",
    text: "Guarantee you your money back",
    icon: <PaidOutlinedIcon />,
  },
  {
    title: "Free Gifts",
    text: "Get free Amazon gift cards",
    icon: <CardGiftcardOutlinedIcon />,
  },
  {
    title: "International Shipping",
    text: "Distance... Not a barrier",
    icon: <LocalShippingOutlinedIcon />,
  },
];
const gridItem = gridItemList.map((item, id) => {
  return (
    <Grid item xs={12} sm={6} lg={3} key={id}>
      <Card
        elevation={2}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 1,
          display: "flex",
          padding: 5,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ marginRight: 2 }}>{item.icon}</Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" sx={{ fontSize: 20 }}>
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 15 }}>
            {item.text}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
});
const MoneyBack = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="off" disableGutters sx={{ background: "#F1F5F8" }}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: {
            xs: 2,
            md: 5,
          },
          paddingRight: {
            xs: 2,
            md: 5,
          },
          // border: "solid red",
        }}
      >
        <Grid container spacing={3}>
          {gridItem}
        </Grid>
      </Container>
    </Container>
  );
};

export default MoneyBack;
