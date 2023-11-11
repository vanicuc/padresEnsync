import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ZoomGastos() {
   
    const { id } = useParams();
    const [detallesGasto, setDetallesGasto] = useState(null);


    useEffect(() => {
        const fetchGasto = async () => {
            try {
                const response = await fetch(`/api/gastos/${id}`, {
                    method: "GET",
            
                });
                // console.log("Detalles del Gasto:", data);

                if (response.ok) {
                    const data = await response.json();
                    setDetallesGasto(data);
                  } else {
                    console.log(`Error del servidor: ${response.status} : ${response.statusText}`);
                    throw new Error(`Error del servidor: ${response.status} : ${response.statusText}`);
                  }
                } catch (err) {
                  console.log("Error al obtener detalles del gasto:", err);
                }
        };

        fetchGasto();
    }, [id])

   
    if (!detallesGasto) {
        return <div>Loading...</div>
    }
    const {dateExpense, description, total, userId, approved} = detallesGasto;



    
    return (
    <>
        <div className="list-group mt-4 shadow">

        
            <div >
                <p>Fecha = {dateExpense}</p>
                <p>Descripción = {description}</p>
                <p>Total = {total}</p>
                <p>Responsable pago = {userId}</p>
                <p>Aprovado
                {/* {gastosData.approved} */}
                <input type="checkbox" checked={approved} />
                {/* <input type="checkbox" /> */}
                </p>
            </div>
       
    
       
        </div>

    </>

    );
};



// / const [gastosData, setGastosData] = useState([]);
    // // const [error, setError] = useState("");
    // const { id } = useParams();
   
    // useEffect(() => {
    //   GetZoomGastos();
    // }, [id]);
 
    // const getEachGastosData = async (id) => {
    //     try {
    //       const response = await fetch(`/api/gastos/${id}`, {
    //         method: "GET",
    //       });
      
    //       if (response.ok) {
    //         const gastoData = await response.json(); 
    //         setGastosData(gastoData);
    //         setError("");
    //       } else {
    //         console.log(`Error del servidor: ${response.status} : ${response.statusText}`);
    //         throw new Error(`Error del servidor: ${response.status} : ${response.statusText}`);
    //       }
    //     } catch (err) {
    //       setError(err.message);
    //     }
    //   };