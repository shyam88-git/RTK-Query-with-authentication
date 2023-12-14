import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from '../app/store';

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
      const { email, token } = action.payload;
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          token,
        })
      );

      return { ...state, email, token }; 
    },

    logout: (state) => {
      localStorage.clear();
      return { ...state, email: null, token: null };
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
