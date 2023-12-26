const express = require('express');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

connectDB();
const app = express();
app.use(cors());
let PORT = 8000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);


app.listen(PORT,(req,res)=>{
    console.log(`server Running on port ${PORT}`)
})