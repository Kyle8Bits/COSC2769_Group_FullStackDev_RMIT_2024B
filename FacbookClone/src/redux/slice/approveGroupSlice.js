import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGroupRequest = createAsyncThunk('admin/getGroupRequest', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:1414/admin/groupRequest');
        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue(err.message);
    }
});

export const decideGroupRequest = createAsyncThunk('admin/decideGroupRequest', async ({id, decision}, { rejectWithValue }) => {
    try {

        console.log(id, decision);
        // const response = await axios.post('http://localhost:1414/admin/decide', data);
        // return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue(err.message);
    }
})

// Slice for handling group requests
const approveGroupSlice = createSlice({
    name: 'groupRequests',
    initialState: {
        groupRequests: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGroupRequest.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getGroupRequest.fulfilled, (state, action) => {
                state.status = 'success';
                state.groupRequests = action.payload;
            })
            .addCase(getGroupRequest.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(decideGroupRequest.fulfilled, (state) => {
                state.groupRequests = state.groupRequests.filter(group => group.id !== action.payload.id);
            })
    }
});

export default approveGroupSlice.reducer;