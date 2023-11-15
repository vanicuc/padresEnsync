import { useState, useEffect } from "react";

function GastosForm({onGastoAdded}) {

// const [error, setError] = useState("");
const [gastos, setGastos] = useState({
    dateExpense: "",
    description: "",
    total: 0,
    userId: 1,
    approved: false
}); 
    
//evento que se usa para cambiar la cont en las otrs escriben e por event
const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value)

  //aca decimeos como va a cambiar la const igual a project["i"] i igual valor
  setGastos((state) => ({
              ...state,
            [name]: value,
          }));
};

// Maneja el envío del formulario para agregar un nuevo gasto
const handleSubmit = async (e) => {
        e.preventDefault();
        // Realiza una solicitud para agregar un nuevo gasto a la API
        await addGastos();
        // Llama a la función proporcionada para recargar los datos de los gastos
        onGastoAdded();
        // Reinicia el estado del formulario
        setGastos({
          dateExpense: "",
          description: "",
          total: 0,
          userId: 1,
          approved: false
        });
      
};


// Agrega un nuevo gasto mediante una solicitud a la API
const addGastos = async () => {
  try {
    const response = await fetch("/api/gastos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gastos), // Cuerpo de la solicitud en formato JSON
    });

    if (response.ok) {
      const data = await response.json(); // Convierte la respuesta en formato JSON
      console.log(data)
    } else {
      console.log(`Error en el servidor: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error al agregar gasto:", error);
  }
};
  


  return (
  
    
    <div className="gastos-form">
      <form onSubmit={handleSubmit}>
        <div className="formDescription">
          Description
                <textarea
                    name="description"
                 
          
                    value={gastos.description}
                    onChange={(e) => handleInputChange(e)}
                />
        </div>
        
        <div className="formFecha">
          Fecha
                <input
                    type="date"
                    name="dateExpense"
                    value={gastos.dateExpense}
                    onChange={(e) => handleInputChange(e)}
                />
        </div>


        <div className="formTotal">
          Total
                <input
                    name="total"
                    value={gastos.total}
                    onChange={(e) => handleInputChange(e)}
                />
        </div>

        <div className="formResponsable">
          Responsable pago
                  <select name="userId" onChange={handleInputChange}
                                               value={gastos.userId}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  </select>
        </div>
        <div>
        <button className="btn btn-grey">Add</button>
        </div>
      </form>
    </div>
 
  );

 
}
 


export default GastosForm;




