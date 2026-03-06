const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        problemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Problem',
            required: true,
        },
        status: {
            type: String,
            enum: ['Unsolved', 'Attempted', 'Solved'],
            default: 'Unsolved',
        },
    },
    { timestamps: true }
);

// Prevent duplicate progress entries for the same user and problem
progressSchema.index({ userId: 1, problemId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
