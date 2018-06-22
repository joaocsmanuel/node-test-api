const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Idea } = require('./../server/models/idea');

// this from mongoose
Idea.remove({}).then((result) => {
  console.log(result)
});

Idea.findOneAndRemove({ _id: '5b29097a270e181348ee5f04' }).then((idea) => {
  console.log(idea)
});

Idea.findByIdAndRemove('5b29097a270e181348ee5f04').then((idea) => {
  console.log(idea)
});