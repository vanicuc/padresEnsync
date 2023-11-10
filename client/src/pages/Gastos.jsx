import React from "react";
import { useState, useEffect } from 'react'
import GastosForm from "../components/gastosForm";
import { Link, Outlet } from "react-router-dom";
import ZoomGastos from "../components/ZoomGasto.jsx";

export default function GastosPage() {
  
  const [gastosData, setGastosData] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    getGastosData();
  }, []);
  

  const getGastosData = async () => {
    try {
      let response = await fetch("/api/gastos");
      if (response.ok) {
        let data = await response.json();
        setGastosData(data);
      } else {
        console.log(`Server error: ${response.status} : ${response.statusText}`);
      }
      } catch (error) {
        console.log("Error al obtener gastos:", error);
      }
  };


  const handlegastoClick = async (id) => {
        try {
          const response = await fetch(`/api/gastos/${id}`, {
            method: "GET",
          });
      
          if (response.ok) {
            const gastoData = await response.json(); 
            setShowGastosData(gastoData);
            console.log(id)
            setError("");
          } else {
            console.log(`Error del servidor: ${response.status} : ${response.statusText}`);
            throw new Error(`Error del servidor: ${response.status} : ${response.statusText}`);
          }
        } catch (err) {
          setError(err.message);
        }
      };




    
    const deleteGastos = async (id) => { 
      try {
        const response = await fetch(`/api/gastos/${id}`, { 
          method: "DELETE", 
        });
  
        if (response.ok) { 
          const updatedGasto = gastosData.filter((g) => g.id !== id); 
          setGastosData(updatedGasto); 
          setError(""); // Establece el estado error como una cadena vacía
        } else { 
          console.log(`Error del servidor: ${response.status} : ${response.statusText}`); 
          throw new Error(`Error del servidor: ${response.status} : ${response.statusText}`); 
        }
      } catch (err) { 
        setError(err.message); 
      }
    };
    
return (
  <>
      <div>Gastos</div>
        <GastosForm  
            onGastoAdded={getGastosData}
            />
      <div>Ticket</div>

      <div className="list-group mt-4 shadow">
        {gastosData.map((g) => (
            <div
              className="list-group-item d-flex justify-content-between"
              key={g.id}

              >
                <div 
              onClick={() => handlegastoClick(g.id)}
    
                >
                    {g.description}
                </div> 
{/*                        
                         <button
                          className="btn btn-outline btn-sm"
                          onClick={() => handlegastoClick(g.id)}
                        >Detalle
                        </button>   */}

                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => deleteGastos(g.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                              fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                              </svg>
                        
                        </button> 
            </div>
        ))} 
      </div>


      <ZoomGastos 
            GetZoomGastos={handlegastoClick }
            />
      <Link to="/Gastos/ZoomGastos" >
                
      </Link>
      <Outlet />
  
  </>

  
  );
};
  





// const handlegastoClick = async (id) => {
    //   try {
    //     const response = await fetch(`/api/gastos/${id}`, {
    //       method: "GET",
    //     });
    
    //     if (response.ok) {
    //       const gastoData = await response.json(); 
    //       setShowGastosData(gastoData);
    //       setError("");
    //     } else {
    //       console.log(`Error del servidor: ${response.status} : ${response.statusText}`);
    //       throw new Error(`Error del servidor: ${response.status} : ${response.statusText}`);
    //     }
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };


    // const updateGastos = async (id) => { 
    //   try {
    //     const response = await fetch(`/api/gastos/${id}`, { 
    //       method: "PUT", // Método de la solicitud
    //     });
    //     const data = await response.json(); // Convierte la respuesta en formato JSON
    //     if (!response.ok) throw new Error(data.message); 
  
    //     setGastosData(data); // Actualiza el estado tasks con los datos actualizados
    //     setError(""); // Establece el estado error como una cadena vacía^
    //   } catch (err) { 
    //     setError(err.message); 
    //   }
    // };



















{/* 
      <div>
                         <Link to={`/Gastos/${id}`}>
                          { {description} {dateExpense} }
                        </Link>
                      </div> */}

{/* <div  className={g.approved ? "done" : null}
onClick={() => approvedGastos(g.id)} >
{g.description}
</div> */}


 {/* <button
                          className="btn btn-outline btn-sm"
                          onClick={() => handlegastoClick(g.id)}
                        >Detalle
                        </button>  */}









// <div>
// <Link to={`/Gastos/${s.id}`}>
//               {/* <p>Fecha = {s.dateExpense}</p>
//               <p>Descripción = {s.description}</p>
//               <p>Total = {s.total}</p>
//               <p>Responsable pago  = {s.userId}</p>
//               <p>Aprovado 
//                           {/* {showgastosData.approved} */}
//                       <input
//                               type="checkbox"
                          
//                       />
//               </p> 


// </Link>
// </div>

// <Outlet />

// </>


// );
// };


