import { useState, useEffect } from "react";


function GastosForm(props) {

// //state data siempre primero data con dos elementos uno la const y tro lo que se va a cambiar
const [gastos, setGastos] = useState({
    dateExpense: "",
    description: "",
    total: 0,
    userId: 0,
    approved: false
}); 
    
//evento que se usa para cambiar la cont en las otrs escriben e por event
const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

  //aca decimeos como va a cambiar la const igual a project["i"] i igual valor
  setGastos((state) => ({
              ...state,
            [name]: value,
          }));
};

const handleSubmit = (e) => {
        e.preventDefault();
        addGastos();
};



const addGastos = async () => {
  try {
    const response = await fetch("/api/gastos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: gastos }), // Cuerpo de la solicitud en formato JSON
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
    <div className="list-group mt-4 shadow">
      <form onSubmit={handleSubmit}>
        <label>
          Fecha
            <input
                type="date"
                name="dateExpense"
                value={gastos.dateExpense}
                onChange={(e) => handleInputChange(e)}
            />
        </label>

        <label>
          Description
            <textarea
                name="description"
                value={gastos.description}
                onChange={(e) => handleInputChange(e)}
            />
        </label>

        <label>
          Total
            <input
                name="total"
                value={gastos.total}
                onChange={(e) => handleInputChange(e)}
            />
        </label>

        <label>
           Responsable pago
            <input
                name="userId"
                value={gastos.userId}
                onChange={(e) => handleInputChange(e)}
            />
        </label>

        <button>Add</button>
      </form>
    </div>
  );
}

export default GastosForm;


