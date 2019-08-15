const db = require('../../database/db.js');

module.exports = {
  getExpenses: (col, sort) => {
    return db.any('select * from expenses ORDER BY $1:alias $2:alias', [
      col,
      sort,
    ]);
  },
  addExpense: expense => {
    const { description, category, company, amount } = expense;
    return db.none(
      `INSERT INTO expenses (description, category, company, amount) 
        VALUES ($1, $2, $3, $4)`,
      [description, category, company, amount]
    );
  },
};
