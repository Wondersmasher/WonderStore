import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
export const images = [
  {
    id: 1,
    title: "Bag ",
    price: 109.95,
    image: "/image/try.jpg",
  },
  {
    id: 2,
    title: "Bag 2 ",
    price: 22.3,
    image: "/image/try2.jpg",
  },
  {
    id: 3,
    title: "Bag 3",
    price: 55.99,
    image: "/image/try3.jpg",
  },
  {
    id: 4,
    title: "Bag 4",
    price: 15.99,
    image: "/image/try2.jpg",
  },
  {
    id: 1,
    title: "Bag ",
    price: 109.95,
    image: "/image/try3.jpg",
  },
  {
    id: 2,
    title: "Bag 2 ",
    price: 22.3,
    image: "/image/try.jpg",
  },
  {
    id: 3,
    title: "Bag 3",
    price: 55.99,
    image: "/image/try2.jpg",
  },
  {
    id: 4,
    title: "Bag 4",
    price: 15.99,
    image: "/image/try.jpg",
  },
];
const FeaturedProductImage = styled("img")(({ src, theme }) => ({
  //   border: "solid blue",
  //   padding: "5px",
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  background: "#F1f5f8",
  //   borderRadius: theme.spacing(1),
  // height:
}));
const singleFeaturedProduct = images.map((item, id) => {
  return (
    <Grid
      key={id}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FeaturedProductImage src={item.image} />

      <Box sx={{ display: "flex", width: "100%", pt: 1 }}>
        <Typography sx={{ flexGrow: 1 }}>{item.title}</Typography>
        <Typography>${item.price}</Typography>
      </Box>
    </Grid>
  );
});
const FeaturedProducts = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        paddingBottom: 10,
        paddingTop: 10,
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
      <Card
        elevation={0}
        sx={{
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Typography variant="h4">Featured Products</Typography>
        <Divider sx={{ width: "100%" }} />
        <Box
          sx={{
            // border: "solid green",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            py: 2,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              width: "100%",
            }}
          >
            {singleFeaturedProduct}
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};

export default FeaturedProducts;
