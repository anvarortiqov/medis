import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  services: [],
  total_amount: 0,
  checkStatus: true,
  paid_amount: 0,
  payment_method: undefined,
  analyses: [],
  analyse_nurse: [],
};

export const receptionSlice = createSlice({
  name: "reception",
  initialState,
  reducers: {
    addService(state, action) {
      const { type, data } = action.payload;
      state.total_amount += parseFloat(data.amount);

      if (type === "SERVICES") state.services.push(data);
      else if (type === "ANALYSES") state.analyses.push(data);
      else if (type === "ANALYSE_NURSE") state.analyse_nurse.push(data);
    },
    paidAmount(state, action) {
      state.paid_amount = action.payload;
    },
    removeServiceItem(state, action) {
      const { type, filtered } = action.payload;

      if (type === "SERVICES") state.services = filtered;
      else if (type === "ANALYSES") state.analyses = filtered;
      else if (type === "ANALYSE_NURSE") state.analyse_nurse = filtered;

      state.total_amount = [
        ...state.services,
        ...state.analyses,
        ...state.analyse_nurse,
      ].reduce((acc, cur) => acc + cur.amount, 0);
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
