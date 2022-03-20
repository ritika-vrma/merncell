const mongoose = require('mongoose');

const appliedSchema = new mongoose.Schema({
    appliedJobs: [
        {
            job: { type: mongoose.Schema.ObjectId, ref: "Job", required: true },
            // jobType: { type: String, required:true},
            // companyName: { type: String, },
            // jobRole: { type: String, },

        },
    ],
    student: {
        type: mongoose.Schema.ObjectId, ref: "Student", required: true,
    },
    interviewStatus: { type: String, default: "Pending", required: true },
    appliedAt: Date,
    createdAt: { type: Date, default: Date.now(), required: true },
});

module.exports = mongoose.model('JobApplied', appliedSchema);