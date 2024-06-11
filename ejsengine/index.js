const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index', {title: 'EJS Engine'});
});

const students = [{name: "krishna", age:20},{name: "Ragnar", age:26},{name: "Bjorn", age:22}]

app.get('/about', function (req, res) {
    res.render('pages/about', {title: 'EJS Engine', students: students});
});

app.get('*', function (req, res) {
    res.render('pages/error');
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  })