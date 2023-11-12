// Importación de estilos y bibliotecas:
import './Gastos.css'
import React from "react";
import { useState, useEffect } from 'react'
import GastosForm from "../components/gastosForm";
import ZoomGastos from "../components/ZoomGasto";
import { Outlet, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export default function GastosPage() {
  // Estado local
  const [gastoConcreto, setGastoConcreto] = useState("");
  const [gastosData, setGastosData] = useState([]);
  const [error, setError] = useState("");
  const [ShowgastosData, setShowGastosData] = useState({
    dateExpense: "",
    description: "",
    total: 0,
    userId: 1,
    approved: false
    
});

// Efecto para obtener datos de gastos al cargar la página
  useEffect(() => {
    getGastosData();
  }, []);


  //Obtener datos de gastos desde la API
  const getGastosData = async () => {
    try {
       // Hace una solicitud GET a la API :datos de los gastos
      let response = await fetch("/api/gastos");
      if (response.ok) {
         // Si es exitosa, actualiza el estado con los datos de los gastos
        const gastoData = await response.json();
        console.log(gastoData); 
        setGastosData(gastoData);
      
      } else {
        console.log(`Server error: ${response.status} : ${response.statusText}`);
      }
      } catch (error) {
        console.log("Error al obtener gastos:", error);
      }
  };

// Función para manejar clic en un gasto y obtener detalles
  const handlegastoClick = async (id) => {
        try {
          // / Hace una solicitud GET a la API un gasto específico
          const response = await fetch(`/api/gastos/${id}`, {
            method: "GET",
          });
          
          if (response.ok) {
            const gastoData = await response.json(); 
            setShowGastosData(gastoData);
            console.log(id);
            console.log(gastosData);
            setError("");
            // ZoomGastos();

          } else {
            console.log(`Error del servidor: ${response.status} : ${response.statusText}`);
            throw new Error(`Error del servidor: ${response.status} : ${response.statusText}`);
          }
        } catch (err) {
          setError(err.message);
        }
      };




  // Función para eliminar un gasto   
    const deleteGastos = async (id) => { 
      try {
         // Hace una solicitud DELETE a la API 
         //para eliminar un gasto específico
        const response = await fetch(`/api/gastos/${id}`, { 
          method: "DELETE", 
        });
  
        if (response.ok) { 
          const updatedGasto = gastosData.filter((g) => g.id !== id); 
          setGastosData(updatedGasto); 
          setError(""); 
        } else { 
          console.log(`Error del servidor: ${response.status} : ${response.statusText}`); 
          throw new Error(`Error del servidor: ${response.status} : ${response.statusText}`); 
        }
      } catch (err) { 
        setError(err.message); 
      }
    };
    

// Estructura del componente
    return (
  <>
  <div className='caja c1'> 
    {/* <meta charSet="utf-8" /> */}
    dia:xx/xx/xx custodia:xxxxx  Menor xxxx xxxxx 
  </div>

  <section className='flex-container'>

    <div className='caja c3'>Detalle
      <Outlet ></Outlet>
    </div>

      <div className="caja c2" > Registro de Gastos

          <ul className="list-group list-group-flush">
             <li className="list-group-item">

              {gastosData.map((gasto) => (
                    <div  onClick={() => handlegastoClick(gasto.id)}
                          //  className="list-group-item d-flex justify-content-between"
                           className="list-group-item d-flex justify-content-between"
                          key={gasto.id}>
                        <div className="nolink" onClick={() => handlegastoClick(gasto.id)}>
                            <Link to={`/gastos/${gasto.id}`}>
                                {gasto.description}
                              </Link>
                        </div> 
                              <button
                              className="btn btn-outline-secondary btn-sm"
                                onClick={() => deleteGastos(gasto.id)} >
                                          <i className="fa-solid fa-trash"></i>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                          fill="#808080" className="bi bi-trash3" viewBox="0 0 16 16">
                                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                          </svg>
                              </button> 
                    </div>
                ))
              }
            </li >
          </ul>
         </div>
    
        </section>
        <div  className="caja c4">
        Añadir Desglose Económico
          <GastosForm  
              onGastoAdded={getGastosData}
              />
    </div>

  </>
  );
};




  
<div>
{/* 
  {gastoConcreto && (
  <ZoomGastos 
  
    dateExpense={gastoConcreto.dateExpense}
    description={gastoConcreto.description}
    total={gastoConcreto.total}
    userId={gastoConcreto.userId}
    approved={gastoConcreto.approved}
    id={gastoConcreto.id}
    />
)}   */}
  
  </div>

  {/* <div>
  Gastos
  <div>
    {gastoConcreto.map((gasto) => (
      <div key={gasto.id}>
        <Link to={`/Gastos/${gasto.id}`}>
          {gasto.description} {gasto.total}
        </Link>
      </div>
    ))}
  </div> 
  
</div> */}









// <div className="list-group mt-4 shadow">
// {Object.entries(gastoConcreto).map(([key, value]) => (
//   <div key={key}>
//     <strong>{key}:</strong> {value}
//   </div>
// ))}
// </div>








// return (
//   <>
//   <body>
//     <head> 
//       <title>Hijo/a: Luca Sentis</title>
//     </head>

//         <div className="list-group mt-4 shadow">
//           <conteiner>
//               {gastosData.map((gasto) => (
//               <div  onClick={() => handlegastoClick(gasto.id)}
//                 className="list-group-item d-flex justify-content-between"
//                 key={gasto.id}>
//               <div onClick={() => handlegastoClick(gasto.id)}>
//                 {gasto.description}
//               </div> 
//                           <button
//                             className="btn btn-outline-danger btn-sm"
//                             onClick={() => deleteGastos(gasto.id)} >
//                                 <i className="fa-solid fa-trash"></i>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
//                                 fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
//                                 <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
//                                 </svg>
      
//                           </button> 
//               </div>
//           ))
//           }
//           </conteiner>
//         </div>
//         <aside>
//           <GastosForm  
//               onGastoAdded={getGastosData}
//               />
//         </aside>
//         <article></article>
//         <footer></footer>
//     </body>
//   </>
  
//   );
// };


