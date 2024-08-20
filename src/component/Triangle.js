import React, { useEffect } from 'react';
import '../css/RegisterForm.css';

const TriangleParticles = () => {
    useEffect(() => {
        const createTriangle = () => {
            const triangle = document.createElement('div');
            triangle.classList.add('triangle');

            // Randomize size
            const size = Math.random() * 50 + 20;
            triangle.style.borderLeftWidth = `${size / 2}px`;
            triangle.style.borderRightWidth = `${size / 2}px`;
            triangle.style.borderBottomWidth = `${size}px`;

            // Randomize position in top-left or bottom-right corner
            const isTopLeft = Math.random() > 0.5;
            const xOffset = isTopLeft ? Math.random() * 10 : Math.random() * 20 + 90;
            const yOffset = Math.random() * 100;
            
            triangle.style.left = `${xOffset}vw`;
            triangle.style.top = `${yOffset}vh`;

            // Append to the body or the container
            document.body.appendChild(triangle);
        };

        // Generate multiple triangles
        for (let i = 20; i < 50; i++) {  // Adjust number for density
            createTriangle();
        }

        // Clean up particles when the component unmounts
        return () => {
            const triangles = document.querySelectorAll('.triangle');
            triangles.forEach((triangle) => triangle.remove());
        };
    }, []);

    return null;
};

export default TriangleParticles;
