const db = require('../../database/db.js');

module.exports = {
  getExpenses: () => {
    return db.any('select * from expenses');
  },
  addExpense: expense => {
    const { description, category, company, amount } = expense;
    console.log('expense :', expense);
    return db.any(
      `INSERT INTO expenses (description, category, company, amount) 
        VALUES ($1, $2, $3, $4)`,
      [description, category, company, amount]
    );
  },
};

// {
//   "description": "How to javascript 101 for dummies",
//   "category": "Education",
//   "company": "Amazon",
//   "amount": "234"
// }
