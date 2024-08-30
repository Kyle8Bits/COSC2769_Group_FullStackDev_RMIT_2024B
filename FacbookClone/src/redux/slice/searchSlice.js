import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch users based on search term
export const fetchCards = createAsyncThunk('search/fetchCards', async (searchTerm) => {
    const response = await axios.get(`/users/search`,{
        params: {searchTerm}
    });
    console.log(response.data)
    return response.data;
});

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        user: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearCard: (state) => {
            state.user = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearCard } = searchSlice.actions;

export default searchSlice.reducer;
