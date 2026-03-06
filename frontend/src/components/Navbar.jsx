import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-[#282828] text-gray-300 border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                            <span className="text-orange-500 text-2xl font-black">{'</>'}</span>
                            DSA Tracker
                        </Link>
                    </div>
                    <div>
                        {user ? (
                            <div className="flex flex-row items-center gap-4">
                                <span className="text-sm font-medium text-gray-400 hidden sm:block">
                                    Hello, <span className="text-white">{user.username}</span>
                                </span>
                                <button
                                    onClick={logout}
                                    className="bg-[#333] hover:bg-[#444] text-gray-300 font-semibold py-1.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 text-sm border border-[#444]"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <Link to="/login" className="text-gray-400 hover:text-white font-medium py-1.5 px-3">
                                    Sign In
                                </Link>
                                <Link to="/register" className="bg-[#444] hover:bg-[#555] text-white font-medium py-1.5 px-4 rounded-lg transition-colors border border-[#555]">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
