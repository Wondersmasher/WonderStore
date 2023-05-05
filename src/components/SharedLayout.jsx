import React from "react";
import NavBar from "./NavBar";
import { Box, Container, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const AppBarBox = styled(Box)(({ theme }) => theme.mixins.toolbar);

const SharedLayout = () => {
  return (
    <Container maxWidth="off" disableGutters sx={{ background: "#ffffff" }}>
      <NavBar />
      {/* <AppBarBox></AppBarBox> */}
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
