import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./slices/exampleSlice";
import receptionSlice from "./slices/receptionSlice";
import colorsSlice from "./slices/colorsSlice";

export const store = configureStore({
    reducer:{
        counter: exampleSlice,
        reception: receptionSlice,
        colors: colorsSlice
    }
});