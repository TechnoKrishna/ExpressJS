const express = require('express')
const path = require('path')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/about', (req, res) => {
    res.send('About US')
})

app.get('/contact', (req, res) => {
    res.send('Contact Us')
})

app.get('/temp', (req, res) => {
    res.json([
        {
          "name": "Alice Johnson",
          "age": 28,
          "gender": "female"
        },
        {
          "name": "Bob Smith",
          "age": 34,
          "gender": "male"
        },
        {
          "name": "Carol White",
          "age": 23,
          "gender": "female"
        },
        {
          "name": "David Brown",
          "age": 45,
          "gender": "male"
        },
        {
          "name": "Eva Green",
          "age": 31,
          "gender": "female"
        }
      ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})