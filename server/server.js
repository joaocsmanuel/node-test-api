const { ObjectID } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser'); // takes json and convert it into a object

const { mongoose } = require('./db/mongoose');
const { Idea } = require('./models/idea');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/ideas', (req, res) => {
  const idea = new Idea({
    title: req.body.title,
    description: req.body.description
  });

  idea.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
})

app.get('/ideas', (req, res) => {
  Idea.find().then((ideas) => {
    res.send({ ideas });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/ideas/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Idea.findById(id).then((idea) => {
    if(!idea){
     return res.status(404).send();      
    }

    res.send({ idea });    
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };

// var newIdea = new Idea({
//   title: '',
//   description: 'another description'
// });

//


// var newUser = new User({
//   firstName: 'João',
//   lastName: 'Manuel',
//   email: 'joaocsmanuel@gmail.com'
// });

// newUser.save().then((doc) => {
//   console.log('Saved user', doc);
// }, (e) => {
//   console.log('Unable to save user')
// });