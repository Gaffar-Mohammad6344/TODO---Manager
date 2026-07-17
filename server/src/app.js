const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('./middleware/logger');
const rateLimiter = require('./middleware/rateLimiter');
const routes = require('./routes');
const errorHandler = require('./middleware/error');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);
app.use(rateLimiter);

app.use('/api', routes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' });
});

app.use(errorHandler);

module.exports = app;
