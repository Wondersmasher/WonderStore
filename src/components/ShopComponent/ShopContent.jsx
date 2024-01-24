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
import { GridViewOutlined, ViewList } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGridOrFlexTrueOrFalse } from "../../utilities/CartSlice";
import Masonry from "react-masonry-css";
const ProductImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "250px",
  objectFit: "cover",
  ":hover": { cursor: "pointer", opacity: 0.8 },
  transition: "ease-in-out 0.5s",
  borderRadius: 3,
}));
const ProductListImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  objectFit: "cover",
  minWidth: "300px",
}));
const ShopContent = () => {
  const dispatch = useDispatch();
  const { gridOrFlex } = useSelector((store) => store.cart);
  const gridItems = projectData.map((item, id) => {
    return (
      <div key={id}>
        <Link to={`/shop/${item.id}`}>
          <ProductImage src={item.image} />
        </Link>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            pt: "0px",
          }}
        >
          <Typography color='black' sx={{ flexGrow: 1, fontWeight: 700 }}>
            {item.title}
          </Typography>
          <Typography color='primary' sx={{ fontWeight: 700 }}>
            ${item.price}
          </Typography>
        </Box>
      </div>
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
          <Typography color='black' sx={{ fontWeight: 700 }} variant='h5'>
            {item.title}
          </Typography>
          <Typography color='primary' sx={{ fontWeight: 700 }}>
            $ {item.price}
          </Typography>
          <Typography color='black'>{item.description}</Typography>
          <Link to={`/shop/${item.id}`}>
            <Button
              disableElevation
              variant='contained'
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
        maxWidth='lg'
        sx={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Typography
          variant='h3'
          color='black'
          sx={{
            textAlign: "center",
            paddingBottom: 1,
            fontWeight: 700,
            "::after": {
              content: '" "',
              width: "80px",
              height: "4px",
              position: "relative",
              left: { lg: "47%", xs: "44%", md: "45%" },
              display: "block",
              background: "#C5A491",
              mb: 1,
              borderRadius: 1,
            },
          }}
        >
          Our Shop
        </Typography>
        <Box sx={{ display: "flex", mb: 3 }}>
          <Box>
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
            orientation='horizontal'
            variant='middle'
            color='#C5A491'
            sx={{ flexGrow: 1, height: 1, marginTop: 2, mb: 5 }}
          />
        </Box>

        <Grid container spacing={3}>
          {!gridOrFlex && listItems}
        </Grid>
        <Masonry
          breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {gridOrFlex && gridItems}
        </Masonry>
      </Container>
    </Box>
  );
};

export default ShopContent;
