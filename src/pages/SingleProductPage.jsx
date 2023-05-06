import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/data";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import SingleProductBanner from "../components/ShopComponent/SingleProductBanner";
import { FavoriteRounded, ShoppingCartOutlined } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { addCartCount } from "../utilities/CartSlice";
import { useDispatch } from "react-redux";

const SingleProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = projectData.find((item) => item.id === productId);
  const SingleProductImage = styled("img")(({ src, theme }) => ({
    src: src,
    borderRadius: 5,
  }));
  const [filled, setFilled] = useState(false);
  const [singleItemCount, setSingleItemCount] = useState(0);
  return (
    <Box>
      <SingleProductBanner productName={product.title} />
      <Box
        sx={{
          paddingTop: { lg: 15, xs: 10 },
          paddingBottom: { lg: 15, xs: 10 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: {
              lg: 15,
              xs: 2,
            },
          }}
        >
          <SingleProductImage
            src={product.image}
            sx={{
              height: { xs: "100%" },
              width: { xs: "100%", md: "50%" },
              borderRadius: 1.5,
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Typography variant="h3">{product.title}</Typography>
            <Typography sx={{ textAlign: "justify" }}>
              {product.description}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <ButtonGroup>
                <Button
                  sx={{ fontSize: 20, height: 40, width: 40 }}
                  onClick={() =>
                    setSingleItemCount((prev) => (prev > 0 ? prev - 1 : 0))
                  }
                >
                  -
                </Button>
                <Button disabled>{singleItemCount}</Button>
                <Button
                  sx={{ fontSize: 20, height: 40, width: 40 }}
                  onClick={() => setSingleItemCount((prev) => (prev += 1))}
                >
                  +
                </Button>
              </ButtonGroup>
              <Button
                variant="outlined"
                endIcon={<ShoppingCartOutlined />}
                onClick={() => {
                  dispatch(addCartCount(singleItemCount));
                  setSingleItemCount(0);
                }}
              >
                Add to Cart
              </Button>
              <IconButton onClick={() => setFilled(!filled)}>
                <FavoriteRounded sx={{ color: filled ? red[500] : "" }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SingleProductPage;
