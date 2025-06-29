const express = require('express');
const dotenv = require ('dotenv');
const cors = require('cors');
const connectDB = require('./db/db');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// routes
app.use('/api/employees', require('./routes/employeeroutes'))

app.get('/',(req,res)=>{
    res.send('Welcome to the backend server');

})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})