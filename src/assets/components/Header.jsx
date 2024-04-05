import React from 'react';
import styles from '../styles/Header.module.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigateTo = useNavigate();

    function handleHomeClick() {
        navigateTo('/');
    }

    function handleContactClick() {
        navigateTo('/contact');
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
                    <Nav.Link className={`text-light mx-2`}>
                        <p className={`${styles.links}`}>
                            Home
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
