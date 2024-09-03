// profileUpdateSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getCurrentPost = createAsyncThunk(`post/editPost`, async (postId, { rejectWithValue }) => {
    try{
    const response = await axios.get('http://localhost:1414/posts/getPostById', {
        params: postId
    })  

    return response.data
    }
    catch(err){
        console.log(err)
        return rejectWithValue(err.response.data);
    }
});

export const editCurrentPost = createAsyncThunk(`post/editing`, async ({postId, data},{rejectWithValue})=>{
    try{
        const response = await axios.put('http://localhost:1414/posts/updatePost', data, {
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            params: postId // Ensure this matches how you expect to receive the postId on the backend
            
        });

        return response.data;        
    }
    catch(err){
        console.log(err)
        return rejectWithValue(err.response.data)

    }
});

export const deleteCurrentPost = createAsyncThunk(`post/deletePost`, async (postId, {rejectWithValue})=>{
    try{
        const response = await axios.delete('http://localhost:1414/posts/deletePost', {
            params: postId
        });

        return response.data;
    }catch(err){
        console.log(err)
    } 
});


const initialState={
    post: null,
    status:'idle',
    error: null,
}

const postUpdateSlice = createSlice({
    name: 'profileUpdate',
    initialState,
    reducers: {
        resetUpdatePostState(state){
            return{
                ...state,
                post: null,
                error: null,
                status:'idle'
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.post = action.payload; // Store the updated user data
            })
            .addCase(getCurrentPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(getCurrentPost.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            });
    }
});

export const { resetUpdatePostState } = postUpdateSlice.actions;

export default postUpdateSlice.reducer;
