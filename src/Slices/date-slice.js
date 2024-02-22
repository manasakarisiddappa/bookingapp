import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",

  initialState: {
    checkInDate: null,
    checkOutDate: null,
    isSearchModalOpen: false,
    destination: "",
    guests: 0,
    isSearchResultOpen: true,
  },
  reducers: {
    TOGGLE_SEARCH_MODAL: (state) => {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },
    CHECK_IN: (state, action) => {
      state.checkInDate = action.payload;
    },
    CHECK_OUT: (state, action) => {
      state.checkOutDate = action.payload;
    },
    DESTINATION: (state, action) => {
      state.destination = action.payload;
    },
    GUESTS: (state, action) => {
      state.guests = action.payload;
    },
    DATE_FOCUS: (state) => {
      state.isSearchResultOpen = false;
    },
    SHOW_SEARCH_RESULT: (state) => {
      state.isSearchResultOpen = true;
    },
    CLEAR_INPUTS: (state) => {
      state.checkInDate = null;
      state.checkOutDate = null;
      state.guests = 0;
    },
  },
});

export const {
  CHECK_IN,
  CHECK_OUT,
  DESTINATION,
  GUESTS,
  DATE_FOCUS,
  SHOW_SEARCH_RESULT,
  TOGGLE_SEARCH_MODAL,
  CLEAR_INPUTS,
} = dateSlice.actions;
export default dateSlice.reducer;
