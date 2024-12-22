import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slice.js';

const store = configureStore({
    reducer: {
        customers: customerReducer,
    },
});

export default store;
