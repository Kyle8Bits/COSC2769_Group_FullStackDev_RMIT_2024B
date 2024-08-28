import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (userData, { rejectWithValue }) => {
      try {
          const response = await axios.post('http://localhost:1414/register', userData);
          return response.data;
      } catch (error) {
          // Return the error message from the server
          return rejectWithValue(error.response.data.message);
      }
  }
);


const registerSlice = createSlice({
    name: 'register',
    initialState: {
        username: '',
        password: '',
        fullName: '',
        email: '',
        phone: '',
        status: 'idle',
        error: null
    },
    reducers: {
      resetStatus: (state) => {
        state.status = null;
        state.error = null;
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // Assuming action.payload contains the user data
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.error = null;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });
      },
});

export const { resetStatus } = registerSlice.actions;
export default registerSlice.reducer;
