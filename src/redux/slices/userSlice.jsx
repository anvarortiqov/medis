import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    details: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserData(state, action) {
            state.details = action.payload
        }
    }
});

export const { getUserData } = userSlice.actions;

export default userSlice.reducer;