import React from "react";

const Skill = () => {
    return (
        <>
            <section id="skills" class="skills section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2 className="display-3 fw-bold text-center">Skills</h2>
                        <div className="heading-line mb-1"></div>
                        <p className="text-secondary fw-bold text-center">
                            My skills encompass a wide range of programming languages and technologies,
                            allowing me to tackle diverse challenges with confidence and precision. With a keen eye for detail and a passion for continuous learning,
                            I excel at crafting innovative solutions that exceed expectations and drive success.
                        </p>
                    </div>

                    <div class="row skills-content">

                        <div class="col-lg-6">

                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" style={{ width: '100%' }}></div>
                                </div>
                            </div>


                            <div class="progress">
                                <span class="skill">CSS <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">JavaScript <i class="val">65%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '65%' }}></div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div class="progress">
                                <span class="skill">Java <i class="val">50%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">n <i class="val">40%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '40%' }}></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">n <i class="val">55%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '55%' }}></div>
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
