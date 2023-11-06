var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const gastoMustExist = require("../guards/gastoMustExist");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


//define una rura HTTP get en l araiz del api
router.get("/", async (req, res) => {
  res.send("Welcome to the API");
  try {
    const results = await db("SELECT * FROM gastos_parentales;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});


// GET one student
router.get("/:id", function(req, res, next) {
  const idExpense = req.params.id;
  //const { id } = req.params;
  db(`SELECT * FROM gastos_parentales WHERE id = ${idExpense } ;`)
    .then(results => {
      res.send(results.data[0]);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new student into the DB
router.post("/", async function(req, res, next) {
  const { date, description, total } = req.body;
  try {
    await db(
      `INSERT INTO students (date, description, total) VALUES ('${date}', '${description}', '${total}');`
    );
    const results = await db("SELECT * FROM gastos_parentales ");

    res.status(201).send({ message: "New expense created correctly" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a student from the DB
router.delete("/:id", async function(req, res, next) {
  const idExpense = req.params.id;
  try {
    await db(`DELETE FROM students WHERE id = ${idExpense} ;`);
    res.send({ message: "Student was deleted successfully" });

  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
