import React from "react";
import CartBanner from "../components/CartComponents/CartBanner";
import CartContent from "../components/CartComponents/CartContent";
import CartCheckOut from "../components/CartComponents/CartCheckOut";
import { useSelector } from "react-redux";

export const CartPage = () => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <>
      <CartBanner />
      <CartContent />
      {cartItems.length > 0 && <CartCheckOut />}
    </>
  );
};
