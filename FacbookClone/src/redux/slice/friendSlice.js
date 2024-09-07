import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const initialState = {
    friend: [],
    friendRequest:[],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

//const {friendRquest} = uSLT(state=> state.friends)




export const fetchFriend = createAsyncThunk('/friend/getFriends', async (_, { getState }) => {
    const state = getState();
    const username = state.profile.username;  // Access the username from profileSlice
    const response = await axios.get('http://localhost:1414/friend/friends', { params: { username } });
    return response.data;
});


export const deleteFriendship = createAsyncThunk('/friend/deleteFriendship', async ({ requester, recipient }, { rejectWithValue }) => {
    try {
        const response = await axios.delete('http://localhost:1414/friend/friend-delete', {
            data: { requester: requester.username, recipient:recipient.usernameCard  }
        });
        
        console.log(requester, "pass in" ,recipient)

        console.log("Success unfriend")
        return recipient; // Return the recipient to remove from the friend list
    } catch (error) {
        console.log(requester, "pass in" ,recipient)
        console.error('Error in delete friendShip:', error);
        return rejectWithValue(error.response.data);
    }
});

export const fetchFriendRequest = createAsyncThunk(
  'friend/fetchFriendRequest',
  async (currentUser, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:1414/friend/getRequest', {
        params: { recipient: currentUser.username },
      });
      return response.data; // This should now return requester and recipient details
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

  // Thunk to send a friend request
export const sendFriendRequest = createAsyncThunk('friend/sendFriendRequest', async ({ requester, recipient }, { rejectWithValue }) => {
      try {
        console.log("Current User:", requester)
        console.log("Friend request send to:", recipient);
        const response = await axios.post('http://localhost:1414/friend/sendRequest', {
          data: { requester, recipient }
        });
       

        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const acceptFriendRequest = createAsyncThunk(
  '/friend/acceptFriendRequest',
  async ({ requester, recipient }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:1414/friend/accept', {
        data: {requester,recipient}
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Decline a friend request
export const declineFriendRequest = createAsyncThunk(
    '/friend/declineFriendRequest',
    async ({ requester, recipient }, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:1414/friend/decline', {
            data:{requester,recipient}
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);
  
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
            })
            .addCase(fetchFriendRequest.pending, (state) => {
                state.status = 'loading';
                state.friendRequest = [];
                state.error = null;
            })
            .addCase(fetchFriendRequest.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.friendRequest = action.payload; // Set the array with the fetched data
            })
            .addCase(fetchFriendRequest.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                state.friendRequest = []; // Clear the array or handle the error state appropriately
            })

    }
})

export const { removeFriend } = friendSlice.actions;

export default friendSlice.reducer;