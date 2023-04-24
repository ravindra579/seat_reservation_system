const express = require('express');
const cors = require('cors');
const app = express();
// enable cors
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.options(
  '*',
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);


// parse json request body
app.use(express.json());

// parse url-encoded request body
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Welcome to Seating Arrangement system'));
app.use("/api", require("./src/api/routes"))


module.exports = app;
