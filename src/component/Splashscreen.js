import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress'; // Import from Material-UI

const MySplashScreen = () => {
    const [fadeAnim, setFadeAnim] = useState(0);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Interval for fading effect
        const fadeInterval = setInterval(() => {
            setFadeAnim((prev) => (prev < 1 ? prev + 0.1 : 1));
        }, 200);

        // Interval for progress
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        navigate('/login'); // Redirect to the login page or any other route
                    }, 500); // Delay before navigating to allow for a smoother transition
                    return 100;
                }
                return prev + 10;
            });
        }, 300);

        // Cleanup intervals on component unmount
        return () => {
            clearInterval(fadeInterval);
            clearInterval(progressInterval);
        };
    }, [navigate]);

    return (
        <div style={{ ...styles.container, opacity: fadeAnim }}>
            <h1 style={styles.text}>Test Splash</h1>
            <div style={styles.progressWrapper}>
                <LinearProgress 
                    variant="determinate" 
                    value={progress} 
                    sx={{ height: '6px', borderRadius: '5px', flexGrow: 1 }} // Adjust the height, border-radius, and ensure it grows to fill available space
                />
                <div style={styles.progressLabel}>
                    {progress}%
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#4CAF50',
        transition: 'opacity 2s ease-in-out',
    },
    text: {
        fontSize: '30px',
        color: '#FFFFFF',
        marginBottom: '20px',
    },
    progressWrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        marginTop: '20px',
    },
    progressLabel: {
        marginLeft: '10px', // Adjust spacing between bar and label
        fontSize: '12px',
        color: '#000',
    },
};

export default MySplashScreen;
