import { configureStore } from "@reduxjs/toolkit";
import commentReducer from './slice/commentsSlice';
import loginReducer from './slice/loginSlice'
import profileReducer from './slice/profileSlice';
import friendReducer from './slice/friendSlice'
import registerReducer from './slice/registerSlice'
import postReducer from "./slice/postSlice";
import editProfileReducer from "./slice/editProfileSlice";
import otheruserReducer from "./slice/otheruserSlice";
import searchReducer from './slice/searchSlice'
import banUserReducer from './slice/banUserSlice'
import activeUserReducer from './slice/activeUserSlice'
import updatePostReducer from './slice/editPostSlice'
import groupReducer from './slice/groupSlice';
import approveGroupReducer from "./slice/approveGroupSlice";

export const store = configureStore({
    reducer:{
        comment: commentReducer,
        auth: loginReducer,
        profile: profileReducer,
        friends: friendReducer,
        register: registerReducer,
        posts: postReducer,
        editProfile: editProfileReducer,
        otherUser: otheruserReducer,
        search:searchReducer,
        ban: banUserReducer,
        active: activeUserReducer,
        editPost: updatePostReducer,
        group: groupReducer,
        groupRequests: approveGroupReducer
    }
    
})
