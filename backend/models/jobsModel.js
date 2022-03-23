const mongoose = require('mongoose');
const validator = require('validator');

var date = new Date();
const jobsSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Please Enter Your Company Name"],
    },
    companyEmail: {
        type: String,
        required: [true, "Please Enter Email"],
        validate: [validator.isEmail, "Please Enter a Valid Email"]
    },
    companyContactPerson: {
        type: String,
        required: [true, "Please Enter Company Contact Person"]
    },
    contactPersonPhone: {
        type: Number,
        required: true,
        maxlength: [10, "Phone Cannot exceed 10 digits"],
        minlength: [9, "Phone Cannot be less than 10 digits"]
    },
    CompanyWebsite: {
        type: String,
        required: [true, "Please Enter Company Website"]
    },
    companyAddress: {
        type: String,
        required: [true, "Please Enter Company Address"]
    },
    companyAbout: {
        type: String,
        required: [true, "Please Enter About Company"]
    },
    jobRole: {
        type: String,
        required: [true, "Please Enter Job Role"]
    },
    jobDescription: {
        type: String,
        required: [true, "Please Enter Job Description"]
    },
    skillsRequired: {
        type: String,
        required: [true, "Please Enter Skills Required"]
    },
    eligibility: [
        {
            // class:{
            type: String,
            required: [true, "Please Enter Eligibility"]
            // }
        }
    ],
    class: [
        {
            // class:{
            type: String,
            required: [true, "Please Enter Class"]
            // }
        }
    ],
    jobType: [
        {
            // class:{
            type: String,
            required: [true, "Please Enter Class"]
            // }
        }
    ],
    additionalDetails: {
        type: String,
    },
    candidatesRequired: {
        type: Number,
        required: [true, "Please Enter How Many Candidates you want to hire"],
        maxLength: [4, "Candidate Required Cannot exceed 4 digits"],
        default: 6
    },
    salaryType: [
        {
            type: String,
            required: [true, "Please Enter Salary Type"]
        }
    ],
    salaryPM: {
        type: Number,
        required: [true, "Please Enter Salary"]
    },
    docsRequiredAtInterview: {
        type: String
    },
    docsRequiredAtJoining: {
        type: String
    },
    lastDateToApply: {
        type: Date,
        default: date.setDate(date.getDate() + 7),
        required: true
    },
    approve_reject: {
        type: String,
        default: "Rejected"
    },
    whatsappLink: {
        type: String,
        default: "NONE"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // user:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:"Student",
    //     required:true,
    // }
});

module.exports = mongoose.model("Job", jobsSchema);