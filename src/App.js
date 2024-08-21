import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import LoginForm from './form/LoginForm';
import RegisterForm from './form/RegisterForm';
import MySplashScreen from './component/Splashscreen';

const App = () => {
    const [isSplashVisible, setSplashVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSplashVisible(false);
        }, 3600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {isSplashVisible ? (
                <MySplashScreen />
            ) : (
                <>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/register" element={<RegisterForm />} />
                    </Routes>
                </>
            )}
        </Router>
    );
};

export default App;
