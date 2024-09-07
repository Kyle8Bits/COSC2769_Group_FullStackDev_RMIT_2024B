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

export const addAdmin = createAsyncThunk('group/addAdmin', async({groupId, username}, {rejectWithValue})=>{
    try{

        const response = await axios.post(`http://localhost:1414/group/addAdmin`, {groupId, username});
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const removeAdmin = createAsyncThunk('group/removeAdmin', async({groupId, username}, {rejectWithValue})=>{
    try{
        const response = await axios.post(`http://localhost:1414/group/removeAdmin`, {groupId, username});
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


export const joinGroup = createAsyncThunk('group/joinGroup', async({groupId, username}, {rejectWithValue})=>{
    try{
        const response = await axios.post(`http://localhost:1414/group/joinGroup`, {groupId, username});
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const leaverGroup = createAsyncThunk('group/leaveGroup', async({groupId, username}, {rejectWithValue})=>{
    try{
        const response = await axios.post(`http://localhost:1414/group/leaveGroup`, {groupId, username});
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const cancelJoin = createAsyncThunk('group/cancelJoin', async({groupId, username}, {rejectWithValue})=>{
    try{
        const response = await axios.post(`http://localhost:1414/group/cancelJoin`, {groupId, username});
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const getPendingMembers = createAsyncThunk('group/getPendingMembers', async({groupId}, {rejectWithValue})=>{
    try{
        const response = await axios.get(`http://localhost:1414/group/getWaitlist`, {
            params: {groupId}
        });
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const acceptJoiningRequest = createAsyncThunk('group/acceptJoiningRequest', async({groupId, username}, {rejectWithValue})=>{
    try{
        const response = await axios.post(`http://localhost:1414/group/acceptJoiningRequest`, {groupId, username});
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})

export const rejectJoiningRequest = createAsyncThunk('group/rejectJoiningRequest', async({groupId, username}, {rejectWithValue})=>{
    try{
        const response = await axios.post(`http://localhost:1414/group/rejectJoiningRequest`, {groupId, username});
        return response.data;
    }
    catch(err){
        return rejectWithValue(err.response.data);
    }
})


export const getPostForGroup = createAsyncThunk('group/getPostForGroup', async({groupId}, {rejectWithValue})=>{
    try{
        const response = await axios.get(`http://localhost:1414/group/getPostForGroup`, {
            params: {groupId}
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
        currentGroup: {
            pendingMembers:['']
        },
        posts: [],
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
            .addCase(getPendingMembers.fulfilled, (state, action)=>{
                state.currentGroup.pendingMembers = action.payload;
            })
            .addCase(getPostForGroup.fulfilled, (state, action)=>{
                state.posts = action.payload;
            })
    }


})

export const { resetCreateGroupStatus } = groupSlice.actions;

export default groupSlice.reducer;
