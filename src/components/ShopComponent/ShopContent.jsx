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
import React from "react";
import projectData from "../../data/data";
import {
  FavoriteRounded,
  GridViewOutlined,
  ViewList,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setGridOrFlexTrueOrFalse,
  toggleFavoriteItem,
} from "../../utilities/CartSlice";
import { red } from "@mui/material/colors";
const ProductImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  ":hover": { cursor: "pointer", opacity: 0.8 },
  transition: "ease-in-out 0.5s",
}));
const ProductListImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
}));
const ShopContent = () => {
  const dispatch = useDispatch();
  const filled = false;
  const { gridOrFlex, favouriteItems } = useSelector((store) => store.cart);
  console.log(gridOrFlex);
  const gridItems = projectData.map((item, id) => {
    const shouldFill = favouriteItems.find((favItem) => favItem.id === item.id);
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
        <Link to={`/shop/${item.id}`}>
          <ProductImage src={item.image} />
        </Link>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 700 }}>
            {item.title}
          </Typography>
          <Typography>${item.price}</Typography>
          <IconButton
            onClick={() =>
              dispatch(toggleFavoriteItem({ id: item.id, isFavourite: true }))
            }
          >
            <FavoriteRounded
              sx={{ color: shouldFill?.isFavourite ? red[500] : "" }}
            />
          </IconButton>
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
          <Typography color="primary" sx={{ fontWeight: 700 }}>
            {item.price}
          </Typography>
          <Typography>{item.description}</Typography>
          <Link to={`/shop/${item.id}`}>
            <Button
              disableElevation
              variant="contained"
              sx={{
                fontSize: 9,
                width: "50px",
                color: "white",
              }}
              disableRipple
              disableTouchRipple
            >
              Details
            </Button>
          </Link>
        </Box>
      </Grid>
    );
  });
  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", paddingBottom: 1 }}>
          Our Shop
        </Typography>
        <Box sx={{ display: "flex", mb: 3 }}>
          <Box sx={{}}>
            <IconButton
              disableRipple
              disableTouchRipple
              sx={{
                borderRadius: 2,
                backgroundColor: gridOrFlex ? "#C5A491" : "white",
                ":hover": { backgroundColor: gridOrFlex ? "#C5A491" : "white" },
              }}
              onClick={() => dispatch(setGridOrFlexTrueOrFalse(true))}
            >
              <GridViewOutlined
                sx={{ color: gridOrFlex ? "white" : "#C5A491" }}
              />
            </IconButton>
            <IconButton
              disableRipple
              disableTouchRipple
              sx={{
                borderRadius: 2,
                backgroundColor: !gridOrFlex ? "#C5A491" : "white",
                ":hover": {
                  backgroundColor: !gridOrFlex ? "#C5A491" : "white",
                },
              }}
              onClick={() => dispatch(setGridOrFlexTrueOrFalse(false))}
            >
              <ViewList sx={{ color: !gridOrFlex ? "white" : "#C5A491" }} />
            </IconButton>
          </Box>
          <Divider
            orientation="horizontal"
            variant="middle"
            color="#C5A491"
            sx={{ flexGrow: 1, height: 1, marginTop: 2 }}
          />
        </Box>

        <Grid container spacing={3}>
          {!gridOrFlex && listItems}
          {gridOrFlex && gridItems}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShopContent;
