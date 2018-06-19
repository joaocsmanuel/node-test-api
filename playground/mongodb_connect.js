const { MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/H2hTestApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('H2hTestApp');

  db.collection('Idea').insertOne({
    title: 'first idea',
    description: 'finally some idea'
  //   firstName: 'João',
  //   lastName: 'Manuel',
  //   email: 'joaocsmanuel@gmail.com'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close()
});