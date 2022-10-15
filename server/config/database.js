const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose.connect(process.env.MONGO_URL).then((data) => {
    console.log(`mongoDB connected with server:${data.connection.host}`);
  });
};

module.exports = connectToDb;
