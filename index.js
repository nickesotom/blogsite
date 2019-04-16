
const express = require('express');
const scrape = require('./scrape');
const db = require('./db');
const app = express();


app.get('/', (req, res) => {
  scrape.fetchPosts().then(posts => {
    res.json(posts)    
  })  
})
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})











