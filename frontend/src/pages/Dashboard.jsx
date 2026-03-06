import React, { useEffect, useState, useContext } from 'react';
import API from '../services/api';
import ProblemRow from '../components/ProblemRow';
import { AuthContext } from '../context/AuthContext';
import Layout from '../components/Layout';
import StatsPanel from '../components/StatsPanel';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState(null);
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Fetch user specific progress via the protected route
                const { data: progressData } = await API.get('/api/progress');
                // Fetch the comprehensive master list of problems
                const { data: problemsData } = await API.get('/api/problems');
                // Fetch the aggregated user analytical stats
                const { data: statsData } = await API.get('/api/progress/stats');

                // Embed the user's saved status directly into the iterated problems list natively
                const combinedData = problemsData.map(problem => {
                    const match = progressData.find(prog => prog.problemId === problem._id);
                    return {
                        ...problem,
                        status: match ? match.status : 'Unsolved'
                    };
                });

                setProblems(combinedData);
                setStats(statsData);
            } catch (error) {
                console.error("Error fetching dashboard data", error);
                setError(error.message || "Failed to fetch dashboard data.");
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchDashboardData();
        } else {
            setLoading(false);
        }
    }, [user]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex flex-col h-screen items-center justify-center bg-gray-50 text-center px-4">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Please log in</h2>
                <p className="text-gray-600 mb-8 max-w-md">You must be logged in to view the DSA tracker dashboard and save your progress.</p>
                {/* Temporary placeholder button until we build the login routing */}
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg">Go to Login</button>
            </div>
        );
    }

    const filteredProblems = problems.filter(problem => {
        const difficultyMatch = difficultyFilter === 'All' || problem.difficulty === difficultyFilter;
        const statusMatch = statusFilter === 'All' || problem.status === statusFilter;
        return difficultyMatch && statusMatch;
    });

    return (
        <Layout>
            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {error && (
                    <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                        <p className="text-sm text-red-700 font-bold">Error loading problems: {error}</p>
                        <p className="text-xs text-red-600 mt-1">Make sure you are logged in and the backend is running on port 5001.</p>
                    </div>
                )}

                <header className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center bg-[#282828] p-6 rounded-xl border border-[#333]">
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Study Plan</h1>
                        <p className="mt-1 text-sm text-gray-400">Master fundamental Data Structures & Algorithms.</p>
                    </div>
                </header>

                {/* Analytical Stats Block */}
                <StatsPanel stats={stats} />

                {/* Topic Pills */}
                <div className="flex overflow-x-auto gap-3 py-2 mb-6 scrollbar-hide">
                    {['All topics', 'Array', 'String', 'Hash Table', 'Dynamic Programming', 'Math', 'Sorting', 'Greedy'].map((topic, i) => (
                        <button key={topic} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-white text-black' : 'bg-[#333] text-gray-300 hover:bg-[#444] hover:text-white'}`}>
                            {topic}
                        </button>
                    ))}
                </div>

                {/* Filter Bar */}
                <div className="mb-6 flex flex-col sm:flex-row gap-4 bg-[#282828] p-4 rounded-xl border border-[#333]">
                    <div className="flex items-center gap-2">
                        <label htmlFor="difficulty" className="text-sm font-medium text-gray-400">Difficulty:</label>
                        <select
                            id="difficulty"
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                            className="block w-full sm:w-auto pl-3 pr-8 py-1.5 text-sm border-[#444] text-white focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-md bg-[#333] border"
                        >
                            <option value="All">All</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="status" className="text-sm font-medium text-gray-400">Status:</label>
                        <select
                            id="status"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="block w-full sm:w-auto pl-3 pr-8 py-1.5 text-sm border-[#444] text-white focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-md bg-[#333] border"
                        >
                            <option value="All">All</option>
                            <option value="Unsolved">Todo</option>
                            <option value="Attempted">Attempted</option>
                            <option value="Solved">Solved</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden border-b border-[#333] shadow rounded-xl">
                                <table className="min-w-full divide-y divide-[#333]">
                                    <thead className="bg-[#282828]">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-400">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-400">
                                                Title
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-400">
                                                Acceptance
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-400">
                                                Difficulty
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-[#1a1a1a] divide-y divide-[#333]">
                                        {filteredProblems.length > 0 ? (
                                            filteredProblems.map(problem => (
                                                <ProblemRow key={problem._id} problem={problem} />
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                                                    No problems found. Run your seed script!
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
