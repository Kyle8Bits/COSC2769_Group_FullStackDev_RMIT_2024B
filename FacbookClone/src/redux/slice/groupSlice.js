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

export const fetchGroupsForUser = createAsyncThunk('group/fetchGroups', async(_, {getState})=>{
    const state = getState();
    const username = state.profile.username;

    const response = await axios.get('http://localhost:1414/group/groups', {params: {username}});
    return response.data;
})

const groupSlice = createSlice({
    name: "group",
    initialState: {
        groups: [],
        status: 'idle'
    },

})


export default groupSlice.reducer;
