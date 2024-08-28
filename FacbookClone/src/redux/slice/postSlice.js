import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the base URL for your API
const API_URL = 'http://localhost:1414/posts';

// Async thunk to fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({currentUser}) => {
    const response = await axios.get(`http://localhost:1414/posts/getPost`, {
        headers: currentUser
    });

    return response.data;
});

// Async thunk to add a new post
export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
    const response = await axios.post(API_URL, postData);
    return response.data;
});

// Async thunk to update a post
export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, postData }) => {
    const response = await axios.put(`${API_URL}/${id}`, postData);
    return response.data;
});

// Async thunk to delete a post
export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});



// Define the initial state
const initialState = {
    posts: [],          // This will hold an array of post objects
    status: 'idle',     // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,        // Store error messages if any
};

// Create the slice
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // Define any synchronous actions here if necessary
        resetPostsState: (state) => {
            state.posts = [];
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Handle fetchPosts
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Handle addPost
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            // Handle updatePost
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.posts.findIndex(post => post._id === action.payload._id);
                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            // Handle deletePost
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post._id !== action.payload);
            });
    },
});

// Export the async thunks and the reducer
export const { resetPostsState } = postSlice.actions;
export default postSlice.reducer;
