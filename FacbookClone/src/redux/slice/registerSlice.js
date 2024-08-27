import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async (userData) => {
            const response = await axios.post('http://localhost:1414/register', userData);
            return response.data;
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
    reducers: {},
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
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });
      },
});

export default registerSlice.reducer;
