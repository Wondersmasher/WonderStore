import { CopyrightOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        pt: 2,
        pb: 2,
        marginTop: "auto",
      }}
    >
      <Typography sx={{ fontSize: 15 }}>
        <CopyrightOutlined sx={{ fontSize: 13, pr: 1 }} />
        2023 WonderStore
      </Typography>
      <Typography sx={{ fontSize: 15 }}>All rights reserved</Typography>
    </Box>
  );
};

export default Footer;
