import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  username: string;
  role: 'admin' | 'user' | '';
}

const initialState: { user: User } = {
  user: {
    username: '',
    role: '',
  },
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get(' https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
  return response.data as User;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserRole(state, action: PayloadAction<'admin' | 'user'>) {
      state.user.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { updateUserRole } = userSlice.actions;
export default userSlice.reducer;
