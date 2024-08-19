import React, { useState } from 'react';
import axios from 'axios';
import '../css/LoginForm.css';  // Import the CSS file
import { API_BASE_URL } from '../var';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}api/login`, {
                username,
                password,
            });

            // Handle success
            console.log('Login successful:', response.data);
            setSuccess('Login successful!');
            setError('');

            // Optionally store the token or user info
            localStorage.setItem('token', response.data.accessToken);
        } catch (err) {
            // Handle error
            console.error('Login failed:', err);
            setError('Login failed. Username or password might be incorrect.');
            setSuccess('');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
