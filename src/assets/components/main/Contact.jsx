import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Contact.module.css';
import * as Icon from 'react-bootstrap-icons';

const Contact = () => {
    const observer = useRef(
        new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                } else {
                    entry.target.classList.remove(styles.show);
                }
            });
        })
    );

    useEffect(() => {
        const hiddenElements = document.querySelectorAll(`.${styles.vDiv}`);
        hiddenElements.forEach(el => {
            observer.current.observe(el);
        });
    }, []);

    return (
        <div>
            <section>
                <div className={`row- m-2 mb-4 ${styles.mainDiv}`}>
                    {/* <a href="">
                        <div className={`col- mx-2 p-2 ${styles.div1} ${styles.vDiv}`}>
                            <Icon.Whatsapp />
                        </div>
                    </a> */}

                    <a href="https://www.instagram.com/rahul._.binu/">
                        <div className={`col- mx-2 p-2 ${styles.div2} ${styles.vDiv}`}>
                            <Icon.Instagram />
                        </div>
                    </a>

                    <a href="">
                        <div className={`col- mx-2 p-2 ${styles.div3} ${styles.vDiv}`}>
                            <Icon.Facebook />
                        </div>
                    </a>

                    <a href="">
                        <div className={`col- mx-2 p-2 ${styles.div4} ${styles.vDiv}`}>
                            <Icon.Linkedin />
                        </div>
                    </a>

                    <a href="">
                        <div className={`col- mx-2 p-2 ${styles.div5} ${styles.vDiv}`}>
                            <Icon.Envelope />
                        </div>
                    </a>

                    <a href="">
                        <div className={`col- mx-2 p-2 ${styles.div6} ${styles.vDiv}`}>
                            <Icon.Github />
                        </div>
                    </a>
                </div>
            </section >
        </div >
    );
};

export default Contact;
