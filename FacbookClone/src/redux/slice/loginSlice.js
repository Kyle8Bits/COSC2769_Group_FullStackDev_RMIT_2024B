import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    status: 'idle', // idle, loading, succeeded, failed
    error: null
};


// Thunk to handle login
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
    const response = await axios.post('http://localhost:1414/login', credentials, {
        headers: {
            'Authorization': 'pass'  // Ensure this matches what your authMiddleware expects
        }
    });
    return response.data;
});

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.status = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("Got data")
                state.status = 'succeeded';
                state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
