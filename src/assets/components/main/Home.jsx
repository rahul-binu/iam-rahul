import React, { useEffect } from "react";
import styles from '../../styles/Home.module.css';
import WorksPage from "./WorksPage";
import ThisWeek from "./ThisWeek";
import Contact from "./Contact";
import Welcome from "./Welcome";
import Services from "./Services";
import Skill from "./Skill";
import ContactPage from "./ContactForm";

import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const handleOpenResume = () => {
        window.open('/pdf/Rahul Binu Resume (2).pdf', '_blank');
    };

    function scrollToWork() {
        var targetDiv = document.getElementById('work-container');
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToConnect() {
        var targetDiv = document.getElementById('connect-container');
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="" id="welcomeDiv">
                <Welcome />
                <hr style={{
                    color: 'rgba(209, 34, 227, 0.95)'
                }} />
            </div>

            <div className="" id='serviceDiv'>
                <Services />
            </div>

            <div className="mt-4 mb-5" id="skillDiv">
                <Skill />
            </div>
{/* 
            <div className="mt-5" id="contactDiv">
                <ContactPage />
            </div> */}

        </>

    );
}

export default Home;
