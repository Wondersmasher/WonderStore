import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  cartItemsCount: 0,
  gridOrFlex: true,
  cartTotalPrice: 0,
  user: false,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartCount: (state, { payload }) => {
      state.cartItemsCount += payload;
      localStorage.setItem("state", JSON.stringify(state));
    },
    initializeStateAfterRefresh: (state, { payload }) => {
      state.cartItems = payload.cartItems;
      state.cartItemsCount = payload.cartItemsCount;
      state.gridOrFlex = payload.gridOrFlex;
      state.cartTotalPrice = payload.cartTotalPrice;
    },
    increaseItemInCart: (state, { payload }) => {
      state.cartItems.map((item) => {
        if (item.id === payload.id) {
          item.amount += 1;
          state.cartItemsCount += 1;
          item.subTotal = item.amount * item.price;
        }
        const newTotal = state.cartItems.map((item) => item.subTotal);
        state.cartTotalPrice = newTotal.reduce((a, b) => a + b);
      });
      localStorage.setItem("state", JSON.stringify(state));
    },
    decreaseItemInCart: (state, { payload }) => {
      state.cartItems.map((item) => {
        if (item.id === payload.id) {
          if (item.amount > 1) {
            item.amount -= 1;
            item.subTotal = item.amount * item.price;
            state.cartItemsCount -= 1;
          } else {
            const removedTheItem = state.cartItems.filter(
              (item) => item.id !== payload.id
            );
            state.cartItems = removedTheItem;
            state.cartItemsCount -= 1;
          }
          if (state.cartItems.length > 0) {
            const newTotal = state.cartItems.map((item) => item.subTotal);
            state.cartTotalPrice = newTotal.reduce((a, b) => a + b);
          } else {
            state.cartTotalPrice = 0;
          }
        }
      });
      localStorage.setItem("state", JSON.stringify(state));
    },
    setGridOrFlexTrueOrFalse: (state, { payload }) => {
      state.gridOrFlex = payload;
      localStorage.setItem("state", JSON.stringify(state));
    },
    addToCartItem: (state, { payload }) => {
      const tempItem = state.cartItems.find((item) => item.id === payload.id);
      if (tempItem) {
        state.cartItems.map((item) => {
          if (item.id === payload.id) {
            item.amount += payload.amount;
            item.subTotal = item.amount * item.price;
          }
        });
      } else {
        const newItem = {
          ...payload,
          subTotal: payload.amount * payload.price,
        };
        state.cartItems = [...state.cartItems, newItem];
      }
      const newTotal = state.cartItems.map((item) => item.subTotal);
      state.cartTotalPrice = newTotal.reduce((a, b) => a + b);
      localStorage.setItem("state", JSON.stringify(state));
    },
    removeFromCartItem: (state, { payload }) => {
      const removedTheItem = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.cartItems = removedTheItem;
      state.cartItemsCount -= payload.amount;
      if (state.cartItems.length > 0) {
        const newTotal = state.cartItems.map((item) => item.subTotal);
        state.cartTotalPrice = newTotal.reduce((a, b) => a + b);
      } else {
        state.cartTotalPrice = 0;
      }
      localStorage.setItem("state", JSON.stringify(state));
    },
    clearCartCompletely: (state) => {
      state.cartItems = [];
      state.cartItemsCount = 0;
      state.cartTotalPrice = 0;
      localStorage.removeItem("state");
    },
    // Save user from auth0
    addUser: (state) => {
      state.user = true;
    },
    // removes user from auth0
    logoutUser: (state) => {
      state.user = false;
    },
  },
});
export const {
  addCartCount,
  setGridOrFlexTrueOrFalse,
  addToCartItem,
  increaseItemInCart,
  decreaseItemInCart,
  removeFromCartItem,
  clearCartCompletely,
  addUser,
  logoutUser,
  initializeStateAfterRefresh,
} = CartSlice.actions;
export default CartSlice.reducer;
