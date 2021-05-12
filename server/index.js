const express = require('express');
const router = require('express').Router({ mergeParams: true });
const connectDB = require('./config/db');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

//define routes

app.get('/', (req, res) => {
  res.send('Server running');
});

app.listen(PORT, () => {
  console.log('Server running on port ', PORT);
});

app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));
