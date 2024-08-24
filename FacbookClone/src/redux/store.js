import { configureStore } from "@reduxjs/toolkit";
import commentReducer from './slice/commentsSlice';

export const store = configureStore({
    reducer: commentReducer,
})
