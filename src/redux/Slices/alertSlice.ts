import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlertState {
  message: string | null;
  type: 'success' | 'warning' | 'error' | null;
  isVisible: boolean;
}

const initialState: AlertState = {
  message: null,
  type: null,
  isVisible: false,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<{ message: string; type: 'success' | 'warning' | 'error' }>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isVisible = true;
    },
    hideAlert: (state) => {
      state.isVisible = false;
      state.message = null;
      state.type = null;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
