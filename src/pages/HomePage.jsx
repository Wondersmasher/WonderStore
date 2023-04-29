import { Container } from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import MoneyBack from "../components/MoneyBack";
import FeaturedProducts from "../components/FeaturedProducts";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <MoneyBack />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
