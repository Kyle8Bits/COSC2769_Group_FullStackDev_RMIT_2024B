import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    commentList: [    
        {
            id: 1,
            user: { name: 'John Doe', avatar: 'https://via.placeholder.com/40' },
            text: 'This is a great post!',
            time: '2 hours ago',
        },
        {
            id: 2,
            user: { name: 'Jane Smith', avatar: 'https://via.placeholder.com/40' },
            text: 'Thanks for sharing!',
            time: '1 hour ago',
        },
    ],
}
     
  
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{
        increase(state,action){
            state.commentList.push(action.payload);
        },
    },
});

export const {increase} = commentsSlice.actions;
export default commentsSlice.reducer;