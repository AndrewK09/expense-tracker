const db = require('../../database/db.js');

module.exports = {
  getExpenses: (col, sort) => {
    return db.any('select * from expenses ORDER BY $1:alias $2:alias', [
      col,
      sort,
    ]);
  },
  addExpense: expense => {
    const { description, category, company, amount, date } = expense;
    return db.none(
      `INSERT INTO expenses (description, category, company, amount, date) 
        VALUES ($1, $2, $3, $4, $5)`,
      [description, category, company, amount, date]
    );
  },
  getChart: filter => {
    return db.any('select $1:alias, amount from expenses', [filter]);
  },
};
