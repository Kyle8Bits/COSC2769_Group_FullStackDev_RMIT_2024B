import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    groups:[],
    status: 'idle'
}

export const createGroup = createAsyncThunk('group/createGroup', async({groupName, groupDescription, groupPrivacy, username}, {rejectWithValue})=>{
    try{
        const response = await axios.post('http://localhost:1414/group/createGroup', {
            data: {groupName, groupDescription, groupPrivacy, username}
        });

        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }
})

export const fetchGroupsForUser = createAsyncThunk('group/fetchGroups', async({username}, {rejectWithValue})=>{
    try{
        console.log(username);
        const response = await axios.get(`http://localhost:1414/group/getGroups`,{
            params: {username}
        });
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

const groupSlice = createSlice({
    name: "group",
    initialState: {
        groups: [],
        status: 'idle'
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchGroupsForUser.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(fetchGroupsForUser.fulfilled, (state, action)=>{
                state.status = 'success';
                state.groups = action.payload;
                console.log(state.groups);
            })
            .addCase(fetchGroupsForUser.rejected, (state)=>{
                state.status = 'failed';
            })
    }


})


export default groupSlice.reducer;
