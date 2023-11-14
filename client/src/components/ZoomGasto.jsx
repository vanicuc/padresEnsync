import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ZoomGastos() {

      // Obtener el parámetro de la UR
    const { id } = useParams();
    const [detallesGasto, setDetallesGasto] = useState(null);
    

     // Efecto para obtener detalles del gasto al cargar la página
    useEffect(() => {
        fetchGasto();   
    }, [id]);

    async function fetchGasto() {
        try {
            // Hace una solicitud GET a la API 
            //para obtener los detalles de un gasto específico
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

   // Si no hay detalles, mostrar "Loading..."
    if (!detallesGasto) {
        return <div>Loading...</div>
    }
    // Extraer detalles del gasto
    const {dateExpense, description, total, userId, approved} = detallesGasto;

    

    const handleOnChange =async () => {

        try {
            // Hace una solicitud GET a la API 
            //para obtener los detalles de un gasto específico
            const response = await fetch(`/api/gastos/${id}`, {
                method: "PUT",
        
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
    
   


    // Estructura del componente para mostrar detalles
    return (
    <>
        <div className="list-group mt-4">

        
            <div >
                <p>Fecha = {dateExpense}</p>
                <p>Descripción = {description}</p>
                <p>Total = {total}</p>
                <p>Responsable pago = {userId}</p>
                <p>Aprovado
                <input type="checkbox"  id="approved" name="approved" checked={approved} onClick={handleOnChange}  />

                </p>
            </div>
       
    
       
        </div>

    </>

    );
};




