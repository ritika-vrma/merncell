const express = require('express');
const jobRoute = require('./routes/jobRoute');
const studentRoute = require('./routes/studentRoute');
const jobAppliedRoute = require('./routes/jobAppliedRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());

//Import All Routes
app.use("/api/v1", jobRoute);
app.use("/api/v1", studentRoute);
app.use("/api/v1", jobAppliedRoute);


//Middleware for Error
app.use(errorMiddleware);
module.exports = app;