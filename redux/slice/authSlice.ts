// libs
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  currentUser: any;
  listUser: any;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: {},
  listUser: [],
  loading: false,
};

export const addUserCurrent: any = createAsyncThunk('auth/addUserCurrent', async (payload: any) => {
    return payload;
});

export const addListUser: any = createAsyncThunk('auth/addListUser', async (payload: any) => {
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
      })
      .addCase(addListUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addListUser.fulfilled, (state, action) => {
        state.loading = false;
        state.listUser = action.payload;
      });
  },
});

const { actions, reducer } = authSlice;
export const { logout } = actions;

export default reducer;
