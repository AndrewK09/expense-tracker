const db = require('../../database/db.js');

module.exports = {
  getExpenses: () => {
    return db.any('select * from expenses ORDER BY id DESC');
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
