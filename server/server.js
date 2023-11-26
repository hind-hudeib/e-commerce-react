const express = require('express');
const app = express();
const port = 5000;
const userRoutes = require('./routes/userRoute');
const mongoose = require('mongoose');
const cors = require('cors'); 
const productRoutes = require('./routes/productsRoute')
app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://hindsaed:iVteBPm88dPnilph@cluster0.peafkjd.mongodb.net/e-commerce',
  {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


app.use('/users', userRoutes);
app.use('/product', productRoutes)


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
