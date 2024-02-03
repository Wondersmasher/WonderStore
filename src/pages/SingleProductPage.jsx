import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/data";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  styled,
} from "@mui/material";
import SingleProductBanner from "../components/ShopComponent/SingleProductBanner";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { addCartCount, addToCartItem } from "../utilities/CartSlice";
import { useDispatch } from "react-redux";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [singleItemCount, setSingleItemCount] = useState(0);
  const product = projectData.find((item) => item.id === productId);
  const SingleProductImage = styled("img")(({ src }) => ({
    src: src,
    borderRadius: 5,
  }));
  return (
    <>
      <SingleProductBanner productName={product.title} />
      <Box
        sx={{
          paddingTop: { lg: 15, xs: 10 },
          paddingBottom: { lg: 15, xs: 10 },
        }}
      >
        <Container
          maxWidth='lg'
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
            <Typography color='black' variant='h4' sx={{ fontWeight: 400 }}>
              {product.title}
            </Typography>
            <Typography color='black' sx={{ textAlign: "justify" }}>
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
                variant='outlined'
                endIcon={<ShoppingCartOutlined />}
                onClick={() => {
                  dispatch(
                    addToCartItem({
                      title: product.title,
                      id: product.id,
                      image: product.image,
                      amount: singleItemCount,
                      description: product.description,
                      favorite: product.favorite,
                      price: product.price,
                    })
                  );
                  dispatch(addCartCount(singleItemCount));
                  setSingleItemCount(0);
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
