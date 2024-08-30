import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch users based on search term
export const fetchUsers = createAsyncThunk('search/fetchUsers', async (searchTerm) => {
    const response = await axios.get(`/users/search?q=${searchTerm}`);
    console.log(response.data)
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        card: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearUsers: (state) => {
            state.card = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.card = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearUsers } = userSlice.actions;

export default userSlice.reducer;
