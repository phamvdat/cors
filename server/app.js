const express = require('express');
// const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Allow Cross-Origin requests
// app.use(cors('*'));

// Routes
app.use('/api/user', userRoutes);

module.exports = app;
