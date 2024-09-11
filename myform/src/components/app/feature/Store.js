import { configureStore } from "@reduxjs/toolkit";
import information from "./InformationSlice";

export const store = configureStore({
  reducer: {
    information,
  },
});
