// Importación de componentes y estilos
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gastos from "./pages/Gastos.jsx";
import NoPage from "./pages/NoPage.jsx";
import ZoomGastos from "./components/ZoomGasto.jsx";




import './App.css'

function App() {

  return (
    <>
    
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Gastos">Gastos</Link></li>
     </ul>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
         rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
         crossOrigin="anonymous"></link>
    </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gastos" element={<Gastos />}>
           <Route path='/Gastos/:id' element={<ZoomGastos />} /> 
     </Route>



      <Route path="*" element={<NoPage />} />
    </Routes>
    
    </>
  )
}

export default App
