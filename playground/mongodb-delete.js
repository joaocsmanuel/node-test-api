const { MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/H2hTestApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('H2hTestApp');

  // db.collection('Idea').deleteMany({ title: 'first idea' }).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Idea').deleteOne({ title: 'first idea' }).then((result) => {
  //   console.log(result)
  // });

  db.collection('Idea').findOneAndDelete({ 
    _id: new ObjectId('5b29097a270e181348ee5f04') 
  }).then((result) => {
    console.log(result)
  })
  // client.close()
});