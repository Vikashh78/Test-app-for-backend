// Importing the Express library
const express = require('express')
require('dotenv').config()

// Creating an Express application
const app = express()

// Defining the port number on which the server will run (free port)
const port = 4000

// Defining the first route → GET request on '/'
// When someone visits http://localhost:4000/
// this callback function runs
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/insta', (req, res) => {
    res.send('srma.vikash')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

// Starting the server on the given port
// When server starts, this function runs
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
