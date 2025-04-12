//const cors = require('cors');
//app.use(cors()); // Povolí všetky žiadosti z frontendu

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRouter = require('./routes/auth');
app.use('/api', authRouter);

const authRoutes = require('./routes/auth');
const activityRoutes = require('./routes/activities');

app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes); // Pridané

module.exports = app;