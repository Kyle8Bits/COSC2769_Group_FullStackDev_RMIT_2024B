import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginSlice';
import { updateProfile } from './editProfileSlice';


const initialState = {
    username: localStorage.getItem('username') || '',
    fullName: localStorage.getItem('fullName') || '',
    email: localStorage.getItem('email') || '',
    phone: localStorage.getItem('phone') || '',
    bio: localStorage.getItem('bio') || '',
    avatar: localStorage.getItem('avatar') || '',
    banner: localStorage.getItem('banner') || '',
    info: JSON.parse(localStorage.getItem('info')) || [],
    isAdmin: JSON.parse(localStorage.getItem('isAdmin')) || false,
    status: 'idle', // idle, loading, succeeded, failed
    error: null
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action) {
            Object.assign(state, action.payload);
            localStorage.setItem('username', state.username);
            localStorage.setItem('fullName', state.fullName);
            localStorage.setItem('email', state.email);
            localStorage.setItem('phone', state.phone);
            localStorage.setItem('bio', state.bio);
            localStorage.setItem('avatar', state.avatar);
            localStorage.setItem('banner', state.banner);
            localStorage.setItem('info', JSON.stringify(state.info));
            localStorage.setItem('isAdmin', JSON.stringify(state.isAdmin));
            return { ...state, ...action.payload, status: 'succeeded' };
        },
        resetProfile(state) {
            localStorage.clear();
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("Setting profile data");
                const newState = {
                    ...state,
                    ...action.payload,
                    status: 'succeeded'
                };
    
                // Save to localStorage
                localStorage.setItem('username', newState.username);
                localStorage.setItem('fullName', newState.fullName);
                localStorage.setItem('email', newState.email);
                localStorage.setItem('phone', newState.phone);
                localStorage.setItem('bio', newState.bio);
                localStorage.setItem('avatar', newState.avatar);
                localStorage.setItem('banner', newState.banner);
                localStorage.setItem('info', JSON.stringify(newState.info));
                localStorage.setItem('isAdmin', JSON.stringify(newState.isAdmin));
    
                return newState;
            })
            .addCase(updateProfile.fulfilled,(state,action)=>{
                const newState = {
                    ...state,
                    ...action.payload,
                    status: 'succeeded'
                };
    
                // Save to localStorage
                localStorage.setItem('username', newState.username);
                localStorage.setItem('fullName', newState.fullName);
                localStorage.setItem('email', newState.email);
                localStorage.setItem('phone', newState.phone);
                localStorage.setItem('bio', newState.bio);
                localStorage.setItem('avatar', newState.avatar);
                localStorage.setItem('banner', newState.banner);
                localStorage.setItem('info', JSON.stringify(newState.info));
                localStorage.setItem('isAdmin', JSON.stringify(newState.isAdmin));
    
                return newState;
            })
    }
});

export const { setProfile, resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
