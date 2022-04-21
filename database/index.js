const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

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

async function run() {
  try {
    await client.connect();
    const userCollection = client.db('foodExpress').collection('user');

    // get users
    app.get('/user', async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // POST user: add a new user
    app.post('/user', async (req, res) => {
      const newUser = req.body;
      console.log('adding new user', newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // delete a user
    app.delete('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
    /* const user = { name: 'Mamun Khan', email: 'dev@gmail.com' };
    const result = await userCollection.insertOne(user);
    console.log(`User inserted with id: ${result.insertedId}`); */
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
  console.log('CRUD Server is running');
});
