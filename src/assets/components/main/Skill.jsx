import React from "react";

const Skill = () => {
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 className="display-3 fw-bold text-center">Skills</h2>
                        <div className="heading-line mb-1"></div>
                        <p className="text-secondary fw-bold text-center">
                            My skills encompass a wide range of programming languages and technologies,
                            allowing me to tackle diverse challenges with confidence and precision. With a keen eye for detail and a passion for continuous learning,
                            I excel at crafting innovative solutions that exceed expectations and drive success.
                        </p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: '100%' }}></div>
                                </div>
                            </div>


                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{ width: '65%' }}></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">Java <i className="val">50%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">n <i className="val">40%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }}></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">n <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }}></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Skill;
