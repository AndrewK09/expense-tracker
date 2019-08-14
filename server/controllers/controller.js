const model = require('../models/model.js');

module.exports = {
  getExpenses: (req, res) => {
    model
      .getExpenses()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  addExpense: (req, res) => {
    model
      .addExpense(req.body)
      .then(result => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
