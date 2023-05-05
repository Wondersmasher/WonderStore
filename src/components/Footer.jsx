import { CopyrightOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Newsletter from "./HomeComponents/Newsletter";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        pt: 2,
        pb: 2,
        // mt: { md: 15, xs: 10 },
      }}
    >
      <Typography sx={{ fontSize: 15 }}>
        <CopyrightOutlined sx={{ fontSize: 13, pr: 1 }} />
        2023 WonderStore
      </Typography>
      <Typography sx={{ fontSize: 15 }}>All rights reserved</Typography>
    </Box>
    // </Box>
  );
};

export default Footer;
