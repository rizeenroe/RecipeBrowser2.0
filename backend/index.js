const express = require('express')
const app = express()
const port = 4000



app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Home Page from Backend!" });
})

app.get('/home', (req, res) => {
  res.json({ message: "Welcome to the Home Page!" });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})