import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const initialState = {
    friend: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};



export const fetchFriend = createAsyncThunk('/friend/getFriends', async (_, { getState }) => {
    const state = getState();
    const username = state.profile.username;  // Access the username from profileSlice
    const response = await axios.get('http://localhost:1414/friend/friends', { params: { username } });
    return response.data;
});


export const deleteFriendship = createAsyncThunk('/friend/deleteFriendship', async ({ requester, recipient }, { rejectWithValue }) => {
    try {
        console.log("Here", recipient.usernameFriend, "here2", requester.username);
        const response = await axios.delete('http://localhost:1414/friend/friend-delete', {
            data: { requester: requester.username, recipient:recipient.usernameFriend  }
        });


        return recipient; // Return the recipient to remove from the friend list
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {
        removeFriend(state, action) {
            state.friend = state.friend.filter(friend => friend.username !== action.payload);
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
            })
            .addCase(deleteFriendship.fulfilled, (state, action) => {
                state.friend = state.friend.filter(friend => friend.username !== action.payload.usernameFriend);
            });
            
    }
})

export const { removeFriend } = friendSlice.actions;

export default friendSlice.reducer;