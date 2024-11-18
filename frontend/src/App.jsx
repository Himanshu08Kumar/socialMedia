import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
