const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./src/config/config');
let server;

//connects to mongoDB
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log('Successfully connected to MongoDB');
  server = http.createServer({}, app);
  server.listen(config.port, () => {
    console.info(`Started http://localhost:${config.port}`);
  });
});
const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});
