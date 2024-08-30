import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOtherUserData = createAsyncThunk('otherUser/fetchUserData', async ({ username, currentUser }, thunkAPI) => {
    try {

        //username = nguyenchau
        //curentUser = kyle
        const response = await axios.get(`http://localhost:1414/${username}`, {
            params: { currentUser }
        });
        console.log(response.data);
        localStorage.setItem('otherUser', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});



const initialState = {
    user: JSON.parse(localStorage.getItem('otherUser'))?.user || null,
    isFriend: JSON.parse(localStorage.getItem('otherUser'))?.isFriend || false,
    loading: 'idle',
    error: null,
  };

const otheruserSlice = createSlice({
    name: 'otherUser',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchOtherUserData.pending, (state) => {
            console.log("Load")
            state.loading = 'loading';
        })
        .addCase(fetchOtherUserData.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.user = action.payload.user;
            state.isFriend = action.payload.isFriend;
            localStorage.setItem('otherUser', JSON.stringify({
                user: action.payload.user,
                isFriend: action.payload.isFriend,
              }));
        })
        .addCase(fetchOtherUserData.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload;
        });

    }
});


export default otheruserSlice.reducer;
