import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    services: [],
    totalPrice: 0,
    checkStatus: true,
    paidAmount: 0,
    paymentMethod: null
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
        paidAmount(state, action) {
            state.paidAmount = action.payload;
        },
        removeServiceItem(state, action) {
            state.services = action.payload
        },
        saveServices(state) {
            state.checkStatus = false
        },
        paymentMethod(state, action){
            state.paymentMethod = action.payload
        }
    },
})

export const { addService, paidAmount, removeServiceItem, saveServices, paymentMethod } = receptionSlice.actions

export default receptionSlice.reducer