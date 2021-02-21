const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// create express server and port 
const app = express();
const port = process.env.PORT || 5000;

app.use('/uploads', express.static('uploads'));

// database uri, connection string, where database is stored which you get from the mongoDB dashboard
const uri = process.env.ATLAS_URI;
// connect to that uri. 
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
// once connected log
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(cors());
// enables passing of json
app.use(express.json());

const recipesRouter = require('./routes/recipes');
app.use('/', recipesRouter);

// starts the server, listens to the part
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});