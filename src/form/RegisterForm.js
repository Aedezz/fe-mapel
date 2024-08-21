import React, { useState } from 'react';
import axios from 'axios';
import TriangleParticles from '../component/Triangle.js';
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../var';
import '../css/RegisterForm.css';
import '@fontsource/roboto';
import StyledInput from '../component/StyledInput';
import UserIcon from '@mui/icons-material/Person'; // Import UserIcon or other icons as needed

const RegisterForm = () => {
    const [level, setLevel] = useState('');
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [foto, setFoto] = useState(null);
    const [password, setPassword] = useState('');

    const validateForm = () => {
        if (!level || !nama || !username || !password) {
            Swal.fire({
                title: 'All Fields Required!',
                text: 'Please fill in all the fields.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = new FormData();
        formData.append('level', level);
        formData.append('nama', nama);
        formData.append('username', username);
        formData.append('foto', foto);
        formData.append('password', password);

        try {
            const response = await axios.post(`${API_BASE_URL}api/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire({
                title: 'Registration Successful!',
                text: 'You have successfully registered.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            // Clear form fields
            setLevel('');
            setNama('');
            setUsername('');
            setFoto(null);
            setPassword('');
        } catch (err) {
            Swal.fire({
                title: 'Registration Failed!',
                text: err.response?.data?.message || 'Please check the details and try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="register-container">
            <TriangleParticles />
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <div className="register-title">Register</div>
                <div className="form-content">
                    <div className="form-left">
                        <div className="form-group">
                            <StyledInput
                                id="level"
                                name="level"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                placeholder="Level"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <StyledInput
                                id="nama"
                                name="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Nama"
                                required
                            />
                        </div>
                        <div className="form-group">
                        <StyledInput
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            icon={UserIcon}
                            required
                            />
                        </div>
                    </div>
                    <div className="form-right">
                        <div className="form-group">
                            <label>Foto (optional):</label>
                            <input
                                type="file"
                                onChange={(e) => setFoto(e.target.files[0])}
                            />
                        </div>
                        <div className="form-group">
                            <StyledInput
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn-submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
