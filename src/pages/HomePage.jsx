import { Container } from "@mui/material";
import React from "react";
import Hero from "../components/HomeComponents/Hero";
import MoneyBack from "../components/HomeComponents/MoneyBack";
import FeaturedProducts from "../components/HomeComponents/FeaturedProducts";
import MissionVision from "../components/HomeComponents/MissionVision";
import Newsletter from "../components/HomeComponents/Newsletter";
export const HomePage = () => {
  return (
    <>
      <Hero />
      <MoneyBack />
      <FeaturedProducts />
      <MissionVision />
    </>
  );
};
