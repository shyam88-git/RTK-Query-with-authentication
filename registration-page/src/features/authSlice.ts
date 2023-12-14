import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

export interface AuthState {
  email: string | null;

  token: string | null;
}

const initialState: AuthState = {
  email: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ email: string; token: string }>
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
        })
      );

      state.email = action.payload.email;
      state.token = action.payload.token;
    },

    logout: (state) => {
      localStorage.clear();
      state.email = null;
      state.token = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
