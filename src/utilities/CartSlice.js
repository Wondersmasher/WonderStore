import { createSlice } from "@reduxjs/toolkit";
import projectData from "../data/data";
const initialState = {
  // projectData,
  cartItems: [],
  cartItemsCount: 0,
  favouriteItems: [],
  favouriteItemsCount: 0,
  gridOrFlex: true,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartCount: (state, { payload }) => {
      state.cartItemsCount += payload;
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
          }
        });
      } else {
        const newItem = { ...payload };
        state.cartItems = [...state.cartItems, newItem];
      }
    },
    toggleFavoriteItem: (state, { payload }) => {
      const tempFavourite = state.favouriteItems.find(
        (item) => item.id === payload.id
      );
      if (tempFavourite) {
        const newFavouriteItems = state.favouriteItems.filter(
          (item) => item.id !== payload.id
        );
        state.favouriteItems = newFavouriteItems;
        state.favouriteItemsCount -= 1;
      } else {
        const newFavorites = { ...payload };
        state.favouriteItems = [...state.favouriteItems, newFavorites];
        state.favouriteItemsCount += 1;
      }
    },
    removeFromCartItem: (state, { payload }) => {
      const removedTheItem = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.cartItems = removedTheItem;
    },
  },
});
export const {
  addCartCount,
  setGridOrFlexTrueOrFalse,
  addToCartItem,
  toggleFavoriteItem,
} = CartSlice.actions;
export default CartSlice.reducer;
