import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './css/index.css'
import {store} from './redux/store'

import NotFound from './NotFound'
import Login from './pages/Login'
import GroupFeed from './pages/GroupFeed'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import ProfileAbout from './components/ProfileComponents/ProfileAbout';
import ProfilePosts from './components/ProfileComponents/ProfilePosts';
import ProfileFriends from './components/ProfileComponents/ProfileFriends';
import ProfilePhotos from './components/ProfileComponents/ProfilePhotos';
import NewFeed from './pages/NewFeed';
import Admin from './pages/Admin';
import AdminSuspend from './components/AdminComponents/AdminSuspend';
import AdminApprove from './components/AdminComponents/AdminApprove';
import AdminResume from './components/AdminComponents/AdminResume';
import EditProfile from './pages/EditProfile';
import BasicInfo from './pages/BasicInfo';
import UpdatePost from './components/shared/UpdatePost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <NotFound />,
  },

  {
    path:"/register",
    element: <BasicInfo/>,
    errorElement: <NotFound/>
  },
  
  {
    path: "/password_recovery",
    element: <ForgotPassword/>,
    errorElement: <NotFound />,
  }, 

  {
    path: "/change_password",
    element: <ChangePassword/>,
    errorElement: <NotFound />,
  }, 

  {
    path: "/home",
    element: <NewFeed/>,
    errorElement: <NotFound/>
  },

  {
    path: "/edit/:postId",
    element:<UpdatePost/>,
    errorElement: <NotFound/>
  },


  {
    path: "/:username",
    element: <Profile/>,
    errorElement: <NotFound />,
    children: [
      {
        path: "posts",
        element: <ProfilePosts/>,
        errorElement: <NotFound />,
      },
      {
        path: "about",
        element: <ProfileAbout/>,
        errorElement: <NotFound />,
      },     
      {
        path: "friends",
        element: <ProfileFriends/>,
        errorElement: <NotFound />,
      },
      {
        path: "photos",
        element: <ProfilePhotos/>,
        errorElement: <NotFound />,
      },
      {
        path: "edit",
        element: <EditProfile/>,
        errorElement: <NotFound/>,
      },
    ]
  }, 



  {
    path: "/:username/edit/change_pass",
    element: <ChangePassword/>,
    errorElement: <NotFound />,
  },
   
  {
    path: "/admin",
    element: <Admin/>,
    errorElement: <NotFound />,
    children: [
      {
        path: "suspend",
        element: <AdminSuspend/>,
        errorElement: <NotFound />,
      },
      {
        path: "approve",
        element: <AdminApprove/>,
        errorElement: <NotFound />,
      },
      {
        path: "resume",
        element: <AdminResume/>,
        errorElement: <NotFound />,
      }
    ]
  },

  {
    path: "/group",
    element: <GroupFeed/>,
    errorElement: <NotFound />,
  },  
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);