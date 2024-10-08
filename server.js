const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const healthRoutes = require('./routes/healthRoutes')
const cors = require('cors');

const app = express();
app.use(cors());
dotenv.config();
connectDB();


app.use(express.json());

app.use('/api',healthRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});