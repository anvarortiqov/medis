import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  total_amount: 0,
  checkStatus: true,
  paid_amount: 0,
  payment_method: null,
};

export const receptionSlice = createSlice({
  name: "reception",
  initialState,
  reducers: {
    addService(state, action) {
      state.services = [...state.services, action.payload];

      if (state.services.length > 0) {
        state.total_amount += parseFloat(action.payload.amount);
      }
    },
    paidAmount(state, action) {
      state.paid_amount = action.payload;
    },
    removeServiceItem(state, action) {
      state.services = action.payload;
      state.total_amount = action.payload.reduce(
        (acc, cur) => acc + cur.amount,
        0,
      );
    },
    saveServices(state) {
      state.checkStatus = false;
    },
    paymentMethod(state, action) {
      state.payment_method = action.payload;
    },
  },
});

export const {
  addService,
  paidAmount,
  removeServiceItem,
  saveServices,
  paymentMethod,
} = receptionSlice.actions;

export default receptionSlice.reducer;
