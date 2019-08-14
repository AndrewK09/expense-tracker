const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes/routes.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/expenses', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
