import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Grid,
  Icon,
  CircularProgress,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { clearCartCompletely } from "../../utilities/CartSlice";

const CheckOut = ({ onClose, orderTotal, setOpen }) => {
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      if (
        cardNumber.length > 10 &&
        name.length >= 3 &&
        expiryDate.length >= 3 &&
        cvv.length === 3
      ) {
        setCardNumber("");
        setCvv("");
        setExpiryDate("");
        setName("");
      }
      dispatch(clearCartCompletely());
      setIsSubmitting(false);
      setOpen(false);
    }, 5000);
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 10,
          pt: 5,
        }}
      >
        <Card
          elevation={2}
          sx={{
            width: { md: 600, xs: 550 },
            pb: 5,
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
            <Icon
              onClick={onClose}
              color='primary'
              sx={{
                display: "flex",
                justifyContent: "end",
                alignSelf: "end",
                cursor: "pointer",
                // alignItems: "flex-end",
              }}
            >
              <Close />
            </Icon>
            <Typography
              align='center'
              color='primary'
              sx={{ fontSize: 36, fontWeight: 700, pb: 5 }}
              id='modal-modal-title'
            >
              Payment GateWay
            </Typography>
            <form>
              <Grid container spacing={2} id='modal-modal-description'>
                <Grid item xs={12}>
                  <TextField
                    type='number'
                    name='cardNumber'
                    value={cardNumber}
                    sx={{ width: "100%" }}
                    variant='outlined'
                    label='Card Number'
                    color='primary'
                    placeholder='1234 1234 1234 1234'
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='name'
                    type='text'
                    value={name}
                    sx={{ width: "100%" }}
                    variant='outlined'
                    label='Name on Card'
                    color='primary'
                    placeholder='John Doe'
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='expiryDate'
                    type='date'
                    value={expiryDate}
                    sx={{ width: "100%" }}
                    variant='outlined'
                    label='Expiry Date'
                    color='primary'
                    placeholder='MM/YY'
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type='number'
                    name='cvv'
                    value={cvv}
                    sx={{ width: "100%" }}
                    variant='outlined'
                    label='Cvv'
                    placeholder='123'
                    color='primary'
                    onChange={(e) =>
                      setCvv(cvv.length < 3 ? e.target.value : "")
                    }
                  />
                </Grid>
              </Grid>
            </form>
          </CardContent>
          <Box
            sx={{
              paddingBottom: 3,
              paddingLeft: { md: 5, xs: 3 },
              paddingRight: { md: 5, xs: 3 },
            }}
          >
            <Button
              variant='contained'
              sx={{
                width: "100%",
                color: "white",
                display: "flex",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={onSubmit}
              disabled={isSubmitting ? true : false}
            >
              {!isSubmitting && `Proceed to pay ${orderTotal}`}
              {isSubmitting && <CircularProgress sx={{ color: "white" }} />}
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default CheckOut;
