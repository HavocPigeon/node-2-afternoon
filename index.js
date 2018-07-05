const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const pC = require('./products_controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const port = process.env.port || 4000;
app.listen(port, () => console.log(`server is listening on port ${port}`));

//***set db so it can be accessed later
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
  }).catch(error => {
    console.log('-------------- error', error);
  });

  app.post('/api/products', pC.create);
  app.get('/api/products', pC.getAll);
  app.get('/api/products/:id', pC.getOne);
  app.put('/api/products/:id', pC.update);
  app.delete('/api/products/:id', pC.delete);
