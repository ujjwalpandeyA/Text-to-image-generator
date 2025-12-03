import React from 'react'
import ImageGenerator from './Components/ImageGenerator'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/imgGenerator' element={<ImageGenerator />}></Route>
      </Routes>
    </>
  )
}

export default App