// libs
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  currentUser: any;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: {},
  loading: false,
};

export const addUserCurrent: any = createAsyncThunk('auth/addUserCurrent', async (payload: any) => {
    return payload;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      state.currentUser = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserCurrent.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserCurrent.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      });
  },
});

const { actions, reducer } = authSlice;
export const { logout } = actions;

export default reducer;
