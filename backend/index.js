const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const pictures = require("./pictures.json");

app.use(cors())
app.use(bodyParser.json())

// register a handler for the root path
app.get('/api/pictures', (req, res) => {
  /*pictures.forEach(element => {
    console.log(element.picture)
  });*/
  let first = parseInt(req.query.cursor);
  let last = first + parseInt(req.query.amount);

  if (first >= pictures.lenght) {
    res.status(404).send('Not found');
    return;
  }

  res.json(JSON.stringify(pictures.slice(first, last)));

});

let newIndex = pictures.length;

app.post('/api/pictures', (req, res) => {
    console.log("pooooost " + req.body.picture);
    let pic = {
      "picture": req.body.picture,
      "index": newIndex
    }
    newIndex++;
    pictures.unshift(pic);
    res.send();
  });

app.delete('/api/pictures/:id', (req, res) => {
  let index = req.params.id;
  console.log("delete " + index);
  let pos = pictures.findIndex(function(pic) {
    return pic.index == index;
  })
  if (pos != undefined) {
    pictures.splice(parseInt(pos), 1);
    console.log(pos)
  }
  res.send();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start your server
app.listen(4242, () => {
  console.log('Example app listening on port 4242!');
});