const express = require('express')
const app = express()
const router = require("./routers/root.router")
app.use(express.json())

app.use(router)

const port = 3000


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