import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./slices/exampleSlice";
import receptionSlice from "./slices/receptionSlice";

export const store = configureStore({
    reducer:{
        counter: exampleSlice,
        reception: receptionSlice
    }
});