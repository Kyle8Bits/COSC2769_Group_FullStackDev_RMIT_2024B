import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    friend: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

export const fetchFriend = createAsyncThunk('/friend/getFriends', async (_, { getState }) => {
    const state = getState();
    const username = state.profile.username;  // Access the username from profileSlice
    const response = await axios.get('http://localhost:1414/friends', { params: { username } });
    return response.data;
});

const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {
        displayFriend(state,act){
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFriend.pending, (state) => {
                state.status = 'loading';
                state.friend = []; // Clear the array or keep the existing data
                state.error = null; // Clear any previous error
            })
            .addCase(fetchFriend.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.friend = action.payload; // Set the array with the fetched data
            })
            .addCase(fetchFriend.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                state.friend = []; // Clear the array or handle the error state appropriately
            });
    }
})

export const { displayFriend } = friendSlice.actions;

export default friendSlice.reducer;