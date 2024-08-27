import { configureStore } from "@reduxjs/toolkit";
import commentReducer from './slice/commentsSlice';
import loginReducer from './slice/loginSlice'
import profileReducer from './slice/profileSlice';
import friendReducer from './slice/friendSlice'
import basicInfoReducer from './slice/basicInfoSlice'
export const store = configureStore({
    reducer:{
        comment: commentReducer,
        auth: loginReducer,
        profile: profileReducer,
        friends: friendReducer,
        basicInfo: basicInfoReducer,
    }
    
})
