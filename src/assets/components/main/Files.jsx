import React from "react";

const Files = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const certificateClick = (pdf) => {
        window.open(pdf, '_blank');
    };

    const certifications = [
        {
            title: 'CodeIgniter',
            certificate: '',
            description: 'ci-4 CRUD operations',
            pdf: '/pdf/AvodhaECH.pdf'
        }
    ]

    return (
        <>
            <div className="container">
                <div className="container" data-aos="fade-up">
                    <div className="row text-center">
                        <h1 className="display-3 fw-bold">My Certifications</h1>
                        <div className="heading-line mb-1"></div>
                    </div>
                    {/* <!-- START THE DESCRIPTION CONTENT  --> */}
                    <div className="row pt-2 pb-2 mt-0">
                        {/* <div className="col-md-6 border-right  border-end"> 
                            <div className="bg-white p-3">
                                <h2 className="fw-bold text-capitalize text-center">
                                   All
                                </h2>
                            </div>
                        </div> */}
                        <div className="col">
                            <div className="bg-white p-4 text-center">
                                <p className="text-secondary">
                                    The certificates I've attained are a testament to my hard work and dedication, qualities that I'm eager to bring to my work.
                                    Additionally, you can find all my certificates on my LinkedIn profile, further showcasing my accomplishments and skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-5">
                    {certifications.map((certificate, index) => (
                        <div className="col-md-4 my-5" key={index} data-aos="zoom-in">
                            <div className="card shadow">
                                <div class="img-wrapper">
                                    <img src={certificate.certificate} alt="" />
                                    <div class="overlay">
                                        <div class="overlay-infos">
                                            <h5>{certificate.title}</h5>
                                            <p>
                                                {certificate.description}
                                            </p>
                                            <button className="certificate-button justify-content-center" onClick={() => certificateClick(certificate.pdf)}>
                                                <Icon.Search />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </>

    )
}

export default Files;