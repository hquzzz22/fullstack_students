const express = require('express')
const app = express()
const router = require("./routers/root.router")
app.use(express.json())

app.use(router)

const port = 3000

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



// chuyển req và res và Json để chúng ta tiện thao tác 

app.get('/', (req, res) => {
  res.send('Hello World cac ban!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// setup sequelize 
const {sequelize} = require('./Model')
sequelize.sync({alter: true})