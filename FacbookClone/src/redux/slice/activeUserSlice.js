import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    activeUsers:[],
    status: 'idle'
}

export const getActiveUsers = createAsyncThunk('admin/getBannedUsers', async (_, { rejectWithValue })=>{
    try{
        const response = await axios.get('http://localhost:1414/admin/activeUsers');
        console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err)
        return rejectWithValue(err.message);
    }
})

export const banUser = createAsyncThunk('admin/banUser', async({username},{rejectWithValue})=>{
    try{
        console.log(username)
        const response = await axios.post('http://localhost:1414/admin/ban', {
            data: {username: username}
        });

        return username;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }
})

const activeUserSlice = createSlice({
    name: 'active',
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder
            .addCase(getActiveUsers.pending, (state)=>{
                state.status= 'loading'
            })
            .addCase(getActiveUsers.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                console.log(action.payload)
                state.activeUsers = action.payload
            })
            .addCase(getActiveUsers.rejected,(state)=>{
                state.status = 'failed'
                console.log(action.payload)
            })
            .addCase(banUser.fulfilled, (state, action)=>{
                state.activeUsers = state.activeUsers.filter(aU => aU.username !== action.payload.username)
            })
    }

})

export default activeUserSlice.reducer;