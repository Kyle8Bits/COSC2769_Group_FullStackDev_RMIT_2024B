import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';


export const fetchOtherUserData = createAsyncThunk('otherUser/fetchUserData', async ({ username, currentUser }, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:1414/${username}`, {
            params: { currentUser }
        });
    
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const initialState = {
    user: null,
    isFriend: false,
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
            console.log("here", action.payload.user);
            state.user = action.payload.user;
            state.isFriend = action.payload.isFriend;
        })
        .addCase(fetchOtherUserData.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload;
        });

    }
});


export default otheruserSlice.reducer;
