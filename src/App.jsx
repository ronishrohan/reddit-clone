import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Submit from './pages/submit/Submit'
import Subreddit from './pages/subreddit/Subreddit'
import Root from './Root'
import PostPage from './pages/postpage/PostPage'
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
            },
            {
                path: "/r/:subreddit",
                children: [
                    {
                        path: "/",
                        element: <Subreddit></Subreddit>,
                    },
                    {
                        path: ":username/:postslug",
                        element: <PostPage></PostPage>
                    }
                ]
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