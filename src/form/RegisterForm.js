import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../var';

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

            // Show success message with SweetAlert
            Swal.fire({
                title: 'Registration Successful!',
                text: 'You have successfully registered.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            // Clear the form fields
            setLevel('');
            setNama('');
            setUsername('');
            setFoto('');
            setPassword('');
        } catch (err) {
            // Show error message with SweetAlert
            Swal.fire({
                title: 'Registration Failed!',
                text: 'Please check the details and try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Level:</label>
                    <input
                        type="text"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nama:</label>
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Foto (optional):</label>
                    <input
                        type="text"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
