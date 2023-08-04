//Create web server using express
const express = require('express');
const app = express();
const port = 3000;
//Importing the comments module
const comments = require('./comments');
//Importing body-parser to parse the body of the request
const bodyParser = require('body-parser');
//Importing cors to allow cross-origin resource sharing
const cors = require('cors');
//Use cors
app.use(cors());
//Use body-parser
app.use(bodyParser.json());
//Get comment by id
app.get('/comments/:id', (req, res) => {
  let id = req.params.id;
  res.send(comments.getComment(id));
});
//Get comment by id
app.get('/comments', (req, res) => {
  res.send(comments.getAllComments());
});
//Post comment
app.post('/comments', (req, res) => {
  let comment = req.body.comment;
  res.send(comments.addComment(comment));
});
//Delete comment
app.delete('/comments/:id', (req, res) => {
  let id = req.params.id;
  res.send(comments.deleteComment(id));
});
//Start server
app.listen(port, () => console.log(`API listening on port ${port}!`));
