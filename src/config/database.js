// mongose config
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/newdb';

async function connect(uri) {
  try {
    mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDb');
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connect;
