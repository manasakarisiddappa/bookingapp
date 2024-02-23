import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",

  initialState: {
    isFilterModalOpen: false,
    priceRange: [300, 20000],
    noOfBathrooms: "Any",
    noOfBedrooms: "Any",
    noOfBeds: "Any",
    propertyType: "Any",
    traveloRating: 1,
    isCancelable: true,
  },
  reducers: {
    SHOW_FILTER_MODAL: (state) => {
      state.isFilterModalOpen = !state.isFilterModalOpen;
      console.log("inside filter modal", state.isFilterModalOpen);
    },

    MINIMUM_PRICE: (state, { payload }) => {
      state.priceRange = [
        Math.min(
          payload.newValue[0],
          payload.priceRange[1] - payload.minDifference
        ),
        payload.priceRange[1],
      ];
    },

    MAXIMUM_PRICE: (state, { payload }) => {
      state.priceRange = [
        payload.priceRange[0],
        Math.max(
          payload.newValue[1],
          payload.priceRange[0] + payload.minDifference
        ),
      ];
    },

    BEDROOMS: (state, { payload }) => {
      state.noOfBedrooms =
        payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload);
    },
    BATHROOMS: (state, { payload }) => {
      state.noOfBathrooms =
        payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload);
    },

    BEDS: (state, { payload }) => {
      state.noOfBeds =
        payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload);
    },

    PROPERTY_TYPE: (state, action) => {
      state.propertyType = action.payload;
    },
    RATING: (state, { payload }) => {
      state.traveloRating = Number(payload);
    },
    CANCELABLE: (state, action) => {
      state.isCancelable = action.payload;
    },
    CLEAR_ALL: (state) => {
      state.priceRange = [300, 20000];
      state.noOfBathrooms = "Any";
      state.noOfBedrooms = "Any";
      state.noOfBeds = "Any";
      state.propertyType = "Any";
      state.traveloRating = 1;
      state.isCancelable = true;
    },
  },
});

export const {
  SHOW_FILTER_MODAL,
  MINIMUM_PRICE,
  MAXIMUM_PRICE,
  BEDROOMS,
  BATHROOMS,
  BEDS,
  PROPERTY_TYPE,
  RATING,
  CANCELABLE,
  CLEAR_ALL,
} = filterSlice.actions;
export default filterSlice.reducer;
