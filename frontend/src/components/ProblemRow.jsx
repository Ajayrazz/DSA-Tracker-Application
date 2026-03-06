import React, { useState } from 'react';
import API from '../services/api';
import { FaCheck } from 'react-icons/fa';

const ProblemRow = ({ problem }) => {
    const [status, setStatus] = useState(problem.status || 'Unsolved');

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 'text-teal-500';
            case 'Medium':
                return 'text-yellow-600';
            case 'Hard':
                return 'text-red-500';
            default:
                return 'text-gray-400';
        }
    };

    const toggleStatus = async () => {
        const newStatus = status === 'Solved' ? 'Unsolved' : 'Solved';
        setStatus(newStatus);

        try {
            await API.post(`/api/progress/${problem._id}`, { status: newStatus });
        } catch (error) {
            console.error('Error updating status:', error);
            setStatus(status); // revert
        }
    };

    // Mock acceptance based on title length or random to give it a realistic feel
    const mockAcceptance = `${(40 + (problem.title.length % 30)).toFixed(1)}%`;

    return (
        <tr className="hover:bg-[#2a2a2a] group transition-colors duration-200">
            <td className="px-6 py-4 whitespace-nowrap w-16">
                <button
                    onClick={toggleStatus}
                    className="focus:outline-none flex items-center justify-center w-6 h-6 rounded hover:bg-[#444] transition-colors"
                >
                    {status === 'Solved' && <FaCheck className="text-green-500 text-lg" />}
                </button>
            </td>
            <td className="px-6 py-4 truncate">
                <a
                    href={problem.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 font-medium hover:underline flex items-center gap-2 transition-colors"
                >
                    {problem.title}
                </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {mockAcceptance}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                </span>
            </td>
        </tr>
    );
};

export default ProblemRow;
