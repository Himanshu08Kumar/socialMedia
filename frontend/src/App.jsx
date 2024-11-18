import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Post from './components/Post'
import PostList from './components/PostList'

const App = () => {
  const router = createBrowserRouter(
    [
      {
      path: '/',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/posts',
      element:<PostList/>
    }
  ]
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
