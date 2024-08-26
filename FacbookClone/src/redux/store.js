import { configureStore } from "@reduxjs/toolkit";
import commentReducer from './slice/commentsSlice';
import editProfileReducer from "./slice/editProfileSlice";

export const store = configureStore({
    reducer: {
        comments: commentReducer,
        editProfile: editProfileReducer,
    }
})
