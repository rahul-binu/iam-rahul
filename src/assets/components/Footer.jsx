import React from "react";
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className="container p-4 pb-0 mb-4">
                <section className=" mt-3">
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }} 
                        href="#!"
                        role="button"
                    ><Icon.Facebook />
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#55acee' }} 
                        href="#!"
                        role="button"
                    >
                        <Icon.Twitter />
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }} 
                        href="#!"
                        role="button"
                    ><Icon.Instagram />
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }} 
                        href="#!"
                        role="button"
                    ><Icon.Linkedin />
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#333333' }} 
                        href="#!"
                        role="button"
                    >
                        <Icon.Github />
                    </a>
                </section>

                <section className="mt-2">
                    <p>All Rights Are Recervied</p>
                </section>

            </div>
        </footer>
    );
}

export default Footer;
