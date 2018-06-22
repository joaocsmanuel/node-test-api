const mongoose = require('mongoose');

const Idea = mongoose.model('Idea', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { Idea };