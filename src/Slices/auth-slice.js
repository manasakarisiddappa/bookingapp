import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    isAuthModalOpen: false,
    username: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    accessToken: "",
    name: "",
    selectedTab: "login",
  },
  reducers: {
    SHOW_AUTH_MODAL: (state) => {
      state.isAuthModalOpen = !state.isAuthModalOpen;
    },
    SET_TO_LOGIN: (state) => {
      state.selectedTab = "login";
    },
    SET_TO_SIGNUP: (state) => {
      state.selectedTab = "signup";
    },
    NUMBER: (state, { payload }) => {
      state.number = payload;
    },
    EMAIL: (state, { payload }) => {
      state.email = payload;
    },
    NAME: (state, { payload }) => {
      state.username = payload;
    },
    PASSWORD: (state, { payload }) => {
      state.password = payload;
    },
    CONFIRM_PASSWORD: (state, { payload }) => {
      state.confirmPassword = payload;
    },

    CLEAR_USER_DATA: (state) => {
      state.isAuthModalOpen = false;
      state.username = "";
      state.number = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
    },
  },
});

export const {
  SHOW_AUTH_MODAL,
  SET_TO_LOGIN,
  SET_TO_SIGNUP,
  NUMBER,
  EMAIL,
  NAME,
  PASSWORD,
  CONFIRM_PASSWORD,
  CLEAR_USER_DATA,
} = authSlice.actions;
export default authSlice.reducer;
