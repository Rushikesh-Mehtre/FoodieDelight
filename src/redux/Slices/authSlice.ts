import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface AuthState {
  isLoggedIn: boolean;
}

// Initial state
const initialState: AuthState = {
  isLoggedIn: false, // Initially, the user is not logged in
};

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Export the actions and reducer
export const { login, logout, setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
