import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";
import { act } from "react-dom/test-utils";

const initialState = {
  user: {},
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkApi) => {
    let data;
    try {
      const res = await axiosInstance.post("/auth/local/register", {
        ...values,
      });
      data = await res.data;
      if (res.status === 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(
        error ? error.response?.data?.error?.message : data?.message
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (values, thunkApi) => {
    let data;
    try {
      const res = await axiosInstance.post("/auth/local", {
        ...values,
      });
      console.log(res);
      data = await res.data;
      if (res.status === 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(
        error ? error.response?.data?.error?.message : data?.message
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      console.log("pending");
      state.isLoading = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      let token = action.payload.jwt;
      localStorage.setItem("organick_token", token);
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      window.location.href = "/";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.error = action.error.message;
    });
    //login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      let token = action.payload.jwt;
      localStorage.setItem("organick_token", token);
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
      window.location.href = "/";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
