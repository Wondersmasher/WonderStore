import React from "react";
import CartBanner from "../components/CartComponents/CartBanner";
import CartContent from "../components/CartComponents/CartContent";
import CartCheckOut from "../components/CartComponents/CartCheckOut";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <div>
      <CartBanner />
      <CartContent />
      {cartItems.length > 0 && <CartCheckOut />}
    </div>
  );
};

export default CartPage;
