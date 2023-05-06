import { DeleteRounded } from "@mui/icons-material";
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
import { red } from "@mui/material/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemInCart,
  increaseItemInCart,
  removeFromCartItem,
} from "../../utilities/CartSlice";
import { useNavigate } from "react-router-dom";
const CartContentImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "120px",
  height: "80px",
  borderRadius: 5,
}));
const CartContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((store) => store.cart);
  const cartItemsList = cartItems.map((item) => {
    return (
      <Grid key={item.id} container spacing={0} sx={{ my: 5 }}>
        <Grid
          item
          xs={6}
          md={3}
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
        >
          <CartContentImage src={item.image} />
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
              {item.title}
            </Typography>
            <Typography
              color="primary"
              sx={{
                fontWeight: 700,
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              $ {item.price}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography color="primary" sx={{ fontWeight: 700 }}>
            $ {item.price}
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: { md: 30, xs: 20 },
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => dispatch(decreaseItemInCart({ id: item.id }))}
          >
            -
          </Typography>
          <Typography
            sx={{
              fontSize: { md: 30, xs: 20 },
              fontWeight: 700,
            }}
          >
            {item.amount}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: 30, xs: 20 },
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => dispatch(increaseItemInCart({ id: item.id }))}
          >
            +
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>$ {item.subTotal}</Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              //   fontSize: { md: 30, xs: 20 },
              borderRadius: 1,
              height: { md: 30, xs: 25 },
              width: { md: 30, xs: 25 },
              backgroundColor: red[700],
            }}
            onClick={() => {
              dispatch(
                removeFromCartItem({ id: item.id, amount: item.amount })
              );
            }}
          >
            <DeleteRounded sx={{ color: "white", fontSize: 20 }} />
          </IconButton>
        </Grid>
      </Grid>
    );
  });
  if (cartItems.length < 1) {
    return (
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            justifyContent: "center",
            py: 30,
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: { xs: 30, md: 40 } }}
            variant="h2"
          >
            Your Cart is Empty!!!
          </Typography>
          <Button
            sx={{ margin: "0 auto", color: "white" }}
            variant="contained"
            color="primary"
            onClick={() => navigate("/shop")}
          >
            Fill it
          </Button>
        </Container>
      </Box>
    );
  }
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          sx={{
            my: 3,

            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Grid item xs={3}>
            <Typography textAlign="center">Item</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography textAlign="center">Price</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography textAlign="center">Quantity</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography textAlign="center">Subtotal</Typography>
          </Grid>
        </Grid>
        <Divider
          orientation="horizontal"
          variant="middle"
          color="#C5A491"
          sx={{
            my: 3,
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        />
        {cartItemsList}
        <Divider
          orientation="horizontal"
          variant="middle"
          color="#C5A491"
          sx={{ my: 3 }}
        />
      </Container>
    </Box>
  );
};

export default CartContent;
