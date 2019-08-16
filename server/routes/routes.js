const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/data/:col/:sort', controller.getExpenses);
router.get('/chart/:filter', controller.getChart);
router.post('/', controller.addExpense);

module.exports = router;
