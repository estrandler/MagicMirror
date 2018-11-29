const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

require('./routes/routes')(app)

app.use(cors())
app.use(bodyParser.json())
//app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))