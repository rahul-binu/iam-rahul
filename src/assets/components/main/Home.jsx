import React from "react";
import styles from '../../styles/Home.module.css';

const Home = () => {
    return (
        <div className="container">

            <div className="row mt-3">
                <div className="col-lg-5 md-12 sm-12" style={{
                    justifyContent:'center',display:'flex'
                }}>
                    <img id={styles.profile_pic}
                        src="images/ajySelfyTest.jpg" alt="" />
                </div>
                <div className="col-lg-7 md-12 sm-12" id={styles.aboutMe}>
                    <div className="row" id={styles.introduction}>
                        <div className="col-12">
                            <h1>Hello,</h1>
                            <h3>a bit about me</h3>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 m-3" id={styles.my_resume}>
                            <h5>My Resume</h5>
                        </div>
                        <div className="col-3 m-3" id={styles.my_work}>
                            <h5>My Work</h5>
                        </div>
                        <div className="col-3 m-3"id={styles.contact_me}>
                            <h5>Connect me</h5>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col" id={styles.description}>
                            <p>Hey there! I'm Rahul Binu, a passionate individual with a zest for life. I find joy in exploring new adventures, expressing my creativity through drawing, and immersing myself in various hobbies. With a penchant for reliability and trustworthiness, I bring dedication and enthusiasm to everything I do. Let's embark on a journey together!</p>
                       </div>
                    </div>
                </div>
            </div>
            

            <div className="row mt-4">
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
            </div>

        </div>
    );
}

export default Home;
