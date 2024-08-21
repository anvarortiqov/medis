import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    services: [],
    totalPrice: 0,
    checkStatus: true,
    paidAmount: 0
}

export const receptionSlice = createSlice({
    name: 'reception',
    initialState,
    reducers: {
        addService(state, action) {
            state.services = [...state.services, action.payload]

            if (state.services.length > 0) {
                state.totalPrice += parseFloat(action.payload.amount)
            }
        },

        amointService(state, action) {
            state.paidAmount = action.payload;

            if (state.paidAmount > 0) {
                state.checkStatus = false
            }
        },

        removeServiceItem(state, action){
            state.services = action.payload
        }
    },
})

export const { addService, amointService, removeServiceItem } = receptionSlice.actions

export default receptionSlice.reducer