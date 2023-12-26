const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/Users';

const connectDB = async () => {
  try {
    await mongoose.connect(uri);

    console.log('Connected to MongoDB using Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; 
  }
};

module.exports = { connectDB };
