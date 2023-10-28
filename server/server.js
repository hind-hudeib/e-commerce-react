const express = require('express');
const app = express();
const port = 5000;
const userRoutes = require('./routes/userRoute');
const mongoose = require('mongoose');
const cors = require('cors'); 

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);

mongoose.connect(
  'mongodb+srv://hindsaed:iVteBPm88dPnilph@cluster0.peafkjd.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
