import React,{ useState } from 'react'
import Search from './components/Search'
import initialDetails from './components/InitialDetails'
import './App.css'

function App() {


  return (
    <>
      <div className="tc bg-green ma0 pa4 min-vh-100" >
        <Search details={initialDetails}/>
      </div>
    </>
  )
}

export default App
