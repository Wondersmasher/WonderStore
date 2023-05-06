import { createSlice } from "@reduxjs/toolkit";
import projectData from "../data/data";
const initialState = {
  // projectData,
  cartItems: [],
  cartItemsCount: 0,
  favouritItems: [],
  favouriteItemsCount: 0,
  gridOrFlex: false,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    try: (state) => console.log(state),
    addCartCount: (state, { payload }) => {
      state.cartItemsCount += payload;
    },
    addFavoutiteCount: (state) => {
      state.favouriteItemsCount + 1;
    },
    setGridOrFlexTrueOrFalse: (state, { payload }) => {
      state.gridOrFlex = payload;
    },
  },
});
export const {
  addCartCount,
  setGridOrFlexFalse,
  setGridOrFlexTrueOrFalse,
  addFavoutiteCount,
} = CartSlice.actions;
export default CartSlice.reducer;
