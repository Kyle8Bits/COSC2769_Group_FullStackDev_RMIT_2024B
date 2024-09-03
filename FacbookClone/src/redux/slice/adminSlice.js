import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { act } from "react";

export const fetchUsers = createAsyncThunk('admin/fetchUsers', async () => {
    const response = await axios.get('http://localhost:1414/admin/users', { params: { isAdmin: false } });
    return response.data;
});

export const fetchGroupRequests = createAsyncThunk('admin/fetchGroupRequests', async () => {
    const response = await axios.get('http://localhost:1414/admin/group_requests');
    return response.data;
})

export const suspendUser = createAsyncThunk('admin/suspend', async (userId) => {
    const response = await axios.put(`http://localhost:1414/admin/suspend/${userId}`);
    return response.data;
});

export const resumeUser = createAsyncThunk('admin/resume', async (userId) => {
    const response = await axios.put(`http://localhost:1414/admin/resume/${userId}`);
    return response.data;
});

export const approveGroupCreation = createAsyncThunk('admin/approve', async (groupId) => {
    const response = await axios.put(`http://localhost:1414/admin/approve/${groupId}`);
    return response.data;
});

export const rejectGroupCreation = createAsyncThunk('admin/reject', async (groupId) => {
    const response = await axios.put(`http://localhost:1414/admin/reject/${groupId}`);
    return response.data;
})

export const deletePost = createAsyncThunk('/admin/deletePost', async (postId) => {
    console.log("Thunk received Post ID: ", postId); // Check if postId reaches the thunk
    
    const response = await axios.delete(`http://localhost:1414/admin/delete/${postId}`);
    return response.data;
});

export const deleteComment = createAsyncThunk('admin/deleteComment', async ({postId, commentId}) => {
    console.log("Thunk received Post ID: ", postId); // Check if postId reaches the thunk
    const response = await axios.delete(`http://localhost:1414/admin/delete/${postId}/${commentId}`);
    return response.data;
});

const adminSlice = createSlice({
    name:'admin',
    initialState: {
        users: [],
        groupRequests: [],
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'success';
                state.users = action.payload; // Store the fetched users
            })
            .addCase(fetchGroupRequests.fulfilled, (state, action) => {
                state.status = 'success';
                state.groupRequests = action.payload;
            })
            .addCase(suspendUser.fulfilled, (state, action) => {
                state.status = 'success';
                const user = state.users.find(user => user._id === action.payload.userId);
                if (user) user.isSuspended = true;
            })
            .addCase(resumeUser.fulfilled, (state, action) => {
                state.status = 'success';
                const user = state.users.find(user => user._id === action.payload.userId);
                if (user) user.isSuspended = false;
            })
            .addCase(approveGroupCreation.fulfilled, (state, action) => {
                state.status = 'success';
                state.groupRequests = state.groupRequests.filter(group => group._id !== action.payload.groupId);
            })
            .addCase(rejectGroupCreation.fulfilled, (state, action) => {
                state.status = 'success';
                state.groupRequests = state.groupRequests.filter(group => group._id !== action.payload.groupId);
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'success';
                state.posts = state.posts.filter(post => post._id !== action.payload.postId);
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.status = 'success';
                const post = state.posts.find(post => post._id === action.payload.postId);
                if (post) {
                    post.comments = post.comments.filter (comment => comment._id !== action.payload.commentId);
                }
            })
    }
})

export default adminSlice.reducer;