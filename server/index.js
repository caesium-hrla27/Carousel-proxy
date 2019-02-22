const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./routes.js');



const PORT = 3000;

app.use(morgan('dev'));

app.use(parser.json());

app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('App is listening on port', PORT);
});