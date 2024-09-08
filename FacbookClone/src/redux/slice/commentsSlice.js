import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the base URL of your API

// Async thunk to fetch comments for a specific post
export const fetchCommentsForPost = createAsyncThunk('comment/fetchCommentsForPost', async (postId) => {
    const response = await axios.get(`http://localhost:1414/comment/getComments`, {
        params: {postId}
    });
    console.log(response.data);
    return response.data;
});

// Async thunk to add a new comment to a specific post
export const addCommentToPost = createAsyncThunk('comment/addCommentToPost', async ({ postId, commentData, username}) => {
    const response = await axios.post(`http://localhost:1414/comment/addComment`, commentData, {
        params: {
            postId,
            username
        }
    });
    return response.data;
});

export const deleteComment = createAsyncThunk('comment/deleteComment', async ({ postId, commentId}) => {
    try{
    const response = await axios.delete(`http://localhost:1414/comment/deleteComment`, {
        params: {
            postId,
            commentId
        }
    });

    return response.data
    }
    catch(err){
        console.log(err);
    }
});


export const editComment = createAsyncThunk('comment/editComment', async ({ commentId, newContent}) => {
    try{

        const response = await axios.post(`http://localhost:1414/comment/editComment`, {
            params: {
                commentId,
                newContent
            }
        });

        return response.data
    }
    catch(err){
        console.log(err);
    }
})

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
