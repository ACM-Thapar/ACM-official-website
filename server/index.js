const express = require('express');
const connectDB = require('./config/db');
const auth = require('./routes/auth');

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

app.use('/auth', auth);
