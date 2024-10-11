import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Pastes from './Component/Pastes'
import ViewPaste from './Component/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path : "/pastes",
      element : 
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path : "/pastes/:id",
      element : 
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
