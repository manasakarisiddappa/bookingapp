import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlist: [],
  },

  reducers: {
    ADD_TO_WISHLIST: (state, { payload }) => {
      state.wishlist = [...state.wishlist, payload];
    },
    REMOVE_FROM_WISHLIST: (state, { payload }) => {
      state.wishlist = state.wishlist.filter((hotel) => hotel._id !== payload);
    },
  },
});

export const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = wishlistSlice.actions;
export default wishlistSlice.reducer;
