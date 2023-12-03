import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login'; 
import Main from './components/main';
import Verification from './components/Verfication'
import Registration from './components/Registration'
import Blogpage from './components/blogmain.js'
import Blog from './components/blog.js'
import { ProvideAuth } from './auth.js';
import Profile from './components/profile.js'
import ProfileSecond from './components/ProfileSecond.js'
import Editor from './components/Editor.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Main/>,
      },
      {
        path: "Login",
        element: <Login/>
      },
      {
        path: "verification",
        element: <Verification/>
      },
      {
        path: "Registration",
        element: <Registration/>
      },
      {
        path: "Blogpage",
        element: <Blogpage/>
      },
      {
        path: "Blog",
        element: <Blog/>
      },
      {
        path: "Profile",
        element: <Profile/>
      },
      {
        path: "ProfileSecond",
        element: <ProfileSecond/>
      }
      ,{
        path:"Editor",
        element:<Editor/>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvideAuth>
    <RouterProvider router={router}/>
    </ProvideAuth>
  </React.StrictMode>
);

