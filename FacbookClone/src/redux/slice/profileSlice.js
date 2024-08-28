import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginSlice';

const initialState = {
    username: '',
    fullName: '',
    email: '',
    phone: '',
    bio: '',
    avatar: '',
    banner:'',
    info: [],
    isAdmin: false,
    status: 'idle', // idle, loading, succeeded, failed
    error: null
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action) {
            return { ...state, ...action.payload, status: 'succeeded' };
        },
        resetProfile(state) {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("Setting profile data");
                return { ...state, ...action.payload, status: 'succeeded' }; 
            })
    }
});

export const { setProfile, resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
