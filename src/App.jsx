import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Submit from './pages/submit/Submit'
import Root from './Root'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/submit",
                element: <Submit></Submit>
            }
        ]
    },
    
])

function App() {
  return (
    
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App