import { createContext, useState, useEffect } from 'react';
import API from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // If we have a token from a previous session, we could hydrate user state here natively
        // by decoding it. Or at least keeping them logged in visually.
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (token && storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const register = async (userData) => {
        const { data } = await API.post('/api/auth/register', userData);
        localStorage.setItem('token', data.token);

        // Storing subset to local storage for persistence across reloads
        const userPayload = { _id: data._id, username: data.username, email: data.email };
        localStorage.setItem('user', JSON.stringify(userPayload));
        setUser(userPayload);

        return data;
    };

    const login = async (userData) => {
        const { data } = await API.post('/api/auth/login', userData);
        localStorage.setItem('token', data.token);

        const userPayload = { _id: data._id, username: data.username, email: data.email };
        localStorage.setItem('user', JSON.stringify(userPayload));
        setUser(userPayload);

        return data;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
