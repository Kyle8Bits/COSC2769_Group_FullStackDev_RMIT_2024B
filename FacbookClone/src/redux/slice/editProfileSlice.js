
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullname: '',
  email: '',
  phoneNumber: '',
};

const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    updateProfileField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { updateProfileField } = editProfileSlice.actions;
export default editProfileSlice.reducer;
