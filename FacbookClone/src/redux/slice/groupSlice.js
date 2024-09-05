import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchGroupById = createAsyncThunk('group/fetchGroupById', async({groupId}, {rejectWithValue})=>{
    try{
        const response = await axios.get(`http://localhost:1414/group/getGroupById`,{
            params: {groupId}
        });
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const getAdmins = createAsyncThunk('group/getAdmins', async({groupId}, {rejectWithValue})=>{
    try{
        const response = await axios.get(`http://localhost:1414/group/getAdmins`,{
            params: {groupId}
        });
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const editBanner = createAsyncThunk('group/editBanner', async({groupId, banner}, {rejectWithValue})=>{
    try{
        console.log(groupId, banner);
        const response = await axios.post(`http://localhost:1414/group/editBanner`, {groupId, banner}, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
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
        currentGroup: {},
        admins: [],
        status: 'idle',
        createGroupStatus:'idle'
    },
    reducers: {
        resetCreateGroupStatus(state){
            return{
                ...state,
                createGroupStatus: 'idle'
            }
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(createGroup.pending, (state)=>{
                state.createGroupStatus = 'loading';
            })
            .addCase(createGroup.fulfilled, (state, action)=>{
                state.createGroupStatus = 'success';
                state.groups.push(action.payload);
            })
            .addCase(createGroup.rejected, (state)=>{
                state.createGroupStatus = 'failed';
            })
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
            .addCase(fetchGroupById.fulfilled, (state,action)=>{
                state.currentGroup = action.payload;
            })
            .addCase(getAdmins.fulfilled, (state, action)=>{
                state.admins = action.payload;
            })
    }


})

export const { resetCreateGroupStatus } = groupSlice.actions;

export default groupSlice.reducer;
