// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     commentList: [    
//         {
//             id: 1,
//             user: { name: 'John Doe', avatar: 'https://via.placeholder.com/40' },
//             text: 'This is a great post!',
//             time: '2 hours ago',
//         },
//         {
//             id: 2,
//             user: { name: 'Jane Smith', avatar: 'https://via.placeholder.com/40' },
//             text: 'Thanks for sharing!',
//             time: '1 hour ago',
//         },
//     ],
// }
     
  
// const commentsSlice = createSlice({
//     name: 'comments',
//     initialState,
//     reducers:{
//         increase(state,action){
//             state.commentList.push(action.payload);
//         },
//     },
// });

// export const {increase} = commentsSlice.actions;
// export default commentsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the base URL of your API

// Async thunk to fetch comments for a specific post
export const fetchCommentsForPost = createAsyncThunk('comments/fetchCommentsForPost', async (postId) => {
    const response = await axios.get(`http://localhost:1414/comments/post/${postId}`);
    console.log(response.data);
    return response.data;
});

// Async thunk to add a new comment to a specific post
export const addCommentToPost = createAsyncThunk('comments/addCommentToPost', async ({ postId, commentData }) => {
    const response = await axios.post(`http://localhost:1414/comments/post/${postId}`, commentData);
    return response.data;
});

// Define the initial state
const initialState = {
    commentList: [],  // This will hold an array of comment objects
    status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,      // Store error messages if any
};

// Create the slice
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        resetCommentsState: (state) => {
            state.commentList = [];
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Handle fetchCommentsForPost
            .addCase(fetchCommentsForPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCommentsForPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.commentList = action.payload;
            })
            .addCase(fetchCommentsForPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Handle addCommentToPost
            .addCase(addCommentToPost.fulfilled, (state, action) => {
                state.commentList.push(action.payload);
            });
    },
});

// Export the async thunks and the reducer
export const { resetCommentsState } = commentsSlice.actions;
export default commentsSlice.reducer;
