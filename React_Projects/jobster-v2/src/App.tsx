import { useState } from 'react'
import './App.css'
import 'normalize.css'
import Landing from './components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Error from './pages/Error'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="Landing" element={<Landing/>} />
                <Route path="Register" element={<Register/>} />
                <Route path="*" element={<Error/>} />

            </Routes>
    </BrowserRouter>
  )
}

export default App
