import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Cart items will be stored here
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log("dispatch ",item)
      const existingItem = state.items?.find((i) => i?.PRODUCT_ID === item.PRODUCT_ID);
      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.QUANTITY += 1;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
