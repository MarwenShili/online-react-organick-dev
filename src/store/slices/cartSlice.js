import { createSlice } from "@reduxjs/toolkit";

// fetch data with asyncThunk => send request

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalCount: 0,
    totalPrice: 0,

    data: [],
    isLoading: false,
    error: null,
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

      state.totalPrice =
        state.totalPrice + newProduct.attributes.priceAfterDiscount;
    },
    removeFromCart: (state, action) => {
      const newId = action.payload;
      const currentProduct = state.cartProducts.find((el) => el.id === newId);
      const currentCount = currentProduct.count;

      if (currentCount === 1) {
        state.cartProducts = state.cartProducts.filter((el) => el.id != newId);
      }

      if (currentCount > 1) {
        currentProduct.count -= 1;
      }
      state.totalCount -= 1;
      state.totalPrice =
        state.totalPrice - currentProduct.attributes.priceAfterDiscount;
    },
    removeAll: (state) => {
      state.cartProducts = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: {
    //pending
    // => state.isLoading = true
    //success
    //=> 1. state.isLoading = false ; 2. state.data = action.payload
    //failed
    //=> state.isLoading = false ; state.error = "error message"
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
