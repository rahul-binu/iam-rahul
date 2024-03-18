import React, { useEffect, useState } from 'react';
import styles from '../../styles/WorksPage.module.css';

const WorksPage = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Use setTimeout to delay the animation start
        const timeout = setTimeout(() => {
            setFadeIn(true);
        }, 100);

        // Clear the timeout on component unmount to avoid memory leaks
        return () => clearTimeout(timeout);
    }, []);

    const works = [
        {
            title: 'Work 1',
            description: 'Description of work 1',
            imageUrl: '/path/to/work1-image.jpg',
        },
        {
            title: 'Work 2',
            description: 'Description of work 2',
            imageUrl: '/path/to/work2-image.jpg',
        }, {
            title: 'Work 3',
            description: 'Description of work 3',
            imageUrl: '/path/to/work2-image.jpg',
        },
    ];

    return (
        <div className={`${styles.fade_in} ${fadeIn ? styles.active : ''}`}>
            <h1>My Works</h1>

            <div className="row" id={styles.row}>
                {works.map((work, index) => (
                    <div className="col-lg-4 md-6 sm-12" key={index} id={styles.card_col}>
                        <div className="card p-5 m-3" id={styles.card}>
                            <img src={work.imageUrl} alt={work.title} />
                            <h2>{work.title}</h2>
                            <p>{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorksPage;
