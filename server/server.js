const app = require('./app');
const dotenv = require('dotenv');

// Handling uncaught Exception

process.on('uncaughtException', (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit();
});

//Config

dotenv.config({ path: './config/config.env' });

//Connect to database

const connectToDb = require('./config/database');
port = process.env.PORT || 5000;
connectToDb();

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//Unhandled Promise rejections

process.on('unhandledRejection', (error) => {
  console.log(`Error:${error.message}`);
  console.log(`Shutting down the server due to Unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
