import React, { useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';

import AOS from "aos";
import 'aos/dist/aos.css'

const Services = () => {

    useEffect(() => {
        AOS.init({duration:1000});
    }, [])

    return (
        <>
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="row text-center">
                        <h1 className="display-3 fw-bold">My Services</h1>
                        <div className="heading-line mb-1"></div>
                    </div>
                    {/* <!-- START THE DESCRIPTION CONTENT  --> */}
                    <div className="row pt-2 pb-2 mt-0 mb-3">
                        <div className="col-md-6 border-right  border-end">
                            <div className="bg-white p-3">
                                <h2 className="fw-bold text-capitalize text-center">
                                    My services range from initial design to deployment anywhere, anytime.
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-white p-4 text-start">
                                <p className="text-secondary">
                                    Tailoring my services to meet your needs, I specialize in business analysis, web development, and cybersecurity. From the initial design stages to seamless deployment, I ensure accessibility anywhere, anytime. With a meticulous attention to detail and a dedication to excellence, I deliver tailored solutions that surpass expectations and drive success in the realms of business analysis, web development, and cybersecurity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- START THE CONTENT FOR THE SERVICES  --> */}
                <div className="container">
                    {/* <!-- START THE WEB DEVELOPMENT CONTENT  --> */}
                    <div className="row" >
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 d-flex align-items-center" >
                            <div className="services__content ">
                                <div className="icon d-block fas fa-code service--icon">
                                    <Icon.CodeSlash />
                                </div>
                                <h3 className="display-3--title mt-1">web development</h3>
                                <p className="lh-lg text-secondary">
                                    In the realm of web development, I bring creativity and technical expertise to the table, crafting bespoke solutions that captivate audiences and elevate online presence.
                                    From intuitive user interfaces to seamless backend functionality, I design and develop websites that reflect the unique brand identity and objectives of each client. By staying abreast of the latest technologies and design trends, I ensure that every website I create delivers an exceptional user experience and drives meaningful engagement.
                                </p>
                                {/* <button type="button" className="rounded-pill btn-rounded border-primary py-2 px-4">Find what
                                    <span><Icon.ArrowRight /></span>
                                </button> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
                            <div className="services__pic">
                                <img src="images/webdev.png" alt="web development illustration" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- START THE CS CONTENT  --> */}
                    <div className="row" >
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                            <div className="services__pic">
                                <img src="images/cyber.png" alt="cloud hosting illustration" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 d-flex align-items-center">
                            <div className="services__content">
                                <div className="icon d-block service--icon">
                                    <Icon.ShieldLock />
                                </div>
                                <h3 className="display-3--title mt-1">Cybersecurity</h3>
                                <p className="lh-lg text-secondary">
                                    As a cybersecurity specialist, I prioritize the protection of valuable assets and data integrity. With the ever-evolving threat landscape in mind, I implement robust security measures and protocols to safeguard against cyber threats and vulnerabilities. From proactive risk assessments to incident response planning, I work tirelessly to ensure that my clients' digital environments remain secure and resilient.
                                    By fostering a culture of cybersecurity awareness and preparedness, I empower businesses to mitigate risks and thrive in today's digital landscape.
                                </p>
                                {/* <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
                                    <span><i className="fas fa-arrow-right"></i></span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- START THE Bussin CONTENT  --> */}
                    <div className="row" >
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 d-flex align-items-center">
                            <div className="services__content">
                                <div className="icon d-block fas fa-paper-plane mx-3 service--icon">
                                    <Icon.GraphUpArrow />
                                </div>
                                <h3 className="display-3--title mt-1">Business Analysis</h3>
                                <p className="lh-lg text-secondary">
                                    As a seasoned professional in business analysis, I specialize in uncovering actionable insights and strategies that drive business growth and efficiency. With a keen eye for detail and a strategic mindset, I collaborate closely with clients to identify key challenges, opportunities, and goals.
                                    By leveraging data-driven analysis and industry best practices, I provide invaluable recommendations and solutions that empower businesses to make informed decisions and achieve sustainable success.
                                </p>
                                {/* <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
                                    <span><i className="fas fa-arrow-right"></i></span>
                                </button> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                            <div className="services__pic">
                                <img src="images/bis.png" alt="marketing illustration" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;