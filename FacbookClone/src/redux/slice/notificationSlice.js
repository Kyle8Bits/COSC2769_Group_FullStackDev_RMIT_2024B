import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch all notifications using Axios
export const fetchNotifications = createAsyncThunk(
    'notification/fetchNotifications',
    async (currentUser, { rejectWithValue }) => {
        console.log(currentUser)
      try {
        const response = await axios.get('http://localhost:1414/notification/getNotification', {
          params: { username: currentUser.username }  // Pass as query parameter
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
const initialState = {
    notifications: [],
    status: 'idle',
    error: null,
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find(n => n._id === notificationId);
      if (notification) {
        notification.read = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || action.error.message;
      });
      
  }
});

export const { markAsRead } = notificationSlice.actions;

export default notificationSlice.reducer;
