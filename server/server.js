const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser'); // takes json and convert it into a object
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Idea } = require('./models/idea');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

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

app.delete('/ideas/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Idea.findByIdAndRemove(id).then((idea) => {
    if(!idea){
      return res.status(404).send();
    }

    res.send(idea);
  }, (e) => {
    res.status(400).send()
  });
});

app.patch('/ideas/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['title', 'description']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

 
  Idea.findByIdAndUpdate(id, { $set: body }, { new: true }).then((idea) => {
    if(!idea){
      return res.status(404).send();
    }

    res.send({ idea });
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
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