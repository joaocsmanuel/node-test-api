var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/H2hTestApp');

// a mongoose model
var Idea = mongoose.model('Idea', {
  title: {
    type: String
  },
  description: {
    type: String
  }
});

var newIdea = new Idea({
  title: 'New idea',
  description: 'some description'
});

newIdea.save().then((doc) => {
  console.log('Saved idea', doc);
}, (e) => {
  console.log('Unable to save idea')
});