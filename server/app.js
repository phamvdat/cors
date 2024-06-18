const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

const whitelist = ['http://localhost:3000', 'https://example.com'];
// Allow Cross-Origin requests
app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['DELETE'],
  })
);

// Routes
app.use('/api/user', userRoutes);

module.exports = app;
