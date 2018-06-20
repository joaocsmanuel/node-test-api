const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/H2hTestApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('H2hTestApp');

  db.collection('Idea').findOneAndUpdate({
    _id: new ObjectID('5b28e65ee852e30a40678f26')
  }, {
    $set: {
      title: 'change idea'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close()
});