import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CheckOut from "./CheckOut";
import { useAuth0 } from "@auth0/auth0-react";

const CartCheckOut = () => {
  const { loginWithRedirect, user } = useAuth0();
  const { cartTotalPrice } = useSelector((store) => store.cart);
  const shippingFee = cartTotalPrice * 0.02;
  const orderTotal = shippingFee + cartTotalPrice;
  // cart modal

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ref = useRef();

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: { md: "flex-end", xs: "center" },
          pb: 10,
          pt: 5,
        }}
      >
        <Card
          elevation={2}
          sx={{
            width: { md: 400, xs: 350 },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: { md: 5, xs: 3 },
              paddingRight: { md: 5, xs: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Sub total:</Typography>
              <Typography sx={{ fontWeight: 700 }}>
                $ {cartTotalPrice.toFixed(2)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Shipping Fee:</Typography>
              <Typography sx={{ fontWeight: 700 }}>
                $ {shippingFee.toFixed(2)}
              </Typography>
            </Box>
            <Divider variant="middle" />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Order Total:
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                $ {orderTotal.toFixed(2)}
              </Typography>
            </Box>
          </CardContent>
          <Box
            sx={{
              paddingBottom: 3,
              paddingLeft: { md: 5, xs: 3 },
              paddingRight: { md: 5, xs: 3 },
            }}
          >
            <Button
              variant="contained"
              sx={{ width: "100%", color: "white" }}
              onClick={() => (user ? handleOpen : loginWithRedirect())}
            >
              {user ? "Check Out" : "Login to Check Out"}
            </Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            ref={ref}
          >
            <CheckOut
              onClose={handleClose}
              orderTotal={orderTotal}
              setOpen={setOpen}
            />
          </Modal>
        </Card>
      </Container>
    </Box>
  );
};
export default CartCheckOut;
