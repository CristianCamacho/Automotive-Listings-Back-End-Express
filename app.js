const express = require('express')
const routes = require('./routes/index')
const app = express()
const PORT = 3000

app.use(express.json())
app.use('/autoInfo', routes.autoInfo)

app.get('/', (req, res) => {
    res.send('yee')
})

app.listen(PORT, () => {
    console.log(`Express listening on port: ${PORT}`)
})