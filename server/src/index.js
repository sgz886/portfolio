const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const routers = require('./router')


const app = express()
const port = 3002

app.use(cors())
app.use(bodyParser.json())
app.use(routers)

app.listen(port, () => {
  console.log(`Mock API is running at http://localhost:${port}`)
})