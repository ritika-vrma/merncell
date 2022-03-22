const express = require('express');
const jobRoute = require('./routes/jobRoute');
const studentRoute = require('./routes/studentRoute');
const jobAppliedRoute = require('./routes/jobAppliedRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

//Import All Routes
app.use("/api/v1", jobRoute);
app.use("/api/v1", studentRoute);
app.use("/api/v1", jobAppliedRoute);


//Middleware for Error
app.use(errorMiddleware);
module.exports = app;