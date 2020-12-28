const express = require('express');
//const dbConnect = require(".config/db");

//dbConnect();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

//define routes

app.get('/', (req, res) => {
  res.send('Server running');
});

app.listen(PORT, () => {
  console.log('Server running on port ', PORT);
});
