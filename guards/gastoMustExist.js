const db = require("../model/helper");

async function gastoMustExist(req, res, next) {
  const { id } = req.params;
  try {
    const results = await db(`SELECT * FROM gastos_parentales WHERE id = ${id};`);
    if (results.data.length) next();
    else res.status(404).send({ message: " expense not found" });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = gastoMustExist;
