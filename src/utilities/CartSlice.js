import { createSlice } from "@reduxjs/toolkit";
import projectData from "../data/data";
const unfilteredCategories = [];
const unfilterdCompanies = [];
projectData.forEach((item) => {
  unfilteredCategories.push(item.category);
  unfilterdCompanies.push(item.company);
});
console.log(unfilterdCompanies);
const initialState = {
  cartItems: [],
  cartItemsCount: 0,
  favouritems: [],
  favouriteItemsCount: 0,
  unfilteredCategories,
  unfilterdCompanies,
  freeShipping: false,
  gridOrFlex: false,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    try: (state) => console.log(state),
    addCartCount: (state) => {
      state.cartItemsCount += 1;
    },
    addFavoutiteCount: (state) => state.favouriteItemsCount + 1,
  },
});
export const { addCartCount, addFavoutiteCount } = CartSlice.actions;
export default CartSlice.reducer;
