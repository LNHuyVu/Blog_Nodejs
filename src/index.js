// git remote remove origin
const path=require('path')
const morgan = require('morgan');
const express = require('express');
// const handlebars = require('express-handlebars');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route =require('./routes');
//config puclic
app.use(express.static(path.join(__dirname,'public')));

//HTTP logger
app.use(morgan('combined'));
//Templates engine
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on at http://localhost:${port}`)
})