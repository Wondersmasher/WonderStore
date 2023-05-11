import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../../data/data";
import Masonry from "react-masonry-css";
import { featuredProductsData } from "../../data/data";
const FeaturedProductImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  background: "#F1f5f8",
}));
const FeaturedProducts = () => {
  const navigate = useNavigate();
  const singleFeaturedProduct = featuredProductsData.map((item) => {
    return (
      <div key={item.id}>
        <FeaturedProductImage
          src={item.image}
          onClick={() => navigate(`/shop/${item.id}`)}
          sx={{ cursor: "pointer" }}
        />
      </div>
    );
  });
  return (
    <Container
      maxWidth="lg"
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
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          "::after": {
            content: '" "',
            width: "80px",
            height: "4px",
            position: "relative",
            left: "45%",
            top: "50%",
            display: "block",
            background: "#C5A491",
            mb: 3,
            borderRadius: 1,
            // transition: "3s width from left to right",
          },
        }}
      >
        Featured Products
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          py: 2,
        }}
      >
        <Masonry
          breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {singleFeaturedProduct}
        </Masonry>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        disableElevation
        onClick={() => navigate("/shop")}
      >
        All Products
      </Button>
    </Container>
  );
};

export default FeaturedProducts;
