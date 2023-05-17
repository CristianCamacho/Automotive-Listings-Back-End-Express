const express = require('express')
const session = require('express-session')
const routes = require('./routes/index')
const app = express()
const PORT = 4000

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));

app.use(express.json())
app.use('/api/v1/auto-info', routes.autoInfo)
app.use('/api/v1/listings', routes.listings)
app.use('/api/v1/user', routes.user)


app.get('/', (req, res) => {
    res.send('yee')
})

app.listen(PORT, () => {
    console.log(`Express listening on port: ${PORT}`)
})