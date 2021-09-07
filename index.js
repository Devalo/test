const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const imageRouter = require('./imageRouter')

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())
app.use(cors())


app.use('/image', imageRouter)


const PORT = 5000

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})
