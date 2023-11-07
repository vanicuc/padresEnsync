import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function gastosForm({ gastos }) {

// //state data siempre primero data con dos elementos uno la const y tro lo que se va a cambiar
// const [gastos, setGastos] = useState({
//     dateExpense: "",
//     description: "",
//     total: 0,
//     userId: 0,
//     approved: false
//   }); 
  
// //evento que se usa para cambiar la cont en las otrs escriben e por event
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;

// //aca decimeos como va a cambiar la const igual a project["i"] i igual valor
//     setGastos((state) => ({
//       ...state,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addGastos(gastos);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Fecha
//           <input
//             name="dateExpense"
//             value={gastos.dateExpense}
//             onChange={(e) => handleInputChange(e)}
//           />
//         </label>

//         <label>
//           Description
//           <textarea
//             name="description"
//             value={gastos.description}
//             onChange={(e) => handleInputChange(e)}
//           />
//         </label>

//         <label>
//           Total
//           <input
//             name="total"
//             value={gastos.total}
//             onChange={(e) => handleInputChange(e)}
//           />
//         </label>

//         <label>
//            a cargo
//           <input
//             name="userId"
//             value={gastos.userId}
//             onChange={(e) => handleInputChange(e)}
//           />
//         </label>

//         <button>Submit</button>
//       </form>
//     </div>
//   );
}

export default gastosForm;


