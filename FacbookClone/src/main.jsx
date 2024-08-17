import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';



import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
    errorElement: <NotFound />
  },
  
  
]);

const root = createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
