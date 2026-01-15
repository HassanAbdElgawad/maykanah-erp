import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface User {
  email: string;
  name: string;
  role: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: !!Cookies.get('auth_token'),
  user: Cookies.get('user') ? JSON.parse(Cookies.get('user')!) : null,
  token: Cookies.get('auth_token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      
      // Save to cookies
      Cookies.set('auth_token', action.payload.token, { expires: 7 });
      Cookies.set('user', JSON.stringify(action.payload.user), { expires: 7 });
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      
      // Remove from cookies
      Cookies.remove('auth_token');
      Cookies.remove('user');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
