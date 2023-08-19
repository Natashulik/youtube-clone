import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import registrationSlice from "./registrationSlice";
import inputSlice from "./inputSlice";
import iconSlice from "./iconSlice";
import favoriteSlice from "./favoriteSlice";



export const store = configureStore({
  reducer: {
    login: loginSlice,
    registration: registrationSlice,
    input: inputSlice,
    icon: iconSlice,
    favorite: favoriteSlice
    }
})