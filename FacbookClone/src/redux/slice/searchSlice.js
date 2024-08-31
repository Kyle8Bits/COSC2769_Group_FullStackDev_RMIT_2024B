import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch users based on search term
export const fetchCards = createAsyncThunk('search/fetchCards', async (searchTerm) => {
    const response = await axios.get(`http://localhost:1414/users/search`,{
        params: {searchTerm}
    });
    return response.data;
});

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        cards: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearCard: (state) => {
            state.cards = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload)
                state.cards = action.payload.map(user => ({
                    fullname: user.user.fullName, // Map the fullName from the user data
                    avatar: user.user.avatar || '', // Map the avatar, or use a default value if it's not available
                    username: user.user.username, // Map any other fields you need
                  }));
                
                console.log(state.cards)
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearCard } = searchSlice.actions;

export default searchSlice.reducer;
