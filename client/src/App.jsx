import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gastos from "./pages/Gastos.jsx";
import './App.css'

function App() {

  return (
    <>
    <div></div>
    <div>
        <Link to="/">Home</Link>
        <Link to="/Gastos">Gastos</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gastos" element={<Gastos />} />
    </Routes>
    
    </>
  )
}

export default App
