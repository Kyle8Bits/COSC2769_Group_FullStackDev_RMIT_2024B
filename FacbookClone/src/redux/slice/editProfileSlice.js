// profileUpdateSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateProfile = createAsyncThunk('editProfile/updateUserProfile', async (profileData, { rejectWithValue }) => {
    try {
        const response = await axios.put('http://localhost:1414/profile', profileData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data.user; // Return the updated user data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const profileUpdateSlice = createSlice({
    name: 'profileUpdate',
    initialState: {
        status: 'idle', // idle, loading, succeeded, failed
        error: null,
        updatedUser: null,
    },
    reducers: {
        resetUpdateState(state) {
            return { ...state, status: 'idle', error: null, updatedUser: null };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updatedUser = action.payload; // Store the updated user data
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(updateProfile.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            });
    }
});

export const { resetUpdateState } = profileUpdateSlice.actions;

export default profileUpdateSlice.reducer;
