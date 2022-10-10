const express = require('express')
const routes = require('./routes/index')
const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api/v1/auto-info', routes.autoInfo)
app.use('/api/v1/listings', routes.listings)

app.get('/', (req, res) => {
    res.send('yee')
})

app.listen(PORT, () => {
    console.log(`Express listening on port: ${PORT}`)
})