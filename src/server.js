const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const path = require('path')

app.use(cors())


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))


app.use(express.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(routes)

app.listen(3000, () => console.log(`Server is ruinning in port 3000`));


