import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './form/LoginForm';
import RegisterForm from './form/RegisterForm';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    {/* <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li> */}
                </ul>
            </nav>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </Router>
    );
};

export default App;
