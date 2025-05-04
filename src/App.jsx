import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Pastes from './Components/Pastes'
import ViewPaste from './Components/ViewPaste'


const router = createBrowserRouter(
  [
    {
      path : "/",
      element : 
        <div>
            <NavBar/>
            <Home/>
        </div>
    },
    {
      path : "/pastes",
      element : 
        <div>
          <NavBar/>
          <Pastes/>
        </div>
    },
    {
      path : "/pastes/:id",
      element : 
        <div>
          <NavBar/>
          <ViewPaste/>
        </div>
    },
   

  ]
)

const App = () => {
  return (
    <div className='bg-black'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
