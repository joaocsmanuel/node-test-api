const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/H2hTestApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('H2hTestApp');

  db.collection('Idea').find().count().then((count) => {
    console.log(count)
  }, (err) => {
    console.log('Unable to fetch ideas', err)
  });

  // find - query
  // db.collection('Idea').find({
  //   _id: new ObjectId('5b29097a270e181348ee5f04')
  // }).toArray().then((docs) => {
  //   console.log('Ideas')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch ideas', err)
  // });

  // client.close();
});