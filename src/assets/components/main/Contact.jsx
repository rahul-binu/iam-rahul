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
                <div className={`row- ${styles.mainDiv}`}>
                    {/* <a href="">
                        <div className={`col- m-2 mx-3  ${styles.div1} ${styles.vDiv}`}>
                            <Icon.Whatsapp />
                        </div>
                    </a> */}

                    <a href="https://www.instagram.com/rahul._.binu/">
                        <div className={`col- m-2 mx-3  ${styles.div2} ${styles.vDiv}`}>
                            <Icon.Instagram />
                        </div>
                    </a>

                    <a href="https://www.facebook.com/rahul.binu.5688">
                        <div className={`col- m-2 mx-3  ${styles.div3} ${styles.vDiv}`}>
                            <Icon.Facebook />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/rahul-binu/">
                        <div className={`col- m-2 mx-3  ${styles.div4} ${styles.vDiv}`}>
                            <Icon.Linkedin />
                        </div>
                    </a>

                    <a href="https://leetcode.com/rahul_binu/">
                        <div className={`col- m-2 mx-3  ${styles.div5} ${styles.vDiv}`}>
                            <Icon.CodeSlash />
                        </div>
                    </a>

                    <a href="https://github.com/rahul-binu">
                        <div className={`col- m-2 mx-3  ${styles.div6} ${styles.vDiv}`}>
                            <Icon.Github />
                        </div>
                    </a>
                </div>
            </section >
        </div >
    );
};

export default Contact;
