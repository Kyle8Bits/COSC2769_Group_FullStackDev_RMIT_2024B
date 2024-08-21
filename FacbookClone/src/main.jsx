import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/index.css'

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <NotFound />,
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
    path: "/:username",
    element: <Profile/>,
    errorElement: <NotFound />,
    children: [
      {
        path: "posts",
        element: <ProfilePosts/>
      },
      {
        path: "about",
        element: <ProfileAbout/>
      },     
      {
        path: "friends",
        element: <ProfileFriends/>
      },
      {
        path: "photos",
        element: <ProfilePhotos/>
      }
    ]
  }, 


  // {
  //   path: "/",
  //   element: <Login/>,
  //   errorElement: <NotFound />,
  // },

  // {
  //   path: "/profile",
  //   element: <Profile/>,
  //   errorElement: <NotFound />,
  // },

  {
    path: "/group",
    element: <GroupFeed/>,
    errorElement: <NotFound />,
  },  
 
  
]);


const root = createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
