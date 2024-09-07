import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the base URL for your API
const API_URL = 'http://localhost:1414/posts';

// Async thunk to fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({currentUser}) => {
    const response = await axios.get(`http://localhost:1414/posts/getPost`, {
        headers: currentUser
    });
    // console.log(response.data);
    return response.data;
});

// // Async thunk to add a new post
export const addPost = createAsyncThunk('posts/createPost', async (postData, {rejectWithValue}) => {
    try{
        const response = await axios.post('http://localhost:1414/posts/createPost', postData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data.post;
    }
    catch{err}{
        return rejectWithValue(err.response.data)
    }
});

export const createPostInGroup = createAsyncThunk('posts/createPostInGroup', async ({groupId, postData}, {rejectWithValue}) => {
    try{
        const response = await axios.post('http://localhost:1414/posts/createPostInGroup', postData, {
            params:{
                groupId: groupId
            }
            ,
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data.post;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }   
})


export const givereact = createAsyncThunk('/post/giveReact', async ({id, currentUser}, {rejectWithValue})=>{
    try{
        const response = await axios.post('http://localhost:1414/posts/giveReact', {
            data: {
                id : id,
                currentUser: currentUser
            },
        });

        return id;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }
})

export const deletereact = createAsyncThunk('/post/giveReact', async ({id, currentUser}, {rejectWithValue})=>{
    try{
        const response = await axios.post('http://localhost:1414/posts/deleteReact', {
            data: {
                id : id,
                currentUser: currentUser
            }
        });

        return id;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }
})


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
    },
});

// Export the async thunks and the reducer
export const { resetPostsState } = postSlice.actions;
export default postSlice.reducer;
