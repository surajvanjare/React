import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:   <> <Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <> <Navbar /><About /></>
    },
    {
      path:"/contact-us",
      element: <> <Navbar /> <Contact /></>
    }
  ])
  return (
    
    <div>
      <h1>This is Navbar</h1>
     
      <RouterProvider router = {router} />
    </div>
     
  )
}

export default App