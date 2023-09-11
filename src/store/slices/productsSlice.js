import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

export const getProducts = createAsyncThunk("api/get-products", async () => {
  try {
    const res = await axiosInstance.get("/products?populate=deep,4");
    const data = await res.data.data;
    if (res.status === 200) {
      return data;
    }
  } catch (error) {
    return Promise.reject(error?.message ? error?.message : "ERROR");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const data = action.payload;
      state.products = [...data];
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
