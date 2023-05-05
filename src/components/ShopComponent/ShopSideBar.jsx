import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  List,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const ShopSideBar = () => {
  const { unfilteredCategories, unfilterdCompanies } = useSelector(
    (store) => store.cart
  );
  const [...categories] = new Set(unfilteredCategories);
  const [...companies] = new Set(unfilterdCompanies);
  //   console.log(unfilterdCompanies);
  const categoriesList = categories.map((item, id) => {
    return (
      <ListItem key={id} disableGutters>
        <ListItemText primary={item} />
      </ListItem>
    );
  });
  const companiesList = companies.map((item, id) => {
    return (
      <ListItem key={id} disableGutters>
        <ListItemText primary={item} />
      </ListItem>
    );
  });
  return (
    <Box>
      <Grid
        container
        spacing={0}
        // sx={{
        //   width: { xs: "100%", md: 300 },
        //   border: "solid green",
        //   display: "flex",
        //   flexDirection: {
        //     xs: "row",
        //     md: "column",
        //   },
        //   justifyContent: "space-between",
        // }}
      >
        <Grid item xs={4} md={12}>
          <Typography>Categories</Typography>
          <List>{categoriesList}</List>
        </Grid>
        <Grid item xs={4} md={12}>
          <Typography>Companies</Typography>
          <List>{companiesList}</List>
        </Grid>
        <Grid item xs={4} md={12}>
          <Typography>Price</Typography>
          <Typography>FreeShipping</Typography>
        </Grid>
      </Grid>
      <Button variant="contained">Clear Filters</Button>
    </Box>
  );
};

export default ShopSideBar;
