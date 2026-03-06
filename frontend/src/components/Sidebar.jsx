import React from 'react';
import { Link } from 'react-router-dom';
// Using react-icons for standard mock icons
import { FaBook, FaTasks, FaRegCalendarAlt, FaListUl } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-[#282828] text-gray-300 hidden md:flex flex-col min-h-[calc(100vh-64px)] p-4 border-r border-[#333]">
            <div className="space-y-4 flex-grow">
                <Link to="/" className="flex items-center gap-3 py-2 px-3 text-sm font-medium hover:bg-[#333] hover:text-white rounded-lg transition-colors">
                    <FaBook className="text-gray-400" /> Library
                </Link>
                <Link to="/" className="flex items-center gap-3 py-2 px-3 text-sm font-medium hover:bg-[#333] hover:text-white rounded-lg transition-colors">
                    <FaTasks className="text-gray-400" /> Quest
                </Link>
                <Link to="/" className="flex items-center gap-3 py-2 px-3 text-sm font-medium hover:bg-[#333] hover:text-white rounded-lg transition-colors">
                    <FaRegCalendarAlt className="text-gray-400" /> Study Plan
                </Link>
                <Link to="/" className="flex items-center gap-3 py-2 px-3 text-sm font-medium hover:bg-[#333] hover:text-white rounded-lg transition-colors">
                    <FaListUl className="text-gray-400" /> My Lists
                </Link>
            </div>
            <div className="mt-8">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">My Tags</p>
                <div className="space-y-1">
                    <span className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white cursor-pointer">Arrays</span>
                    <span className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white cursor-pointer">Dynamic Programming</span>
                    <span className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white cursor-pointer">Graphs</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
