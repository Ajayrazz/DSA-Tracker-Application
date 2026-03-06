import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightPanel from './RightPanel';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-gray-300 flex flex-col font-sans">
            {/* Global Top Navbar */}
            <Navbar />

            {/* Main Application Grid/Flex */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar Navigation */}
                <Sidebar />

                {/* Central main content area allowing scrolling */}
                <main className="flex-1 overflow-y-auto w-full">
                    {children}
                </main>

                {/* Right context/social panel */}
                <RightPanel />
            </div>
        </div>
    );
};

export default Layout;
