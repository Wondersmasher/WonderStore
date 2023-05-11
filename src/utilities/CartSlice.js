import { createSlice } from "@reduxjs/toolkit";
import projectData from "../data/data";
const initialState = {
  projectData,
  cartItems: [],
  cartItemsCount: 0,
  gridOrFlex: true,
  cartTotalPrice: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartCount: (state, { payload }) => {
      state.cartItemsCount += payload;
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
    },
    setGridOrFlexTrueOrFalse: (state, { payload }) => {
      state.gridOrFlex = payload;
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
    },
    // toggleFavoriteItem: (state, { payload }) => {
    //   const tempFavourite = state.favouriteItems.find(
    //     (item) => item.id === payload.id
    //   );
    //   if (tempFavourite) {
    //     const newFavouriteItems = state.favouriteItems.filter(
    //       (item) => item.id !== payload.id
    //     );
    //     state.favouriteItems = newFavouriteItems;
    //     state.favouriteItemsCount -= 1;
    //   } else {
    //     const newFavorites = { ...payload };
    //     state.favouriteItems = [...state.favouriteItems, newFavorites];
    //     state.favouriteItemsCount += 1;
    //   }
    // },
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
    },
    clearCartCompletely: (state) => {
      state.cartItems = [];
      state.cartItemsCount = 0;
      state.cartTotalPrice = 0;
    },
    // clearFavouritesCompletely: (state) => {
    //   state.favouriteItems = [];
    // },
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
} = CartSlice.actions;
export default CartSlice.reducer;
