
const express = require('express');
const scrape = require('./scrape');



const app = express();



app.get('/', (req, res) => {
  res.json({
    message: 'yeet'
  })
})

app.get('/blogs', (req, res) => {
  scrape
    .fetchPosts()
    .then(posts => {
      res.json(posts)
    })
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})











