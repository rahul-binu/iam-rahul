import React from "react";
import styles from '../../styles/Home.module.css';
import WorksPage from "./WorksPage";
import ThisWeek from "./ThisWeek";
import Contact from "./Contact";
import Welcome from "./Welcome";
import Services from "./Services";
import Skill from "./Skill";

const Home = () => {

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

            <div className="mt-4" id="skillDiv">
                <Skill />
            </div>

            <div className={`${styles.container} container`} style={{
                // backgroundColor: '#000', 																  /* Set initial properties */
                // backgroundColor: '#000',
                // color: '#fff',
                // textAlign: 'center',
                // opacity: 0,

                // animation: 'fadeIn 2s ease-in'
            }}>

                <div className="row mt-5 mb-5" style={{
                    // backgroundColor:'#000'
                }}>
                    <div className="col-lg-5 md-12 sm-12" style={{
                        justifyContent: 'center', display: 'flex'
                    }}>
                        <img id={styles.profile_pic}
                            src="images/ajySelfyTest.jpg" alt="" />
                    </div>
                    {/* <div className="col-lg-7 md-12 sm-12" id={styles.aboutMe}>
                        <div className="row" id={styles.introduction}>
                            <div className="col-12">
                                <h1>Hello,</h1>
                                <h3>a bit about me</h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-3 m-3" id={styles.my_resume} onClick={handleOpenResume}>
                                <h5>My Resume</h5>
                            </div>
                            <div className="col-lg-3 m-3" id={styles.my_work} onClick={scrollToWork}>
                                <h5>My Works</h5>
                            </div>
                            <div className="col-lg-3 m-3" id={styles.contact_me} onClick={scrollToConnect}>
                                <h5>Connect me</h5>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col" id={styles.description}>
                                <p>Hey there! I'm Rahul Binu, a passionate individual with a zest for life. I find joy in exploring new adventures, expressing my creativity through drawing, and immersing myself in various hobbies. With a penchant for reliability and trustworthiness, I bring dedication and enthusiasm to everything I do. Let's embark on a journey together!</p>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* <div className="row mt-4">
                <div className="col">
                    <img id={styles.my_img}
                        src="images/3.jpg" alt="" />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <img id={styles.my_img}
                        src="images/ajySelfyTest.jpg" alt="" />
                </div>
            </div> */}

            </div>
            {/* <div className="container-fluid">
                <ThisWeek />
            </div>

            <div className="container" id="work-container">
                < WorksPage />
            </div> */}

            {/* <div className="container" id='connect-container'>
                <Contact />
            </div> */}

        </>

    );
}

export default Home;
