import React, { useState } from 'react';
import axios from 'axios';
import '../css/LoginForm.css';
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

            setSuccess('Login successful!');
            setError('');

            localStorage.setItem('token', response.data.accessToken);
        } catch (err) {
            setError('Login failed. Username or password might be incorrect.');
            setSuccess('');
        }
    };

    return (
        <div className="login-container">
            <div className="form-wrap">
                <h2 className="login-title">Login</h2>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default LoginForm;
