import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./slices/exampleSlice";
import receptionSlice from "./slices/receptionSlice";
import colorsSlice from "./slices/colorsSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer:{
        counter: exampleSlice,
        reception: receptionSlice,
        colors: colorsSlice,
        user: userSlice
    }
});