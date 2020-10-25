const express = require('express')
const path = require('path')
const fetch = require('node-fetch')

const app = express()

app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('/api/tweets', (req, res) => {
  const { q } = req.query

  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ...'
    }
  }
  
  fetch(`https://api.twitter.com/1.1/search/tweets.json?q=%23${q}`, options)
    .then(response => response.json()) 
    .then(data => {
      console.log(data)
      res.json(data) 
    })
    .catch(err => console.log(err))
})

app.get('*', (req, res) => {
  console.log('hello')
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

app.listen(5000, () => {
  console.log(`server running on port 5000`)
})