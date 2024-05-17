const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/college', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});