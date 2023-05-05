import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import ShopSideBar from "./ShopSideBar";
import projectData from "../../data/data";
import {
  FavoriteBorderOutlined,
  GridViewOutlined,
  ViewAgenda,
  ViewList,
  ViewListOutlined,
} from "@mui/icons-material";
const ProductImage = styled("img")(({ src }) => ({
  //   border: "solid blue",
  //   padding: "5px",
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  ":hover": { cursor: "pointer", opacity: 0.8 },
  transition: "ease-in-out 0.5s",
  // background: "#F1f5f8",
  //   borderRadius: theme.spacing(1),
  // height:
}));
const ProductListImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
}));
const ShopContent = () => {
  const [gridLayout, setGridLayout] = useState(true);
  const images = projectData.map((item, id) => {
    return (
      <Grid
        item
        key={id}
        xs={12}
        sm={6}
        lg={4}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductImage src={item.image} />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 700 }}>
            {item.title}
          </Typography>
          <Typography>${item.price}</Typography>
          <FavoriteBorderOutlined />
        </Box>
      </Grid>
    );
  });
  const listItems = projectData.map((item, id) => {
    return (
      <Grid
        item
        key={id}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 2,
        }}
      >
        <ProductListImage
          src={item.image}
          sx={{
            height: { xs: "70%", sm: "205px" },
            width: { xs: "100%", sm: "300px" },
            borderRadius: 1.5,
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ fontWeight: 700 }} variant="h5">
            {item.title}
          </Typography>
          <Typography>{item.price}</Typography>
          <Typography>{item.description}</Typography>
          <Button
            disableElevation
            variant="contained"
            sx={{
              fontSize: 9,
              width: "50px",
              padding: "2px 2px",
              color: "white",
            }}
          >
            Details
          </Button>
        </Box>
      </Grid>
    );
  });
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          // border: "solid red",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Box sx={{ display: "flex", mb: 3 }}>
          <Box sx={{}}>
            <IconButton
              sx={{
                borderRadius: 2,
                backgroundColor: gridLayout ? "black" : "white",
                ":hover": { backgroundColor: gridLayout ? "black" : "white" },
              }}
              onClick={() => setGridLayout(true)}
            >
              <GridViewOutlined
                sx={{ color: gridLayout ? "white" : "black" }}
              />
            </IconButton>
            <IconButton
              sx={{
                borderRadius: 2,
                backgroundColor: !gridLayout ? "black" : "white",
                ":hover": { backgroundColor: !gridLayout ? "black" : "white" },
              }}
              onClick={() => setGridLayout(false)}
            >
              <ViewList sx={{ color: !gridLayout ? "white" : "black" }} />
            </IconButton>
          </Box>
          <Divider
            orientation="horizontal"
            variant="middle"
            color="secondary"
            sx={{ flexGrow: 1, height: 1, marginTop: 2 }}
          />
          <Typography>sort me</Typography>
        </Box>
        {!gridLayout && (
          <Grid container spacing={3}>
            {listItems}
          </Grid>
        )}
        {gridLayout && (
          <Grid container spacing={3}>
            {images}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ShopContent;
