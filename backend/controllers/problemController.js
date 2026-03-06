const Problem = require('../models/Problem');

const getProblems = async (req, res) => {
    try {
        const problems = await Problem.find({});
        res.json(problems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProblems,
};
