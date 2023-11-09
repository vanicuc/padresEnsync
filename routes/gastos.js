var express = require('express');
var router = express.Router();
const db = require("../model/helper");

//NO ME FUNCIONA EL GUARD!!!!!
const gastoMustExist = require("../guards/gastoMustExist");



router.get("/", async (req, res) => {
  // Send back the full list of items
  try {
    const results = await db("SELECT * FROM gastos;");
const gastos = results.data;

    if (gastos.length > 0) {
      gastos.forEach(gasto => {
        // Formatea la fecha en el formato deseado (por ejemplo, "YYYY-MM-DD")
        if (gasto.dateExpense) {
          const dateObj = new Date(gasto.dateExpense);
          gasto.dateExpense = dateObj.toISOString().split('T')[0];
        }
      });

      res.send(gastos);
    } else {
      res.status(404).send("No se encontraron gastos.");
    }
  } catch (err) {
    console.error("Error al agregar gasto:", err);
    res.status(500).send(err.message);
  }
});


// GET one gasto

router.get("/:id",  gastoMustExist, function(req, res) {
  const { id } = req.params;
  db(`SELECT * FROM gastos WHERE id = ${id};`)
    .then(results => {
      const gasto = results.data[0];

      // Formatea la fecha en el formato deseado (por ejemplo, "YYYY-MM-DD")
      if (gasto) {
        if (gasto.dateExpense) {
          const dateObj = new Date(gasto.dateExpense);
          gasto.dateExpense = dateObj.toISOString().split('T')[0];
        }

        res.send(gasto);
      } else {
        res.status(404).send("Gasto no encontrado");
      }
    })
    .catch(err => res.status(500).send(err));
});





// INSERT a new gasto into the DB
router.post("/", async function(req, res) {
  
  const {text } = req.body;
  const { dateExpense, description, total, userId } = text;
 
  try {
    await db(
      // `INSERT INTO gastos (dateExpense, description, total, userId) VALUES ('${dateExpense}', '${description}', '${total}', '${userId}');`
      `INSERT INTO gastos (dateExpense, description, total, userId, approved) VALUES ('${text.dateExpense}', '${text.description}', ${text.total}, ${text.userId}, 0 );`
    
      );
    const results = await db("SELECT * FROM gastos");

    res.status(201).send({ message: "New expenses created correctly" });
  } catch (err) {
    res.status(500).send(err);
  }
});




router.put("/:id",  gastoMustExist, async (req, res) => {
  const id = req.params.id;
  const { total, description, dateExpense } = req.body;
  const updateFields = [];

  if (total !== undefined) {
    updateFields.push(`total = ${total}`);
  }

  if (description !== undefined) {
    updateFields.push(`description = '${description}'`);
  }

  if (dateExpense !== undefined) {
    updateFields.push(`dateExpense = '${dateExpense}'`);
  }

  if (updateFields.length === 0) {
    res.status(400).send("Debes proporcionar al menos un campo para actualizar.");
  } else {
    try {
      const updateQuery = `UPDATE gastos SET ${updateFields.join(", ")} WHERE id = ${id}`;
      await db(updateQuery); // Supongamos que db es la función para interactuar con la base de datos
      const results = await db("SELECT * FROM gastos");

     
      res.send(results.data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

// DELETE a gasto from the DB
router.delete("/:id", gastoMustExist,  async function(req, res, next) {
  const { id } = req.params;
  try {
    await db(`DELETE FROM gastos WHERE id = ${id} ;`);
    res.send({ message: "Expenses was deleted successfully" });

  } catch (err) {
    res.status(500).send(err);
  }
});



module.exports = router;



// router.put("/:id", async (req, res) => {
//   const {  total, description, dateExpense } = req.body;
//   const id = req.params.id;

//   try {
//    await db(
//       `UPDATE gastos SET total = ${total} WHERE  id = ${id} ` 
      
//     );
//     const results = await db("SELECT * FROM gastos");
//     res.send(results.data);
//   } catch (err) {
//     res.status(500).send(err);
//   }

// });