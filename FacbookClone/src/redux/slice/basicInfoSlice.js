import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    phoneNumber: '',
}

const basicInfoSlice = createSlice({
    name: 'basicInfo',
    initialState,
    reducers:{
        updateField: (state,action) => {
            state[action.payload.field] = action.payload.value;
        },
        resetForm: () => initialState,
    },
});

export const {updateField, resetForm} = basicInfoSlice.actions;
export default basicInfoSlice.reducer;