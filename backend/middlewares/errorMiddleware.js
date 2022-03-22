const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    //Mongodb cast Error
    if (err.name === 'CastError') {
        const msg = `Resource not found: ${err.path}`;
        err = new ErrorHandler(msg, 400);
    }

    // Mongoose Duplicate Key Error
    if (err.code === 11000) {
        const msg = `${Object.keys(err.keyValue)} Already Exist`;
        err = new ErrorHandler(msg, 400);

    }

    // Wrong JWT Token
    if (err.name === "JsonWebTokenError") {
        const msg = `Json Web token is invalid, Try again`;
        err = new ErrorHandler(msg, 400);
    }

    // JWT Expire Error
    if (err.name === "TokenExpiredError") {
        const msg = `Token is Expired, Try again`;
        err = new ErrorHandler(msg, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        errorStack: err.stack,
        message: err.message
    });
};