import { createSlice } from "@reduxjs/toolkit";

const HotelSlice = createSlice({
  name: "hotel",

  initialState: {
    hotel: {},
  },
  reducers: {
    setHotel: (state, action) => {
      state.hotel = action.payload;
    },
  },
});

export const { setHotel } = HotelSlice.actions;
export default HotelSlice.reducer;
