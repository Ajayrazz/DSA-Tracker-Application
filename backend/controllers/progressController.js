const Progress = require('../models/Progress');

const getUserProgress = async (req, res) => {
    try {
        const progress = await Progress.find({ userId: req.user.id });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProgress = async (req, res) => {
    try {
        const { problemId } = req.params;
        const { status } = req.body;
        const userId = req.user.id;

        let progress = await Progress.findOne({ userId, problemId });

        if (progress) {
            progress.status = status;
            await progress.save();
        } else {
            progress = await Progress.create({ userId, problemId, status });
        }

        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserStats = async (req, res) => {
    try {
        const userId = req.user.id;
        // Find all solved problems and populate to read the 'difficulty' stored in the mapped Problem abstraction
        const solvedProgress = await Progress.find({ userId, status: 'Solved' }).populate('problemId');

        let stats = {
            total: 0,
            easy: 0,
            medium: 0,
            hard: 0,
        };

        solvedProgress.forEach((prog) => {
            if (prog.problemId) {
                stats.total += 1;
                if (prog.problemId.difficulty === 'Easy') stats.easy += 1;
                if (prog.problemId.difficulty === 'Medium') stats.medium += 1;
                if (prog.problemId.difficulty === 'Hard') stats.hard += 1;
            }
        });

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUserProgress,
    updateProgress,
    getUserStats,
};
