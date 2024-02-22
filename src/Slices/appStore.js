import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dateReducer from "./date-slice";
import categoryReducer from "./category-slice";
import filterReducer from "./filter-slice";
import authReducer from "./auth-slice";
import whishlistReducer from "./wishlist-slice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    category: categoryReducer,
    date: dateReducer,
    filter: filterReducer,
    auth: authReducer,
    wishlist: whishlistReducer,
  },
});

export default store;
