import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    bannedUsers:[],
    status: 'idle'
}

export const getBannedUsers = createAsyncThunk('admin/getBannedUsers', async (_, { rejectWithValue })=>{
    try{
        const response = await axios.get('http://localhost:1414/admin/bannedUsers');
        console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err)
        return rejectWithValue(err.message);
    }
})

export const unbanUser = createAsyncThunk('admin/unbanUser', async({username},{rejectWithValue})=>{
    try{
        console.log(username)
        const response = await axios.post('http://localhost:1414/admin/unban', {
            data: {username: username}
        });

        return username;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }
})

const banUserSlice = createSlice({
    name: 'ban',
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder
            .addCase(getBannedUsers.pending, (state)=>{
                state.status= 'loading'
            })
            .addCase(getBannedUsers.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                console.log(action.payload)
                state.bannedUsers = action.payload
            })
            .addCase(getBannedUsers.rejected,(state)=>{
                state.status = 'failed'
                console.log(action.payload)
            })
            .addCase(unbanUser.fulfilled,(state,action)=>{
                state.bannedUsers = state.bannedUsers.filter(bU => bU.username !== action.payload.username);
            })
    }

})

export default banUserSlice.reducer;