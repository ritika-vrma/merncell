const mongoose = require('mongoose');
var date = new Date();
const jobsSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Please Enter Your Company Name"],
    },
    companyDescription: {
        type: String,
        required: [true, "Please Enter Company Description"]
    },
    jobRole: {
        type: String,
        required: [true, "Please Enter Job Role"]
    },
    jobDescription: {
        type: String,
        required: [true, "Please Enter Job Description"]
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
    candidateRequired: {
        type: Number,
        required: [true, "Please Enter How Many Candidates you want to hire"],
        maxLength: [4, "Candidate Required Cannot exceed 4 digits"],
        default: 6
    },
    salaryType:[
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
    lastDateToApply:{
        type:Date,
        default:date.setDate(date.getDate() + 7),
        required:true
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

// {
//     "comapnyName":"TCS",
//     "companyDescription":"TCS Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. ",
//     "jobRole":"Software Engineer",
//     "jobDescription":"As a software engineer, you'll work in a constantly evolving environment, due to technological advances and the strategic direction of the organisation you work for. You'll create, maintain, audit and improve systems to meet particular needs, often as advised by a systems analyst or architect, testing both hard and software systems to diagnose and resolve system faults.",
//     "eligibility":"BCA",
//     "additionalDetails":"no additional Details to show",
//     "candidateRequired":90,
//     "salaryPA":1000000,
//     "docsRequiredAtInterview":"Resume Hardcopies 2",
//     "docsRequiredAtJoining":"something joining docs"
    
// }