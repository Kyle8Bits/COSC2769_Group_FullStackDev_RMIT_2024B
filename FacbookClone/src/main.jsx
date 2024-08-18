import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';



import About from './pages/profilePages/About.jsx';
import Friends from './pages/profilePages/Friends.jsx';
import Groups from './pages/profilePages/Groups.jsx';
import Post from './pages/profilePages/Post.jsx';
import NotFound from './pages/NotFound.jsx';


const router = createBrowserRouter([
  {
    path: "/profile/post",
    element: <Post />,
    errorElement: <NotFound />,
  },
  {
    path: "profile/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "profile/friends",
    element: <Friends />,
    errorElement: <NotFound />,
  },  
  {
    path: "profile/groups",
    element: <Groups />,
    errorElement: <NotFound />,
  },  
  
]);

const root = createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
