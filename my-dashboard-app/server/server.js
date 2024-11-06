require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const passport = require('passport');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();
app.use(passport.initialize());
require('./config/passport');

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
