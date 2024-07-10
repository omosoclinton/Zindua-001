import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CountryProfile from './components/CountryProfile.jsx';
import CountriesContainer from './components/CountriesContainer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <div><h1>Page not found</h1></div>
  },
  {
    path:'/countries',
    element:<CountriesContainer/>
  },
  {
    path:'/country-profile',
    element:<CountryProfile/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
