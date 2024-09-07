 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
    changePasswordStatus: 'idle',
    changePasswordError: null
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


export const changePassword = createAsyncThunk('auth/changePassword', async (credentials, { rejectWithValue }) => { 
    try { 
        console.log(credentials)
        const response = await axios.post('http://localhost:1414/change_password', credentials);
        return response.data; // Return success message
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
        resetStatus: (state) => {
            state.changePasswordStatus = null;
            state.changePasswordError = null;
        },
        logout(state) {
            state.user = null;
            state.status = 'idle';
            state.error = null;
            localStorage.removeItem('user'); 
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
                state.user = action.payload;
                console.log(action.payload)
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(changePassword.pending, (state) => {
                state.changePasswordStatus = 'loading';
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.changePasswordStatus = 'succeeded';
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.changePasswordStatus = 'failed';
                state.changePasswordError = action.payload;
            });

    }
});

export const { logout, resetStatus } = loginSlice.actions;

export default loginSlice.reducer;
