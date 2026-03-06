import React from 'react';

const StatsPanel = ({ stats }) => {
    // Make sure we have a stats object, default bounds safely
    if (!stats) return null;

    return (
        <div className="bg-[#282828] rounded-xl border border-[#333] p-6 mb-6">
            <h2 className="text-white text-lg font-bold mb-4">Your Progress</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Total Solved */}
                <div className="bg-[#1a1a1a] p-4 rounded-lg flex flex-col items-center justify-center border border-[#333]">
                    <span className="text-3xl font-bold text-white mb-1">{stats.total}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Solved</span>
                </div>

                {/* Easy Count */}
                <div className="bg-[#1a1a1a] p-4 rounded-lg flex flex-col items-center justify-center border border-[#333]">
                    <span className="text-3xl font-bold text-teal-500 mb-1">{stats.easy}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Easy</span>
                </div>

                {/* Medium Count */}
                <div className="bg-[#1a1a1a] p-4 rounded-lg flex flex-col items-center justify-center border border-[#333]">
                    <span className="text-3xl font-bold text-yellow-600 mb-1">{stats.medium}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Medium</span>
                </div>

                {/* Hard Count */}
                <div className="bg-[#1a1a1a] p-4 rounded-lg flex flex-col items-center justify-center border border-[#333]">
                    <span className="text-3xl font-bold text-red-500 mb-1">{stats.hard}</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Hard</span>
                </div>

            </div>
        </div>
    );
};

export default StatsPanel;
