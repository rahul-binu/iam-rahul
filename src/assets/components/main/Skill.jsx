import React from "react";

const Skill = () => {
    return (
        <>
            <section id="skills" class="skills section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2 className="display-3 fw-bold text-center">Skills</h2>
                        <div className="heading-line mb-1"></div>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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
                                    <div class="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">JavaScript <i class="val">75%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div class="progress">
                                <span class="skill">PHP <i class="val">80%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">WordPress/CMS <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">Photoshop <i class="val">55%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" style={{ width: '100%' }}></div>
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
