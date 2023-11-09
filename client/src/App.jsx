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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gastos" element={<Gastos />} />
    </Routes>
    
    </>
  )
}

export default App
