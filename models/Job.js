const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, default: true },
    company: { type: String, default: true },
    salary: { type: String, default: true },
    period: { type: String, required: true },
    contract: { type: String, required: true },
    requirements: { type: Array, required: true },
    imageUrl: { type: String, required: true },
    agentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    }


}, { timestamps: true }

);
module.exports = mongoose.model("Job", JobSchema);

