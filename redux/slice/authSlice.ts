// libs
import { gender } from '@models';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  currentUser: any;
  listUser: any;
  loading: boolean;
  genders: gender[];
  roles: any[];
  positions: any[];
}

const initialState: AuthState = {
  currentUser: {},
  listUser: [],
  loading: false,
  genders: [],
  roles: [],
  positions: [],
};

export const addUserCurrent: any = createAsyncThunk('auth/addUserCurrent', async (payload: any) => {
  return payload;
});

export const addListUser: any = createAsyncThunk('auth/addListUser', async (payload: any) => {
  return payload;
});

export const addGenders: any = createAsyncThunk('auth/addGenders', async (payload: any) => {
  return payload;
});

export const addRoledId: any = createAsyncThunk('auth/addRoledId', async (payload: any) => {
  return payload;
});

export const addPosition: any = createAsyncThunk('auth/addPosition', async (payload: any) => {
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
      })
      .addCase(addGenders.pending, (state) => {
        state.loading = true;
      })
      .addCase(addGenders.fulfilled, (state, action) => {
        state.loading = false;
        state.genders = action.payload;
      })
      .addCase(addRoledId.pending, (state) => {
        state.loading = true;
      })
      .addCase(addRoledId.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })
      .addCase(addPosition.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPosition.fulfilled, (state, action) => {
        state.loading = false;
        state.positions = action.payload;
      });
  },
});

const { actions, reducer } = authSlice;
export const { logout } = actions;

export default reducer;
