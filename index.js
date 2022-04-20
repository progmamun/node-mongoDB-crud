const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// MongoDB
const uri =
  'mongodb+srv://mongoadmin:3RVxVRm3ZGIV8b9R@cluster0.njs0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect(err => {
  const collection = client.db('test').collection('devices');
  console.log('db connected');
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
  res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
  console.log('CRUD Server is running');
});
