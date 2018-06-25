var mongoose = require('mongoose');

let db = {
  localhost: 'mongodb://localhost:27017/H2hTestApp',
  mlab: 'mongodb://h2htestadmin:h2htestadmin@ds016118.mlab.com:16118/h2htestapp'
};

mongoose.connect(mongoose.connect( process.env.PORT ? db.mlab : db.localhost));

module.exports = { mongoose };