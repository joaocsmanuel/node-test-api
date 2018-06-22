const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Idea } = require('./../server/models/idea');

let id = '5b2a806c9417974b0862db63';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// Idea.find({
//   _id: id
// }).then((ideas) => {
//   console.log('Ideas', ideas);
// });

// Idea.findOne({
//   _id: id
// }).then((idea) => {
//   console.log('Idea', idea);
// });

Idea.findById(id).then((idea) => {
  if(!idea){
    return console.log('Id not found');
  }
  console.log('Idea By Id', idea);
}).catch((e) => console.log(e));