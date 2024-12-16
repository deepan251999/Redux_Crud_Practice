import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('items')) || [], 
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('items', JSON.stringify(state.items)); 
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('items', JSON.stringify(state.items)); 
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        localStorage.setItem('items', JSON.stringify(state.items)); 
      }
    },
  },
});

export const { addItem, deleteItem, updateItem } = itemSlice.actions;
export default itemSlice.reducer;
