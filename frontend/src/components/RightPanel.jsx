import React from 'react';

const RightPanel = () => {
    return (
        <aside className="w-80 bg-[#282828] text-gray-300 hidden lg:flex flex-col min-h-[calc(100vh-64px)] p-6 border-l border-[#333]">
            {/* Mock Calendar / Streak UI */}
            <div className="bg-[#1a1a1a] rounded-xl p-5 mb-8 border border-[#333]">
                <h3 className="text-white font-semibold text-lg mb-2">My Streak</h3>
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🔥</span>
                    <div>
                        <div className="text-2xl font-bold text-orange-500">12 Days</div>
                        <div className="text-xs text-gray-400">Keep it up!</div>
                    </div>
                </div>
                {/* Micro mock calendar matrix */}
                <div className="grid grid-cols-7 gap-1">
                    {[...Array(28)].map((_, i) => (
                        <div key={i} className={`h-6 w-full rounded-sm ${i % 4 === 0 || i % 7 === 0 ? 'bg-green-500/80' : 'bg-[#333]'}`}></div>
                    ))}
                </div>
            </div>

            {/* Trending Companies */}
            <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Trending Companies</h3>
                <div className="flex flex-wrap gap-2">
                    {['Google', 'Facebook', 'Amazon', 'Microsoft', 'Apple', 'Netflix', 'Uber', 'Airbnb'].map(company => (
                        <span key={company} className="px-3 py-1 bg-[#333] hover:bg-[#444] rounded-full text-xs cursor-pointer transition-colors text-gray-300">
                            {company}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default RightPanel;
