import React from "react";
import styles from '../../styles/Welcome.module.css'
import * as Icon from 'react-bootstrap-icons';

const Welcome = () => {

    return (
        <>
            <section id="home" className={`${styles.introSection}`}>
                <div className="container">
                    <div className="row align-items- text-white">

                        <div className="col-md-6 intros text-start mb-5">
                            <h1 className="display-2">
                                <span className="display-2--intro">Hey!, I'm Rahul</span>
                                <span className="display-2--description lh-base">
                                    <p className={`${styles.description}`}> Busy bee here, but you've got the golden ticket to my inbox! Chat anytime!</p>
                                </span>
                            </h1>
                            <a href="https://wa.me/8590199265">
                                <button type="button" className="rounded-pill btn-rounded px-4 py-3 mx-2" id={`${styles.button}`}>
                                    <b>Get in Touch</b>
                                    <span><Icon.ArrowRight /></span>
                                </button>
                            </a>
                        </div>

                        <div className="col-md-6 intros " data-aos="zoom-in" >
                            <div className={`${styles.video_box}`}>
                                <img src="/images/programmer.webp" alt="" className={`${styles.img_box}`} />
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="" viewBox="0 0 1440 320">
                    <path fill="#ffffff" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </section>
        </>
    );
}

export default Welcome;