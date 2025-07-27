
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/layout/Layout'


function App() {
 
 const router = createBrowserRouter([

  {path:'', element:<Layout/>,children:[

    {path:'', element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'about', element:<About/>},
    {path:'port', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
    {path:'*', element:<h1>404 Not Found Page</h1>},
  ]}
  ])

  return (
    <>
    

       <RouterProvider router = {router} />

    </>
  )
}

export default App
