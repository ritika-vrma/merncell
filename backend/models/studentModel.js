const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "Please Enter your name"],
        maxlength: [30, "Name cannot exceed 30 character"],
        minlength: [4, "Name should have more than 4 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Please Enter your name"],
        maxlength: [30, "Name cannot exceed 30 character"],
        minlength: [4, "Name should have more than 4 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a Valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"],
        minlength: [8, "Password should have more than 8 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String
        },
        url: {
            type: String
        }
    },
    phone: {
        type: Number,
        required: true,
        maxlength: [10, "Phone Cannot exceed 10 digits"],
        minlength: [9, "Phone Cannot be less than 10 digits"]
    },
    // alternativePhone: {
    //     type: Number,
    //     maxlength: [10, "Phone Cannot exceed 10 digits"],
    //     minlength: [9, "Phone Cannot be less than 10 digits"]
    // },
    classIn: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    class10: {
        type: String,
        required: true
    },
    class12: {
        type: String,
        required: true
    },
    graduation: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    objective: {
        required: true,
        type: String
    },
    experience: {
        type: String
    },
    projects: {
        type: String
    },
    skills: {
        type: String
    },
    address: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    linkedInURL: {
        type: String
    },
    socialLink: {
        type: String
    },
    skills: {
        type: String
    },
    classRollNo: {
        type: Number,
        required: true,
        unique: [true, "Rollno is already Taken"],
        minlength: [4, "Roll no must be of 4 digits"]
    },
    universityRollno: {
        type: Number,
        required: true,
        unique: [true, "Rollno is already Taken"],
        minlength: [6, "Roll no must be of 6 digits"]
    },
    role: {
        type: String,
        default: "student"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// Hash the password before saving
studentSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcryptjs.hash(this.password, 5);
});


// JWT Token
studentSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};


// Compare Password
studentSchema.methods.comparePassword = async function (enteredPassword) {
    return bcryptjs.compare(enteredPassword, this.password);
};

// Generating Password TOKEN
studentSchema.methods.getResetPasswordToken = function () {

    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and added to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;

};

module.exports = mongoose.model("Student", studentSchema);