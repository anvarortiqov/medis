import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bg: "#fff",
    color: "#000"
}

export const colorsSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {
        getColor(state, action) {
            switch (action.payload?.toLowerCase()) {
                case "active": {
                    state.bg = "#24C18F"
                    state.color = "#fff"
                    break
                }
                case "inactive": {
                    state.bg = "#D5A300"
                    state.color = "#fff"
                    break
                }
                case "process": {
                    state.bg = "#FF8933"
                    state.color = "#fff"
                    break
                }
                case "deleted": {
                    state.bg = "#FF333F"
                    state.color = "#fff"
                    break
                }
                case "pending": {
                    state.bg = "#AD6005"
                    state.color = "#fff"
                    break
                }
                default: {
                    state.bg = "#fff"
                    state.color = "#000"
                    break
                }
            }
        }
    }
})

export const { getColor } = colorsSlice.actions

export default colorsSlice.reducer