import React, { useEffect } from 'react';
import styles from '../../styles/FadeIn.module.css';

const FadeInComponent = () => {
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    const handleScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
    }

    // Add event listener for scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Initial check when the component is mounted
    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <div className="container">
            <div className={`${styles.fadeIn} fade-in`}
                >
            {/* Content to fade in */}
            <h1 id={styles.h1}>Hello, this is a fade-in component...</h1>

        </div>
        </div >
    );
}

export default FadeInComponent;
