const model = require('../models/model.js');

module.exports = {
  getExpenses: (req, res) => {
    const { col, sort } = req.params;
    model
      .getExpenses(col, sort)
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
  getChart: (req, res) => {
    const { filter } = req.params;
    model
      .getChart(filter)
      .then(result => {
        let chart = convertData(result, filter);
        res.send(chart);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const convertData = (expenses, filter) => {
  let storage = {};
  let colors = [];

  for (let col of expenses) {
    let label = col[filter];
    let value = col.amount;

    if (!storage[label]) {
      storage[label] = Number(value);
      colors.push(getRandomColor());
    } else {
      storage[label] += Number(value);
    }
  }
  return storage;
};
