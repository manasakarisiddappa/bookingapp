import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",

  initialState: {
    hotelCategory: "National Parks",
  },
  reducers: {
    setHotelCategory: (state, action) => {
      state.hotelCategory = action.payload;
    },
  },
});

export const { setHotelCategory } = categorySlice.actions;
export default categorySlice.reducer;
