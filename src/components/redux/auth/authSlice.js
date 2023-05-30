import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state, action) => ({ ...state, error: null }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.signUp.pending, (state, _) => {
        state.error = null;
      })
      .addCase(authOperations.signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(authOperations.signUp.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(authOperations.getCurrentUser.pending, (state, _) => {
        state.isFetchCurrentUser = true;
      })
      .addCase(
        authOperations.getCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isFetchCurrentUser = false;
        }
      )
      .addCase(authOperations.getCurrentUser.rejected, (state, _) => {
        state.isFetchCurrentUser = false;
      })
      .addCase(authOperations.signIn.pending, (state, { payload }) => {
        state.error = null;
      })
      .addCase(authOperations.signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.signIn.rejected, (state, { payload }) => {
        console.log("🚀 ~ payload:", payload);
        state.error = payload;
      })
      .addCase(authOperations.logOut.fulfilled, (state, _) => {
        return initialState;
      });
  },
});
export const { clearError } = authSlice.actions;

export default authSlice.reducer;
