import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../var';
import '../css/RegisterForm.css';

const RegisterForm = () => {
    const [level, setLevel] = useState('');
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [foto, setFoto] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}api/register`, {
                level,
                nama,
                username,
                foto,
                password,
            });

            Swal.fire({
                title: 'Registration Successful!',
                text: 'You have successfully registered.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            setLevel('');
            setNama('');
            setUsername('');
            setFoto('');
            setPassword('');
        } catch (err) {
            Swal.fire({
                title: 'Registration Failed!',
                text: 'Please check the details and try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="register-container">
            <div className="form-wrapper">
                <div className="register-title">Register</div>
                <div className="form-content">
                    <div className="form-left">
                        <div className="form-group">
                            <label>Level:</label>
                            <input
                                type="text"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Nama:</label>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-right">
                        <div className="form-group">
                            <label>Foto (optional):</label>
                            <input
                                type="text"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn-submit" onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
