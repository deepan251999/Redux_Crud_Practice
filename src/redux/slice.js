import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: { name: '', age: '', phone: '' },
    customers: [],
    iscustomerUpdate: false
};

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        addCustomer: (state, action) => {
            state.customers.push(action.payload);
        },
        updateCustomer: (state, action) => {
            const index = state.customers.findIndex((customer) => customer.id === action.payload.id);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        },
        deleteCustomer: (state, action) => {
            state.customers = state.customers.filter((customer) => customer.id !== action.payload);
        },
        setIscustomerUpdate: (state, action) => {
            state.iscustomerUpdate = action.payload;
        }
    },
});

export const { setFormData, addCustomer, updateCustomer, deleteCustomer, setIscustomerUpdate } = customerSlice.actions;
export default customerSlice.reducer;
