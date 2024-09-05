import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCommunity = createAsyncThunk('community/fetchCommunity', async () => {
    try{
        const response = await axios.get('http://localhost:1414/group/getCommunities');
        return response.data;
    }catch(err){
        console.log(err);
    }
})

// export const fetchMembers = createAsyncThunk('community/fetchMembers', async ({username}) => {
//     try{
//         const response = await axios.get('http://localhost:1414/community/getMembers', {
//             params: {username}
//         });
//         return response.data;
//     }
//     catch(err){
//         console.log(err);
//     }
// })

const initialState = {
    communityList: [],
    status: 'idle'
}

const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommunity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCommunity.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.communityList = action.payload;
            })
            .addCase(fetchCommunity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default communitySlice.reducer;