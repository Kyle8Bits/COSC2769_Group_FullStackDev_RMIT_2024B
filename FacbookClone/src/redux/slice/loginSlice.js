 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    status: 'idle', // idle, loading, succeeded, failed
    error: null
};


// Thunk to handle login
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:1414/login', credentials, {
            headers: {
                'Authorization': 'pass'  // Ensure this matches what your authMiddleware expects
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.message); // Pass the error message from backend
        } else {
            return rejectWithValue(error.message);
        }
    }
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
                state.error = action.payload;
            });
    }
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
