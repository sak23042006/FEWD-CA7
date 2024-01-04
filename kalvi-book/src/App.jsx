import { useState } from 'react'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import Navbar from './components/navigation/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
