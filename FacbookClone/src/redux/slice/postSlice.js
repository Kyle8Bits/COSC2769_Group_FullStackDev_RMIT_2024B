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
export const addPost = createAsyncThunk('posts/createPost', async (postData) => {

    const response = await axios.post('http://localhost:1414/posts/createPost', postData);
    return response.data;
});

// // Async thunk to update a post
// export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, postData }) => {
//     const response = await axios.put(`${API_URL}/${id}`, postData);
//     return response.data;
// });

// // Async thunk to delete a post
// export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     return id;
// });

export const givereact = createAsyncThunk('/post/giveReact', async ({id}, {rejectWithValue})=>{
    try{
        console.log(id)
        const response = await axios.post('http://localhost:1414/posts/giveReact', {
            data: {id : id}
        });

        return id;
    }
    catch(err){
        return rejectWithValue(err.response.data)
    }
})

export const deletereact = createAsyncThunk('/post/giveReact', async ({id}, {rejectWithValue})=>{
    try{
        console.log(id)
        const response = await axios.post('http://localhost:1414/posts/deleteReact', {
            data: {id : id}
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
                console.log(state.posts)
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
