import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalCount: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const index = state.cartProducts.findIndex(
        (item) => item.id === newProduct.id
      );
      if (index === -1) {
        state.cartProducts.push(newProduct);
      } else {
        state.cartProducts[index].count += 1;
      }
      state.totalCount += 1;
    },
    removeFromCart: (state, action) => {},
    removeAll: (state) => {},
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
