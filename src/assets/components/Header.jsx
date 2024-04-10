import React from 'react';
import styles from '../styles/Header.module.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigateTo = useNavigate();

    function handleHomeClick() {
        navigateTo('/');
    }

    function handleWelocmeClick() {
        // Get the target element
        const welcomeDivDiv = document.getElementById('welcomeDiv');
    
        // Scroll to the target element
        welcomeDivDiv.scrollIntoView({ behavior: 'smooth' });
    }

    
    function handleContactClick() {
        navigateTo('/contact');
    }

    function handleServiceClick() {
        // Get the target element
        const serviceDiv = document.getElementById('serviceDiv');
        const targetPosition = serviceDiv.offsetTop - 60; // Adjust the offset as needed

        // Scroll to the calculated position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    function handleSkillClick() {
        // Get the target element
        const skillDiv = document.getElementById('skillDiv');
        const targetPosition = skillDiv.offsetTop - 60; // Adjust the offset as needed

        // Scroll to the calculated position
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    

    return (
        <Navbar expand="lg" className={`${styles.navbar} shadow position-fixed w-100`}>
            <Navbar.Brand onClick={handleHomeClick} className="mx-4 px-5">
                <a href='' className={`${styles.name}`}>
                    Rahul
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end mx-5 px-5" style={{ width: '100%' }}>
                    <Nav.Link className={`text-light mx-2`} onClick={handleWelocmeClick}>
                        <p className={`${styles.links}`}>
                            Home
                        </p>
                    </Nav.Link>
                    <Nav.Link className={`text-light mx-2`} onClick={handleServiceClick}>
                        <p className={`${styles.links}`}>
                            Services
                        </p>
                    </Nav.Link>
                    <Nav.Link className={`text-light mx-2`} onClick={handleSkillClick}>
                        <p className={`${styles.links}`}>
                            Skills
                        </p>
                    </Nav.Link>
                    <Nav.Link className={'text-light mx-2'}>
                        <p className={`${styles.links}`}>
                            About
                        </p>
                    </Nav.Link>
                    <Nav.Link className={'text-light mx-2'} onClick={handleContactClick}>
                        <p className={`${styles.links}`}>
                            Contact
                        </p>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
